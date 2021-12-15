// elem.onclick = function (){
//     alert('Hello, Palmo!');
// };
// elem2.onclick = function (){
//     alert('Hello, World!');
// };
//
//
// elem3.onclick = function (){
//     console.log(text2.value)
// };
//
//
//
//
// let result = document.getElementById("text31").innerHTML;
// let result2 = document.getElementById("text3").innerHTML;
// elem4.onclick = function (){
//     if (document.getElementById("text31").innerHTML = result2){
//         document.getElementById("text3").innerHTML = result;
//     }else {
//         document.getElementById("text31").innerHTML = result2;
//     }
//
//
// }
//
//
//
// let chargcolor = document.getElementById("text4")
// elem5.onclick = function () {
//     if (chargcolor.style.color === 'red') {
//         chargcolor.style.color = '';
//     } else {
//         chargcolor.style.color = 'red';
//     }
// }
//
//
//
//
// let bockInput = document.getElementById("text6");
// elem6.onclick = function (){
//    if (bockInput.disabled === true){
//        bockInput.disabled = !bockInput.disabled;
//    } else {
//        bockInput.disabled = true;
//    }
//
// }
// let chargcolor1 = document.getElementById("qwert1");
// let chargcolor2 = document.getElementById("qwert2");
// qwert1.onclick = function () {
//     if (chargcolor1.style.background === "green") {
//         chargcolor1.style.background = "red";
//         chargcolor2.style.background = "green";
//     } else {
//         chargcolor1.style.background = "green";
//         chargcolor2.style.background = "red";
//     }
// }
//
// elem7.onclick = function () {
//     let uls = document.getElementById('num');
//     let li = document.createElement("li");
//         li.innerText = "я пункт списка";
//         uls.appendChild(li);
//
// }
//
//
//
//
//
// elem8.onclick = function (){
//     let stringArray = document.getElementById('text8').value.split(',');
// let getOut = document.getElementById("out");
// let listText = document.createElement("ol");
// getOut.appendChild(listText);
// let listItem;
// for (let i = 0; i < stringArray.length; i++){
//     listItem = document.createElement("li");
//     listItem.innerHTML = stringArray[i];
//     listText.appendChild(listItem);
// }
//
// }


let reMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
let reAge = /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/
let rePass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g
let reLogin = /^[a-zA-z]{1}[a-zA-Z1-9]{5,20}$/
let inputLogin = document.getElementById('login');
let inputMail = document.getElementById('mail');
let inputAge = document.getElementById('age');
let inputPass = document.getElementById('pass');
let inputPassConfirmation = document.getElementById('pass2');
let btn = document.getElementById('form_butt');
let formInputs = document.querySelectorAll('.js-input');

function validateEmail(email) {
    return reMail.test(String(email).toLowerCase());
}
function validateLogin(login) {
    return reLogin.test(String(login));
}
function validateAge(age) {
    return reAge.test(String(age));
}
function validatePass(pass) {
    return rePass.test(String(pass));
}

btn.onclick = function () {
    let emailVal = inputMail.value,
        loginVal = inputLogin.value,
        ageVal = inputAge.value,
        passVal = inputPass.value,
        passCon = inputPassConfirmation.value,
    spanText = document.getElementById('span')
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })
    if (emptyInputs.length !== 0) {
        console.log('input not error')
        return false;
    }
    if (!validateEmail(emailVal)) {
        console.log('email not valid');
        inputMail.classList.add('error');
        spanText.innerText = 'email в не верном формате';
        return false;
    } else {
        inputMail.classList.remove('error')
    }
    if (!validateLogin(loginVal)) {
        console.log('login not valid');
        inputLogin.classList.add('error');
        spanText.innerText = 'Не верно введен логин';
        return false;
    } else {
        inputLogin.classList.remove('error');
    }
    if (!validateAge(ageVal)) {
        console.log('age not valid');
        inputAge.classList.add('error');
        spanText.innerText = 'Укажите возраст 0-100';
        return false;
    } else {
        inputAge.classList.remove('error');
    }
    if (!validatePass(passVal)) {
        console.log('pass not valid');
        inputPass.classList.add('error');
        spanText.innerText = 'Пароль должен содержать цифры, буквы, заглавные буквы и спец.символ';
        return false;
    } else {
        inputPass.classList.remove('error');
    }
    if (passCon != passVal)  {
        console.log('pass not valid');
        inputPassConfirmation.classList.add('error');
        spanText.innerText = 'Пароль введен не верный';
        return false;
    } else {
        inputPassConfirmation.classList.remove('error');
        spanText.innerText = 'Форма отправлена успешно';

    }
    document.getElementById('login').value = '';
    document.getElementById('age').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('pass2').value = '';

}







