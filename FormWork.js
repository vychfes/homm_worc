let form = document.querySelector('.js-form');
let inputForm = document.querySelectorAll('.js-input');
let inputEmail = document.querySelector('.js-input-email');
let inputAge = document.querySelector('.js-input-age');
let inputPassword = document.querySelectorAll('.js-input-password');
let inputCheckbox = document.querySelector('.js-input-checkbox');
let reMail = "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"

form.onsubmit = function (){
    console.log('works')
    return false
}