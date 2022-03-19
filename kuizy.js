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
    

    var insertHtml =`
    <p class="titlePosition">` + ` ${i}` + `.この地名なんて読む？</p>
    <img src="./img/${i}.png" class="imgPosition">` 

    randomNumber.forEach(function (answerRandomNumber){
      insertHtml = insertHtml + `<li class="choicePosition" id="choiceQuestion${i-1}-${answerRandomNumber}" onclick="answer(${i-1},${answerRandomNumber})">${numbers[i-1][answerRandomNumber]}</li>`;
      console.log(numbers[i-1][answerRandomNumber]);
    });

  



    // console.log(${numbers[i-1][answerRandomNumber]})
    // ${numbers[i-1][answerRandomNumber]}
    
    
    insertHtml = insertHtml + `<div class="trueBox" id="trueBox${i-1}">
    <h2>正解！</h2>
    <p>正解は${numbers[i-1][0]}です！
    </p>
    </div>
    <div class="falseBox" id="falseBox${i-1}">
    <h2>不正解！</h2>
    <p>正解は${numbers[i-1][0]}です！
    </p>
    
    </div>`


    content = content + insertHtml;
    };
  
    wrapper.innerHTML = content;
  

    function  arrayShuffle (arr) {
      let newPosition,
          temp;
    
        for (let i = arr.length-1 ;i >0; i--){
          newPosition = Math.floor(Math.random() * (i + 1));
          temp = arr[i];
          arr[i] = arr[newPosition];
          arr[newPosition] = temp;
        }
        return arr ;
    
      };

               //1-------1
function answer(question,qed){

  let trueBox = document.getElementById(`trueBox${question}`);
  let falseBox = document.getElementById(`falseBox${question}`);

  if(qed === 0){
    trueBox.style.display="block";
    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('true');

    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${1}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('cantClick');
    

  }else if(qed ===1){
    falseBox.style.display="block";
    document.getElementById(`choiceQuestion${question}-${1}`).classList.add('false');
    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('true');

    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${1}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('cantClick');
    console.log('1',falseAnswer);
  
  }else{
    falseBox.style.display="block";
    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('false');
    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('true');

    document.getElementById(`choiceQuestion${question}-${0}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${1}`).classList.add('cantClick');

    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('cantClick');
    document.getElementById(`choiceQuestion${question}-${2}`).classList.add('false');
    console.log('1',falseAnswer);
  
  }

};
















    





