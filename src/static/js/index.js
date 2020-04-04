$(".header .advert .advert-link-wrap").click(() => window.open("https://chrome.google.com/webstore/detail/markdown/ofbhbpkdidmmopdmdamilkhhehmeianc", "_blank"))

$(() => {
  const runFadeAnimation = () => {
    const container = $(".header .header-content")
    setTimeout(() => {
      container.find(".triangle").addClass("fadeIn")
    }, 200)
    setTimeout(() => {
      container.find(".slogan").addClass("fadeIn")
      setTimeout(() => {
        container.find(".advert-text").addClass("fadeIn")
        setTimeout(() => {
          container.find(".advert-link-wrap").addClass("fadeIn")
          setTimeout(() => {
            container.find(".web-page-demo").addClass("fadeIn")
          }, 200)
        }, 200)
      }, 200)
    }, 300)
  }

  $(document).ready(() => {
    runFadeAnimation()
  })
})

$(() => {
  const notificationCycle = () => {
    let count = 1;
    let productsN = Math.round(Math.random() * 100) + 30
    let cheaperN = Math.round(Math.random() * productsN/1.5) + 30
    let notifications = [
      "Finding similar products...",
      `We found ${productsN} products similar to what you’re looking at.`,
      `${cheaperN} of the similar items we found are on sale.`,
      "Added product to favorites."
    ]
    setInterval(() => {
      let activeElem = $(".quick-notifications-container .notification-container.active")
      let inactiveElem = $(".quick-notifications-container .notification-container:not(.active)")
      inactiveElem.find(".message").text(notifications[count])
      activeElem.removeClass("active")
      inactiveElem.addClass("active")
      activeElem.animate({
        top: 100
      }, 500, () => {
        activeElem.css("top", "-100px")
      })
      inactiveElem.animate({
        top: 0
      }, 500)
      if(count === notifications.length - 1) {
        productsN = Math.round(Math.random() * 100) + 30
        cheaperN = Math.round(Math.random() * productsN/1.5) + 30
        notifications = [
          "Finding similar products...",
          `We found ${productsN} products similar to what you’re looking at.`,
          `${cheaperN} of the similar items we found are on sale.`,
          "Added product to favorites."
        ]
        count = 0;
      } else {
        count++;
      }

    }, 3000)
  }
  $(".choose-us-container .accordian .slide").click(function() {
    if($(this).hasClass("active")) return;
    $(".choose-us-container .accordian .slide").removeClass("active")
    $(this).addClass("active")
  })

  $(document).ready(() => {
    notificationCycle()
  })
})

$(() => {
  const runSlideStores = (width) => {
    let leftSlide1, leftSlide2;
    setInterval(() => {
      leftSlide1 = $(".vast-stores-container .stores-slide-wrap .slide1")[0].offsetLeft - 1
      $(".vast-stores-container .stores-slide-wrap .slide1").css("left", `${leftSlide1}px`)
      if(Math.abs(leftSlide1) > width) {
        leftSlide1 = leftSlide2+width
        $(".vast-stores-container .stores-slide-wrap .slide1").css("left", `${leftSlide1}px`)
      }
    }, 8)

    setInterval(() => {
      leftSlide2 = $(".vast-stores-container .stores-slide-wrap .slide2")[0].offsetLeft - 1
      $(".vast-stores-container .stores-slide-wrap .slide2").css("left", `${leftSlide2}px`)
      if(Math.abs(leftSlide2) > width) {
        leftSlide2 = leftSlide1+width
        $(".vast-stores-container .stores-slide-wrap .slide2").css("left", `${leftSlide2}px`)
      }
    }, 8)
  }

  const appendSlideStores = () => {
    $.get('../json/stores.json', stores => {
      stores.sort((a,b) => {
        if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
      })
      const width = stores.length*(375)
      $(".vast-stores-container .stores-slide-wrap .slide").css('width', `${width}px`)
      $(".vast-stores-container .stores-slide-wrap .slide2").css('left', `${width}px`)
      stores.forEach((s) => {
        $(".vast-stores-container .stores-slide-wrap .slide").append(`<img alt="${s.name}" class="store-logo" src="https://${s.icon.imgProv === "uplead" ? 'logo.uplead.com': 'logo.clearbit.com'}/${s.icon.imgSrc}${s.icon.greyscale ? '?greyscale=true' : ''}"></img>`)
      })
      runSlideStores(width)
    })
  }

  $(document).ready(() => {
    appendSlideStores()
  })
})
