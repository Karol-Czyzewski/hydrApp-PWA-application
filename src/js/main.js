"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const number = document.querySelector('.glass__numberinput--js');
const plus = document.querySelector('.glass__button--add-js');
const remove = document.querySelector('.glass__button--remove-js');
const header = document.querySelector('.header--js');
const value = 0; value >= 9;
const endOfdrink = 9
const list = document.querySelector('.list-js')
let key = new Date (). toISOString () .slice (0, 10);



plus.addEventListener('click', (e) => {

  number.innerHTML++;

  if (number.innerHTML >= 9) {
    number.innerHTML = `${endOfdrink}`;
  }
   
  localStorage.setItem(key, `${number.innerHTML}`);
  list.innerHTML = key + ` you drink ${number.innerHTML} cups of water`
});

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0)
  number.innerHTML = `${value}`;
} else {
  number.innerHTML = localStorage.getItem(key); 
}

remove.addEventListener('click', () => {

  number.innerHTML--;

  if (number.innerHTML < 0) {
    number.innerHTML = `${value}`;
  }
  list.innerHTML = key + ` you drink ${number.innerHTML} cups of water`
  localStorage.setItem(key, `${number.innerHTML}`);

});

list.innerHTML = key + ` you drink ${localStorage.getItem(key)} cups of water`

//if (localStorage.getItem('glass')) {
//  number.value = localStorage.getItem('glass')
//}






