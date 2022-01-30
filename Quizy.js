'use strict';

const wrapper = document.getElementById('wrapper');

for (let i = 1; i < 10; i++) {
  let Array = [
    ['たかなわ', 'こうわ', 'たかわ'],
    ['かめいど', 'かめど', 'かめと'],
    ['こうじまち', 'かゆまち', 'おかちまち'],
    ['おなりもん', 'おかどもん', 'ごせいもん'],
    ['とどろき', 'たたら', 'たたりき'],
    ['しゃくじい', 'いじい', 'せきこうい'],
    ['ぞうしき', 'ざっしき', 'ざっしょく'],
    ['おかちまち', 'みとちょう', 'ごしろちょう'],
    ['ししぼね', 'ろっこつ', 'しこね'],
    ['こぐれ', 'こばく', 'こしゃく'],
  ]
  let answerBox = 
    ['たかなわ', 'かめいど', 'こうじまち', 'おなりもん', 'とどろき', 'しゃくじい', 'ぞうしき', 'おかちまち', 'ししぼね', 'こぐれ']

    let trueAnswer =[
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    ]
  
  let insertHtml = '<h1 class="siteTitle">ガチで東京の人しか解けない！＃東京の難読地名クイズ</h1>'
+'<div class="content">'
+'<h2 class="h2">' + `${i}` + ',この地名は何て読む？</h2>'
+'<img src="./img/' + `${i}` +'.png" ></img>'
+'<ul class="list-of-choices" id="btn">'
+'<li class="choice true" id="' + `${i}` + '-0" onclick="answer(' + `${i}` + ', 0)">' + `${Array[i-1][0]}` + '</li>'
+'<li class="choice false " id="' + `${i}` + '-1" onclick="answer(' + `${i}` + ', 1)">' + `${Array[i-1][1]}` + '</li>'
+'<li class="choice false" id="' + `${i}` + '-2" onclick="answer(' + `${i}` + ', 2)">' + `${Array[i-1][2]}` + '</li>'
+'</ul>'
+'<div class="trueBox"  id="trueBox' + `${i}`  + '">'
+'<h3>正解！</h3>'
+'<p>正解は「' + `${answerBox[i-1]}` + '」です！</p>'
+'</div>'
+'<div class="falseBox" id="falseBox' + `${i}`  + '">'
+'<h4>不正解！</h4>'
+'<p>正解は「' + `${answerBox[i-1]}` + '」です！</p>'
+'</div>'
+'</div>';
wrapper.insertAdjacentHTML('beforeend', insertHtml);


const array = [Array[[i]]];
array.sort((a,b) => 0.5 - Math.random());
console.log(array);



  }

function answer(questionNumber, qed){
  const trueAnswer = document.getElementById(questionNumber + "-" + 0);
  const wrongAnswer1 = document.getElementById(questionNumber + "-" + 1);
  const wrongAnswer2 = document.getElementById(questionNumber + "-" + 2);
  const trueBox =document.getElementById("trueBox" + questionNumber);
  const falseBox =document.getElementById("falseBox" + questionNumber);
  

  console.log(qed);
  console.log(questionNumber);
  console.log(questionNumber + "-" + qed);
  console.log(trueAnswer);

  if(qed === 0){
    trueAnswer.classList.add('answer');
    trueAnswer.classList.add('cantClick');
    wrongAnswer1.classList.add('cantClick');
    wrongAnswer2.classList.add('cantClick');
    trueBox.style.display ="block";
    
  }else if(qed === 1){
    trueAnswer.classList.add('answer');
    trueAnswer.classList.add('cantClick');
    wrongAnswer1.classList.add('cantClick');
    wrongAnswer2.classList.add('cantClick');
    wrongAnswer1.classList.add('unCorrect');
    falseBox.style.display ="block";

  }else{
    trueAnswer.classList.add('answer');
    trueAnswer.classList.add('cantClick');
    wrongAnswer1.classList.add('cantClick');
    wrongAnswer2.classList.add('cantClick');
    wrongAnswer2.classList.add('unCorrect');
    falseBox.style.display ="block";
  }


}

