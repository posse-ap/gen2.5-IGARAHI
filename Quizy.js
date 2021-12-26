'use strict';





    
  for( let i=1; i <=2; i++){
    const trueanswer = document.getElementById("0-1-0");
const wronganswer1 = document.getElementById("0-1-1");
const wronganswer2 = document.getElementById("0-1-2");
  wronganswer.addEventListener('click', () =>{
    wronganswer+`${i}`.classList.add ('uncorrect');
    trueanswer.classList.add ('answer');
    trueanswer.classList.add('cantclick');
    wronganswer+`${i}`.classList.add('cantclick');
    let truebox = document.getElementById("falsebox");
    truebox.style.display ="block";
    let falsebox = document.getElementById("truebox");
    falsebox.style.display ="block";
    });
  }


  trueanswer.addEventListener('click', () =>{
    trueanswer.classList.add ('answer');
    wronganswer.classList.add('cantclick');
    wronganswer.classList.add('cantclick');
    let falsebox = document.getElementById("truebox");
    falsebox.style.display ="block";
    });





// for