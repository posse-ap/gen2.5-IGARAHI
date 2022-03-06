'use strict';

const wrapper = document.getElementById('wrapper');

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) { // i = ランダムに選ぶ終点のインデックス
    const j = Math.floor(Math.random() * (i + 1));  // j = 範囲内から選ぶランダム変数
    [arr[j], arr[i]] = [arr[i], arr[j]]; // 分割代入 i と j を入れ替える
  }
  // console.log(arr);
  return arr;
};

var trueAnswer;
var wrongAnswer1;
var wrongAnswer2;
    function answer(questionNumber, qed){
    
      wrongAnswer1 = Array[questionNumber][1];
      wrongAnswer2 = Array[questionNumber][2];
      trueAnswer =  Array[questionNumber][0];
      let trueBox =document.getElementById("trueBox" + questionNumber);
      let falseBox =document.getElementById("falseBox" + questionNumber);
  
    console.log(qed);
    console.log(questionNumber);
    console.log(questionNumber + "-" + qed);
    console.log(trueAnswer);
  
    if(qed === 0){
      document.getElementById(`judgement${questionNumber}-${qed}`).classList.add('answer');
      document.getElementById(`judgement${questionNumber}-0`).classList.add('cantClick');
      document.getElementById(`judgement${questionNumber}-1`).classList.add('cantClick');
      document.getElementById(`judgement${questionNumber}-2`).classList.add('cantClick');
      trueBox.style.display ="block";
      
    }else{
      document.getElementById(`judgement${questionNumber}-0`).classList.add('answer');
      document.getElementById(`judgement${questionNumber}-2`).classList.add('cantClick');
      document.getElementById(`judgement${questionNumber}-1`).classList.add('cantClick');
      document.getElementById(`judgement${questionNumber}-0`).classList.add('cantClick');
      document.getElementById(`judgement${questionNumber}-${qed}`).classList.add('unCorrect');
      falseBox.style.display ="block";
    }
  
    answer();
    };








const Array = [
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

for (let i = 1; i <= 10; i++) {


  // console.log(NumberOrder);
  // console.log(numberShuffle);
  const randomNumber = ['0', '1', '2'];
  shuffle(randomNumber);

  let insertHtml = '<h1 class="siteTitle">ガチで東京の人しか解けない！＃東京の難読地名クイズ</h1>'
  +'<div class="content">'
  +'<h2 class="h2">' + `${i}` + ',この地名は何て読む？</h2>'
  +'<img src="./img/' + `${i}` +'.png" ></img>'
  +'<ul class="list-of-choices" id="btn">'
  
  randomNumber.forEach(function (answerRandomNumber){
    // console.log(answerRandomNumber);
    console.log(answerRandomNumber);
    insertHtml = insertHtml +`<li class="choice false judgeMent" id="judgement${i}-${answerRandomNumber}")>${Array[i-1][answerRandomNumber]}</li>`;
  });
  
  
  
  insertHtml = insertHtml 
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




// trueAnswer.Math.floor(Math.random()*3);



}


for(let a=1;a<=10;a++){
  for(let b=0;b<=2;b++){
    document.getElementById(`judgement${a}-${b}`).addEventListener('click',function(){
      answer(a,b);
    });
  }
}

