"use strict";var addStores=function(){$.get("../json/stores.json",function(a){a.sort(function(c,a){return c.name.toLowerCase()<a.name.toLowerCase()?-1:c.name.toLowerCase()>a.name.toLowerCase()?1:0}),a.forEach(function(a){$(".stores-container").append("\n        <div class=\"store\" data-link=\"".concat(a.url,"\">\n          <div class=\"content\">\n            <img class=\"logo\" src=\"https://").concat("uplead"===a.icon.imgProv?"logo.uplead.com":"logo.clearbit.com","/").concat(a.icon.imgSrc).concat(a.icon.greyscale?"?greyscale=true":"","\"></img>\n            <div class=\"info\">\n              <h1 class=\"title\">").concat(a.name,"</h1>\n              <p class=\"desc\">").concat(a.desc,"</p>\n            </div>\n          </div>\n        </div>\n      "))})})},handleSearch=function(){var a=$(".search-bar .search-inpt").val().replace(/ |&|'|\.|/gi,""),b=!1;return 0===a.length?($(".no-results-container").hide(),void $(".stores-container .store").show()):void($(".stores-container .store").each(function(){var c=$(this).find(".title").text().replace(/ |&|'|\.|/gi,"").toLowerCase();c.startsWith(a.toLowerCase())?($(this).show(),b=!0):$(this).hide()}),b?$(".no-results-container").hide():($(".no-results-container h2 span").text("\"".concat(a,"\"")),$(".no-results-container").show()))};$(".search-bar .search-inpt").on("input",function(){0<$(this).val().length?$(".search-bar .clear-search").show():$(".search-bar .clear-search").hide(),handleSearch()}),$(document).on("click",".stores-container .store",function(){var a="https://".concat($(this).data("link"));console.log(a),window.open(a,"_blank")}),$(".search-bar .clear-search").click(function(){$(".search-bar .search-inpt").val(""),$(this).hide(),handleSearch(),$(".search-bar .search-inpt").focus()}),$(document).ready(function(){addStores()});