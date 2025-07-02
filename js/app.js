"use strict";
const btn = document.getElementById(1);
const input = document.getElementById(2);
let label = document.getElementById(3);
let resVal;
let flag = 'false';
btn.addEventListener("click", function (e) {
if (resVal == undefined || resVal == '') {
setRequiredStyle();
    
}else {

}
});

const setRequiredStyle = (e) => {
     input.classList.add('req');
        label.style.display = "block";
}
input.oninput = (e) =>{
     resVal = e.target.value;
    if (resVal.trim() == '') {
       setRequiredStyle();
    } else {
        console.log("маємо текст");
        input.classList.remove('req');
        label.style.display = "none";
    }    
    
};

