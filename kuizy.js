'use strict';


const wrapper = document.getElementById('wrapper');



// function shuffle(arrays){
//   const array =arrays.slice()
//   newPosition,
//   temp
//   for (let i = array.length ;i>= 0; i--){
//     newPosition,
//     temp

//     const randomINdex = Math.floor(Math.random()* (i + 1));


//   }



  function  arrayShuffle (arr) {
  let newPosition,
      temp;

    for (i = arr.length ;i >=0; i--){
      newPosition = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPosition];
      arr[newPosition] = temp;
    }
    return arr ;

  };

// let newArray = arrayShuffle(numbers);
// let newArray2 = arrayShuffle(newArray);


// let answer =[0]
// console.log(answer);






    const numbers= [
      ['たかなわ','こうわ','たかわ'],
      ['かめいど','かめど','かめと'],
      ['かゆまち','こうわ','たかわ'],
    ]


    for (let i= 1 ;i<=10 ;i++ ){
    const randomnumber = [0,1,2];
    arrayshuffle(rondomnumber);

    var insertHtml =`<h1 class="topTitle">ガチで東京の人しか解けない！＃東京の難読地名クイズ</h1>
    <p class="titlePosition">` +`${i}`+`.この地名なんて読む？</p>
    <a class="imgPosition"><img src="./img/` +`${i}`+`png"></a>
    <ul class="choicesPosition" id ="btn">`

      randomnumber.foreach(function (answerrandomnumber){
        console.log(answerrandomnumber);
        insertHtml = insertHtml +`<li class="choice false judgeMent" id="judgement${i}-${answerRandomNumber}")>${numbers[i-1][answerRandomNumber]}</li>`;
      });
      `<li class="choicePosition">`+`${Array[0][0]}`+`</li>
      <li class="choicePosition">`+`${Array[0][1]}`+`</li>
      <li class="choicePosition">`+`${Array[0][2]}`+`</li>
    </ul>`
    
    
    
    
    insertHtml = insertHtml + `<div class="trueBox" id="trueBox">
    <h2>正解！</h2>
    <p>正解はたかなわです！
    </p>
    </div>
    <div class="falseBox" id="falseBox">
    <h2>不正解！</h2>
    <p>正解はたかなわです！
    </p>
    
    </div>`

    }




wrapper.insertAdjacentHTML('beforeend', insertHtml);


console.log(insertHtml);
