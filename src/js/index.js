$(window).on("load", function () {
  console.log('1222');
  
  $('body').on('click', function (e) {
    // если клик не по элементу - закрываем
    const CATALOG_BTN = $('.header__catalog-btn');
    if (!$(e.target).closest('.catalog-btn').length && CATALOG_BTN.has(e.target).length === 0 && !CATALOG_BTN.is(e.target)) {
      CATALOG_BTN.removeClass('active');
    }
  })

  $('body').on('click', '.header__catalog-btn', function (e) {
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
    // 
  })
  $('body').on('click', '.banner-discount__close', function(e){
    $(this).closest('.banner-discount').remove();
  })
});
