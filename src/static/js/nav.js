$('.navbar .install-btn').click(() => window.open("https://chrome.google.com/webstore/detail/markdown/ofbhbpkdidmmopdmdamilkhhehmeianc", "_blank"))

$(document).ready(() => {
  switch(window.location.pathname) {
    case "/stores":
      $('.navbar .stores-link').addClass('active')
  }
})
