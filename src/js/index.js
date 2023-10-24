// $(window).on("load", function () {
// $('.slider').slick({
//   prevArrow: `<button class="slick-prev slick-arrow" type="button">
//                 <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M6.01527 0.289672L1.03774 5.2672C0.651481 5.65547 0.651481 6.28261 1.03774 6.67088L6.01527 11.6484C6.38758 11.9679 6.9381 11.9679 7.31041 11.6484C7.72755 11.291 7.77629 10.6619 7.4189 10.2447L3.14823 5.97401L7.41895 1.69335C7.80521 1.30508 7.80521 0.677942 7.41895 0.289672C7.03068 -0.0965899 6.40349 -0.09659 6.01527 0.289672Z" fill="#323232"/>
//                 </svg>
//               </button>`,
//   nextArrow: `<button class="slick-next slick-arrow" type="button">
//                 <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M1.98473 0.289672L6.96226 5.2672C7.34852 5.65547 7.34852 6.28261 6.96226 6.67088L1.98473 11.6484C1.61242 11.9679 1.0619 11.9679 0.689592 11.6484C0.272455 11.291 0.223707 10.6619 0.581102 10.2447L4.85177 5.97401L0.581052 1.69335C0.19479 1.30508 0.19479 0.677942 0.581052 0.289672C0.969322 -0.0965899 1.59651 -0.09659 1.98473 0.289672Z" fill="#323232"/>
//                 </svg>
//               </button>`,
//               dots: true, 
//               infinite: false,
//               fade: true,
// });

// $('body').on('click', function (e) {
//   // если клик не по элементу - закрываем
//   const CATALOG_BTN = $('.header__catalog-btn');
//   if (!$(e.target).closest('.catalog-btn').length && CATALOG_BTN.has(e.target).length === 0 && !CATALOG_BTN.is(e.target)) {
//     CATALOG_BTN.removeClass('active');
//   }
// })

// $('body').on('click', '.header__catalog-btn', function (e) {
//   $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
// })
// $('body').on('click', '.banner-discount__close', function (e) {
//   $(this).closest('.banner-discount').remove();
// })
// });
document.addEventListener("DOMContentLoaded", (event) => {
  // document.querySelectorAll('.slider').forEach((slider) => {
  //   slider.slick({
  //     prevArrow: `<button class="slick-prev slick-arrow" type="button">
  //                   <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                     <path d="M6.01527 0.289672L1.03774 5.2672C0.651481 5.65547 0.651481 6.28261 1.03774 6.67088L6.01527 11.6484C6.38758 11.9679 6.9381 11.9679 7.31041 11.6484C7.72755 11.291 7.77629 10.6619 7.4189 10.2447L3.14823 5.97401L7.41895 1.69335C7.80521 1.30508 7.80521 0.677942 7.41895 0.289672C7.03068 -0.0965899 6.40349 -0.09659 6.01527 0.289672Z" fill="#323232"/>
  //                   </svg>
  //                 </button>`,
  //     nextArrow: `<button class="slick-next slick-arrow" type="button">
  //                   <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                     <path d="M1.98473 0.289672L6.96226 5.2672C7.34852 5.65547 7.34852 6.28261 6.96226 6.67088L1.98473 11.6484C1.61242 11.9679 1.0619 11.9679 0.689592 11.6484C0.272455 11.291 0.223707 10.6619 0.581102 10.2447L4.85177 5.97401L0.581052 1.69335C0.19479 1.30508 0.19479 0.677942 0.581052 0.289672C0.969322 -0.0965899 1.59651 -0.09659 1.98473 0.289672Z" fill="#323232"/>
  //                   </svg>
  //                 </button>`,
  //                 dots: true, 
  //                 infinite: false,
  //                 fade: true,
  //   })
  // })

  const swiper = new Swiper('.top-banner .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'fade',
    spaceBetween: 30,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
  const swiper3 = new Swiper('.promo-section .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // spaceBetween: 25,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.promo-section .swiper-next',
      prevEl: '.promo-section .swiper-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 3,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      1300: {
        slidesPerView: 4,
        // spaceBetween: 40
      }
    },
  });
  const regularSwiper = new Swiper('.regular-swiper .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 25,
    slidesPerView: 1,
    slidesPerGroup: 1,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.regular-swiper .swiper-next',
      prevEl: '.regular-swiper .swiper-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1300: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  let body = document.querySelector('body');
  body.addEventListener('click', function (e) {

    // если клик не по элементу - закрываем
    // const CATALOG_BTN = document.querySelector('.header__catalog-btn');
    // if (!e.target.closest('.catalog-btn')) {
    //   CATALOG_BTN.classList.remove('active');
    // }
  })

  document.querySelectorAll('.filter-buttons .btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      btn.classList.contains('active') ? btn.classList.remove('active') : btn.classList.add('active');
    })
  })
  //burger-button
  document.querySelectorAll('.header__catalog-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      btn.classList.contains('active') ? btn.classList.remove('active') : btn.classList.add('active');
    })
  });

  let discountBtn = document.querySelector('.banner-discount__close')
  discountBtn.addEventListener('click', function (e) {
    e.target.closest('.banner-discount').remove();
  })

  document.querySelectorAll('[data-item-counter]').forEach(item => {
    let currentCard = item.closest('.card');

    item.querySelector('.item-counter__add').addEventListener('click', function (e) {
      if (currentCard.classList.contains('over-quantity')) return;

      let currentCount = item.getAttribute('data-item-counter');

      item.setAttribute('data-item-counter', ++currentCount);
      item.querySelector('.item-counter__number').textContent = currentCount;
      if (currentCard.getAttribute('data-item-stock') <= currentCount) {
        currentCard.classList.add('over-quantity');
      }
    })

    item.querySelector('.item-counter__reduce').addEventListener('click', function (e) {
      if (!(item.getAttribute('data-item-counter') > 1)) return;

      let currentCount = item.getAttribute('data-item-counter');
      let currentCard = item.closest('.card');

      item.setAttribute('data-item-counter', --currentCount)
      item.querySelector('.item-counter__number').textContent = currentCount;

      currentCard.classList.remove('over-quantity');
    })

  })


  let modal = new Modal();

  //нажатин вне попапа
  document.querySelector('body').addEventListener('click', function (e) {
    const target = e.target
    if (!target.closest('.modal') && !target.closest('.modal-link')) modal.close();
  })

  //закрываем попап по клику на крестик
  document.querySelectorAll('.close-modal, .close-modal-btn').forEach(btnClose => {
    btnClose.addEventListener('click', function (e) {
      modal.close();
    })
  })

  //открываем попап по его номеру/классу
  document.querySelectorAll('.modal-link').forEach(modalLink => {
    modalLink.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('logdata', modalLink.getAttribute('data-modal'));
      modal.open(modalLink.getAttribute('data-modal'));

    })
  })



  //открыть-закрыть попап
  function Modal() {
    this.open = function (item, title, text) {
      let modalEl = document.querySelector('.modal-wrap' + item)
      modalEl.classList.add('active');
      modalEl.querySelector('.modal').classList.add('active');
      document.querySelector('body').classList.add('js-popup-active');

      if (title != undefined && title != false) {
        modalEl.querySelector('.m-title').textContent(title);
      }

      if (text != undefined && text != false) {
        modalEl.querySelector('.m-text').textContent(text);
      }
    }

    this.close = function (item) {
      let modalEl = document.querySelector(item ? '.modal-wrap' + item : '.modal-wrap');
      modalEl.classList.remove('active');
      modalEl.querySelector('.modal').classList.remove('active');
      document.querySelector('body').classList.remove('js-popup-active');
    }
  }

  // document.querySelectorAll('.catalog-content__item').forEach((item, idx) => {
  //   item.addEventListener('mouseover', function(e){
  //     document.querySelectorAll('.catalog-content__list--subsection .catalog-content__item')[idx].classList.add('active');
  //   })
  //   item.addEventListener('mouseout', function(e){
  //     document.querySelectorAll('.catalog-content__list--subsection .catalog-content__item')[idx].classList.remove('active');
  //   })
  // })
});
