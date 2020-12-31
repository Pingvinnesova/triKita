"use strict";

window.addEventListener('DOMContentLoaded', () => {
   

var mySwiper = new Swiper('.customers__wrapper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 8,
    slidesPerGroup: 8,
    // spaceBetween: 25,
    // loop: true,
  
    // Navigation arrows
    navigation: {
        nextEl: '.customers__button--next',
        prevEl: '.customers__button--prev',
    }
});
});