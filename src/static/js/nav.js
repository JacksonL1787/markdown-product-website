
$(() => {
  const handleWindowResize = () => {
    const width = $(window).width()
    console.log(width)
    if(width <=700) {
      $(".navbar").addClass("compress");
    } else {
      $(".navbar").removeClass("compress");
      $(".navbar-side-menu").hide()
      setTimeout(() => {
        $(".navbar-side-menu").show()
      }, 300)
      $(".navbar-side-menu").removeClass("active");
    }
  }

  $(".navbar .menu-btn").click(() => {
    $(".navbar-side-menu").addClass("active")
    $("body").css("overflow", "hidden")
  })

  $(".navbar-side-menu .close-btn").click(() => {
    $(".navbar-side-menu").removeClass("active")
    $("body").css("overflow", "auto")
  })

  $(".navbar .install-btn, .navbar-side-menu .install-btn").click(() => window.open("https://chrome.google.com/webstore/detail/markdown/ofbhbpkdidmmopdmdamilkhhehmeianc", "_blank"))

  $('.navbar .logo-wrap').click(function() {
    window.location.href = "/"
  })

  $(document).ready(() => {
    switch(window.location.pathname) {
      case "/":
        $(".navbar-side-menu .home-link").addClass("active")
        break;
      case "/stores":
        $(".navbar .stores-link, .navbar-side-menu .stores-link").addClass("active")
        break;
      case "/support":
        $(".navbar .support-link, .navbar-side-menu .support-link").addClass("active")
        break;
    }
  })

  $(window).resize(handleWindowResize)
  $(window).ready(handleWindowResize)
})
