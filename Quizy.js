'use strict';


const wronganswer = document.getElementsByClassName('false');
const wrongseikai = document.getElementById('false');
const wrongseikai2 = document.getElementById('false2');

  const seikai = document.getElementById('correct');

    // クリック//
    seikai.addEventListener('click', () =>{
    seikai.classList.add('answer');
    seikai.classList.add('cantclick');
    wrongseikai.classList.add('cantclick');
    wrongseikai2.classList.add('cantclick');
    let truebox = document.getElementById("truebox");
  
    truebox.style.display ="block";
    });


    
  for(let i = 0; i< wronganswer.length; i++){
  console.log(i+'回目です');
  wronganswer[i].addEventListener('click', () =>{
    wronganswer[i].classList.add ('uncorrect');
    });
}


// function clicked(){  

//   let truebox = document.getElementById("truebox");
  
//   truebox.style.display ="block";

  
// }


function missclicked(){
var falsebox = document.getElementById("falsebox");
    falsebox.style.display ="block";
}



// document.getElementsById("correct").onclick=(){
//   document.getElementsByClassName("falsebox");
// };


