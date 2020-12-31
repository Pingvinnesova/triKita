"use strict";

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#search-input').oninput = function () {
        let val = this.value.trim();
        let searchItems = document.querySelectorAll('.services__item h3');
        if (val != '') {
            searchItems.forEach(function(elem) {
                if (elem.innerText.search(RegExp(val,"gi")) == -1) {
                    elem.closest('.services__item').style.display = 'none';
                    elem.innerHTML = elem.innerText;
                } else {
                    elem.closest('.services__item').style.display = '';
                    let str = elem.innerText;
                    elem.innerHTML = insertMark(str, elem.innerText.search(RegExp(val,"gi")), val.length);
                }
            });
        } else {
            searchItems.forEach(function(elem) {
                elem.closest('.services__item').style.display = '';
                elem.innerHTML = elem.innerText;
            });
        }
    }

    function insertMark(string, pos, len) {
        return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
    }

    // show-on-scroll

    let scroll = window.requestAnimationFrame ||
        // IE Fallback
        function(callback){ window.setTimeout(callback, 1000/60)};
        let elementsToShow = document.querySelectorAll('.show-on-scroll'); 

        function loop() {

        elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);

    function isElementInViewport(el) {
        // special bonus for those using jQuery
        // if (typeof jQuery === "function" && el instanceof jQuery) {
        //   el = el[0];
        // }
        var rect = el.getBoundingClientRect();
        return (
          (rect.top <= 0
            && rect.bottom >= 0)
          ||
          (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
          ||
          (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
      }
}

// Call the loop for the first time
loop();

var mySwiper = new Swiper('.customers__wrapper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 8,
    slidesPerGroup: 8,
    spaceBetween: 10,
    // loop: true,
  
    // Navigation arrows
    navigation: {
        nextEl: '.customers__button--next',
        prevEl: '.customers__button--prev',
    }
});
});