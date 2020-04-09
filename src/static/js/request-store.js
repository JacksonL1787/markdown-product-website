$(".markdown-logo").click(() => {
  window.location.href="/"
})

$(".store-input").focus(() => {
  $(".input-container").addClass("active")
})

$(".store-input").focusout(() => {
  const val = $(".store-input").val().replace(" ", "")
  if(val.length <= 0) {
    $(".input-container").removeClass("active")
  }
})

$(".store-input").on("input", () => {
  if($(".store-input").val().replace(" ", "").length > 0) {
    $(".input-container").removeClass("error")
  }
})

$(document).ready(() => {
  if($(".store-input").val().replace(" ", "").length > 0) {
    $(".input-container").addClass("active")
  }
})

$(".button-container").click(function() {
  if($(this).hasClass("loading")) return;
  if($(".store-input").val().replace(" ", "").length <= 0) {
    $(".input-container").addClass("error")
    return;
  }
  $(this).addClass("loading")
  $(".cancel-link").hide()
  const data = {
    storeName: $(".store-input").val().toUpperCase()
  }
  $.post({
    url: "/api/post/request-store",
    data: data,
    success: () => {
      window.location.href="/request-success"
    }
  })
})
