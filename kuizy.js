'use strict';


const wrapper = document.getElementById('wrapper');

var content;


  for (let i= 1 ;i<=10 ;i++ ){

  
  
    let randomNumber = ['0','1','2'];
    
  
    arrayShuffle(randomNumber);

    const numbers= [
      ['たかなわ','こうわ','たかわ'],
      ['かめいど','かめど','かめと'],
      ['こうじまち','かゆまち','おかちまち'],
      ['おなりもん','おかどもん','ごせいもん'],
      ['とどろき','たたら','たたりき'],
      ['しゃくじい','いじい','せきこうい'],
      ['ぞうしき','ざっしき','ごしろちょう'],
      ['おかちまち','みとちょう','ごしろちょう'],
      ['ししぼね','ろっこつ','しこね'],
      ['こぐれ','こばく','こしゃく'],
    ];
    

    var insertHtml =`<h1 class="topTitle">ガチで東京の人しか解けない！＃東京の難読地名クイズ</h1>
    <p class="titlePosition">` + ` ${i}` + `.この地名なんて読む？</p>
    <a class="imgPosition"><img src="./img/` + ` ${i}` + `.png"></a>`
    
    randomNumber.forEach(function (answerRandomNumber){
      insertHtml = insertHtml + `<li class="choicePosition" id="choiceQuestion${i-1}-${answerRandomNumber}" onclick="answer(${i-1}-${answerRandomNumber})">ok</li>`;
      console.log(numbers[i-1][answerRandomNumber]);
    });

  



    // console.log(${numbers[i-1][answerRandomNumber]})
    // ${numbers[i-1][answerRandomNumber]}
    
    
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


    content = content + insertHtml;
    };
  
    wrapper.innerHTML = content;
  

    function  arrayShuffle (arr) {
      let newPosition,
          temp;
    
        for (let i = arr.length ;i >=0; i--){
          newPosition = Math.floor(Math.random() * (i + 1));
          temp = arr[i];
          arr[i] = arr[newPosition];
          arr[newPosition] = temp;
        }
        return arr ;
    
      };

               //1-------1
function answer(question,qed){



  
  



  let falseAnswer = numbers[question][1];
  let trueBox = document.getElementById('trueBox');
  let falseBox = document.getElementById('falseBox');

  if(qed === 0){
    document.getElementById(`choiceQuestion0-0`).classList.add('true');

    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${1}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('cantClick');
    trueBox.style.display="block";

  }else{
    falseAnswer.classList.add('false');
    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('true');

    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${1}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('cantClick');
    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('false');
    console.log('1',falseAnswer);
    falseBox.style.display="block";
  }

};







// function shuffle(arrays){
//   const array =arrays.slice()
//   newPosition,
//   temp
//   for (let i = array.length ;i>= 0; i--){
//     newPosition,
//     temp

//     const randomINdex = Math.floor(Math.random()* (i + 1));


//   }











    





