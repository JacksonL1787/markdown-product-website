$(".navbar .install-btn").click(() => window.open("https://chrome.google.com/webstore/detail/markdown/ofbhbpkdidmmopdmdamilkhhehmeianc", "_blank"))

$(".navbar .link").click(function() {
  const url = $(this).data("href")
  window.location.href = url
})

$('.navbar .logo-wrap').click(function() {
  window.location.href = "/"
})

$(document).ready(() => {
  switch(window.location.pathname) {
    case "/stores":
      $(".navbar .stores-link").addClass("active")
      break;
    case "/about":
      $(".navbar .about-link").addClass("active")
      break;
  }
})
