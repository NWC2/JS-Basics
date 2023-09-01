// document.addEventListener('DOMContentLoaded', function(){
    // let green = document.getElementsByClassName('color green');
    // let red = document.getElementsByClassName('color red');
    // let blue = document.getElementsByClassName('color blue');

//     show.addEventListener('click',function(){
//         green.style.display="block";
//     })

//     show.addEventListener('click',function(){
//         red.style.display="block";
// })
//     show.addEventListener('click',function(){
//         blue.style.display="block";
// })
// })
let green = document.querySelector('.green');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let text = document.getElementById('text');
    red.addEventListener("click",function(){
        text.style.color = 'red';
    })
    green.addEventListener("click",function(){
        text.style.color = 'green';
    })
    blue.addEventListener("click",function(){
        text.style.color = 'blue';
    })
    
