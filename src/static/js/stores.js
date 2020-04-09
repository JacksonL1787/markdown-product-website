
const addStores = () => {
  $.get('../json/stores.json', stores => {
    stores.sort((a,b) => {
      if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
    })
    stores.forEach((s) => {
      $('.stores-container').append(`
        <div class="store" data-link="${s.url}">
          <div class="content">
            <img class="logo" src="https://${s.icon.imgProv === "uplead" ? 'logo.uplead.com': 'logo.clearbit.com'}/${s.icon.imgSrc}${s.icon.greyscale ? '?greyscale=true' : ''}"></img>
            <div class="info">
              <h1 class="title">${s.name}</h1>
              <p class="desc">${s.desc}</p>
            </div>
          </div>
        </div>
      `)
    })
  })
}

const handleSearch = () => {
  const search = $('.search-bar .search-inpt').val().replace(/ |&|'|\.|/gi, '')
  let isValidSearch = false;
  if(search.length === 0) {
    $('.no-results-container').hide()
    $('.stores-container .store').show()
    return;
  }
  $('.stores-container .store').each(function() {
    let sName = $(this).find('.title').text().replace(/ |&|'|\.|/gi, '').toLowerCase()
    if(! sName.startsWith(search.toLowerCase())) {
      $(this).hide()
    } else {
      $(this).show()
      isValidSearch = true;
    }
  })
  if(!isValidSearch) {
    $('.no-results-container h2 span').text(`"${search}"`)
    $('.no-results-container').show()
  } else {
    $('.no-results-container').hide()
  }
}

$('.search-bar .search-inpt').on('input', function() {
  if($(this).val().length > 0) {
    $('.search-bar .clear-search').show()
  } else {
    $('.search-bar .clear-search').hide()
  }
  handleSearch()
})

$(document).on('click', '.stores-container .store', function() {
  const url = `https://${$(this).data('link')}`
  console.log(url)
  window.open(url, "_blank")
})

$('.search-bar .clear-search').click(function() {
  $('.search-bar .search-inpt').val("")
  $(this).hide()
  handleSearch()
  $('.search-bar .search-inpt').focus()
})

$(".header .request-store-btn").click(() => {
  window.location.href="/request-store"
})

$(document).ready(() => {
  addStores()
})
