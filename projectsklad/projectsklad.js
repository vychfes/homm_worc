but.onclick = function (){
    let stringArray = document.getElementById('area').value.split(',');
    let getOut = document.getElementById("nameprod");
    let listText = document.createElement("ul");
    getOut.appendChild(listText);
    let numberItem = stringArray.length;
    let listItem;
    for (let i = 0; i < numberItem; ++i){
        listItem = document.createElement("li");
        listItem.innerHTML = stringArray[i];
        listText.appendChild(listItem);
    }
    console.log()
// }
// but.onclick = function (){
//     let stringArray = document.getElementById('price').value.split(',');
//     let getOut = document.getElementById("number");
//     let listText = document.createElement("ol");
//     getOut.appendChild(listText);
//     let numberItem = stringArray.length;
//     let listItem;
//     for (let i = 0; i < numberItem; ++i){
//         listItem = document.createElement("li");
//         listItem.innerHTML = stringArray[i];
//         listText.appendChild(listItem);
//     }

}
// but.onclick = function (){
//     let stringArray = document.getElementById('price1').value.split(',');
//     let getOut = document.getElementById("priceprod1");
//     let listText = document.createElement("ol");
//     getOut.appendChild(listText);
//     let numberItem = stringArray.length;
//     let listItem;
//     for (let i = 0; i < numberItem; ++i){
//         listItem = document.createElement("li");
//         listItem.innerHTML = stringArray[i];
//         listText.appendChild(listItem);
//     }
//
// }
// but.onclick = function (){
//     let stringArray = document.getElementById('price2').value.split(',');
//     let getOut = document.getElementById("priceprod2");
//     let listText = document.createElement("ol");
//     getOut.appendChild(listText);
//     let numberItem = stringArray.length;
//     let listItem;
//     for (let i = 0; i < numberItem; ++i){
//         listItem = document.createElement("li");
//         listItem.innerHTML = stringArray[i];
//         listText.appendChild(listItem);
//     }
//
// }
// but.onclick = function (){
//     let stringArray = document.getElementById('price3').value.split(',');
//     let getOut = document.getElementById("priceprod3");
//     let listText = document.createElement("ol");
//     getOut.appendChild(listText);
//     let numberItem = stringArray.length;
//     let listItem;
//     for (let i = 0; i < numberItem; ++i){
//         listItem = document.createElement("li");
//         listItem.innerHTML = stringArray[i];
//         listText.appendChild(listItem);
//     }
//
// }

