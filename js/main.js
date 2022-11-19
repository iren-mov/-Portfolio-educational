$(function () {


  // переключатель мобильного меню
  mobileMenuTrigger = () => {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__burger').toggleClass('menu__burger--active');
    $('.body').toggleClass('lock');
  }

  // переключает меню по кнопке
  $('.menu__burger').on('click', mobileMenuTrigger);

  smoothPageScroll = (e) => {
    e.preventDefault();

    let href = e.target.getAttribute("href"),
      toTop = $(href)?.offset()?.top || 0;
    $('body,html').animate({
      scrollTop: toTop
    }, 1500)

  }

  // Применяем плавную прокрутку на все ссылки
  $('a').on('click', (e) => smoothPageScroll(e));

  // закрывает меню если кликнута ссылка
  $('.menu__list a').on('click', (e) => {
    mobileMenuTrigger();
  });


  // Прилипающая навигация
  window.onscroll = () => {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {

      $('.menu').addClass('menu--sticky');
    } else {
      $('.menu').removeClass('menu--sticky');
    }
  };



  var mixer = mixitup(".portfolio__content");
});
