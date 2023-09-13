$(window).on("load", function () {
  $('.slider').slick({
    prevArrow: `<button class="slick-prev slick-arrow" type="button">
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.01527 0.289672L1.03774 5.2672C0.651481 5.65547 0.651481 6.28261 1.03774 6.67088L6.01527 11.6484C6.38758 11.9679 6.9381 11.9679 7.31041 11.6484C7.72755 11.291 7.77629 10.6619 7.4189 10.2447L3.14823 5.97401L7.41895 1.69335C7.80521 1.30508 7.80521 0.677942 7.41895 0.289672C7.03068 -0.0965899 6.40349 -0.09659 6.01527 0.289672Z" fill="#323232"/>
                  </svg>
                </button>`,
    nextArrow: `<button class="slick-next slick-arrow" type="button">
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.98473 0.289672L6.96226 5.2672C7.34852 5.65547 7.34852 6.28261 6.96226 6.67088L1.98473 11.6484C1.61242 11.9679 1.0619 11.9679 0.689592 11.6484C0.272455 11.291 0.223707 10.6619 0.581102 10.2447L4.85177 5.97401L0.581052 1.69335C0.19479 1.30508 0.19479 0.677942 0.581052 0.289672C0.969322 -0.0965899 1.59651 -0.09659 1.98473 0.289672Z" fill="#323232"/>
                  </svg>
                </button>`,
                dots: true, 
                infinite: false,
                fade: true,
  });

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
  $('body').on('click', '.banner-discount__close', function (e) {
    $(this).closest('.banner-discount').remove();
  })
});
