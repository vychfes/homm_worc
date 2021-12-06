elem.onclick = function (){
    alert('Hello, Palmo!');
};
elem2.onclick = function (){
    alert('Hello, World!');
};


elem3.onclick = function (){
    console.log(text2.value)
};




let result = document.getElementById("text31").innerHTML;
let result2 = document.getElementById("text3").innerHTML;
elem4.onclick = function (){
    if (document.getElementById("text31").innerHTML = result2){
        document.getElementById("text3").innerHTML = result;
    }else {
        document.getElementById("text31").innerHTML = result2;
    }


}



let chargcolor = document.getElementById("text4")
elem5.onclick = function () {
    if (chargcolor.style.color === 'red') {
        chargcolor.style.color = '';
    } else {
        chargcolor.style.color = 'red';
    }
}




let bockInput = document.getElementById("text6");
elem6.onclick = function (){
   if (bockInput.disabled === true){
       bockInput.disabled = !bockInput.disabled;
   } else {
       bockInput.disabled = true;
   }

}
let chargcolor1 = document.getElementById("qwert1");
let chargcolor2 = document.getElementById("qwert2");
qwert1.onclick = function () {
    if (chargcolor1.style.background === "green") {
        chargcolor1.style.background = "red";
        chargcolor2.style.background = "green";
    } else {
        chargcolor1.style.background = "green";
        chargcolor2.style.background = "red";
    }
}

elem7.onclick = function () {
    let uls = document.getElementById('num');
    let li = document.createElement("li");
        li.innerText = "я пункт списка";
        uls.appendChild(li);

}





elem8.onclick = function (){
    let stringArray = document.getElementById('text8').value.split(',');
let getOut = document.getElementById("out");
let listText = document.createElement("ol");
getOut.appendChild(listText);
let numberItem = stringArray.length;
let listItem;
for (let i = 0; i < numberItem; ++i){
    listItem = document.createElement("li");
    listItem.innerHTML = stringArray[i];
    listText.appendChild(listItem);
}

}









