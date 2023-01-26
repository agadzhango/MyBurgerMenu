"use strict"
function openNav() {
    document.getElementById('nav').style.transform='translateX(0)';
    document.getElementById('mask').style.visibility='visible';
};

function closeNav() {
    document.getElementById('nav').style.transform='translateX(-350px)';
    document.getElementById('mask').style.visibility='hidden';
};

let mask_content = document.getElementById('mask');
mask_content.onclick = closeNav; 

let button = document.getElementById('button');
button.onclick = openNav;
let button2 = document.getElementById('button2');
button2.onclick = closeNav;
