'use strict';
console.log("test");




function logPost(){
  console.log("aaa");
  document.getElementById('modal').style.display="block";
  document.getElementById('modalMask').style.backgroundColor = '#dfdddd';
}

function extra(){
document.getElementById('modal').style.display="none";
}

// 棒グラフ
var barChart = document.getElementById("barGraph");
var myBarChart = new Chart(barChart , {
  type: 'bar',
  data: {
   //凡例のラベル
    labels: ['','2','', '4','', '6','', '8','', '10','', '12','', '14','', '16', '','18','', '20','', '22','', '24','', '26','', '30'],
    datasets: [
      {

        data: [ 0,2,4,6,5,7,2,9,2,5,4,3,6,8,4,8,3,8,9,1,2,14,4,,5,1,1,6,7,3], //グラフのデータ
        backgroundColor: "rgb(48,175,203)"
      }
    ]
  },
  options: {
    legend:{
        display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 8, //最大値
          suggestedMin: 0, //最小値
          stepSize: 2, //縦ラベルの数値単位
          }
      }]
    },
  }
});



// ドーナッツ一個目
var ctx = document.getElementById("myChart");
var dataLabelPlugin = {
  afterDatasetsDraw: function (chart, easing){
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;
      chart.data.datasets.forEach(function (dataset, i) {
          var dataSum = 0;
          dataset.data.forEach(function (element) {
              dataSum += element;
          });
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                  // Draw the text in black, with the specified font
                  ctx.fillStyle = 'rgb(255, 255, 255)';
                  var fontSize = 12;
                  var fontStyle = 'normal';
                  var fontFamily = 'Helvetica Neue';
                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                  // Just naively convert to string for now
                  var labelString = chart.data.labels[index];
                  var dataString = (Math.round(dataset.data[index] / dataSum * 1000) / 10).toString() + "%";
                  // Make sure alignment settings are correct
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  var padding = 5;
                  var position = element.tooltipPosition();
                  // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
                  ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
              });
          }
      });
  }
};
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Javascript", "CSS", "PHP", "HTML","Laravel","SQL","SHELL","情報システム基礎知識(その他)"],
    datasets: [{
        backgroundColor: [
          "#0345ec",
          "#0f71bd",
          "#20bdde",
          "#4bd1fe",
          "#b29ef3",
          "#6d46ec",
          "#4a17ef",
          "#3105c0"

        ],
        data: [38, 31, 21, 10,12,11,11,11]
    }]
  },
  plugins: [dataLabelPlugin],
  options: {
    maintainAspectRatio: false,
    legend: {
      position: 'bottom'
  },title: {
      display: true,
      text: '学習言語'
    },
    mounted () {
      this.renderChart(this.data, this.options)
    }

  }

});

// ドーナッツ２個目
var ctx = document.getElementById("myChartR");
var dataLabelPlugin = {
  afterDatasetsDraw: function (chart, easing) {
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;
      chart.data.datasets.forEach(function (dataset, i) {
          var dataSum = 0;
          dataset.data.forEach(function (element) {
              dataSum += element;
          });
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                  // Draw the text in black, with the specified font
                  ctx.fillStyle = 'rgb(255, 255, 255)';
                  var fontSize = 12;
                  var fontStyle = 'normal';
                  var fontFamily = 'Helvetica Neue';
                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                  // Just naively convert to string for now
                  var labelString = chart.data.labels[index];
                  var dataString = (Math.round(dataset.data[index] / dataSum * 1000) / 10).toString() + "%";
                  // Make sure alignment settings are correct
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  var padding = 5;
                  var position = element.tooltipPosition();
                  // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
                  ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
              });
          }
      });
  }
};
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["ドットインストール", "N予備校", "POSSE課題"],
    datasets: [{
        backgroundColor: [
          "#0345ec",
          "#0f71bd",
          "#20bdde",
          "#4bd1fe",
          "#b29ef3",
          "#6d46ec",
          "#4a17ef",
          "#3105c0"

        ],
        data: [38, 31, 21]
    }]
  },
  plugins: [dataLabelPlugin],
  options: {
    maintainAspectRatio: false,
    legend: {
      position: 'bottom'
  },title: {
      display: true,
      text: '学習コンテンツ'
    },
    mounted () {
      this.renderChart(this.data, this.options)
    }

  }

});

// tweetしない場合

let logPostContainer = document.getElementById('logPostContainer');

let twitterComment = document.getElementById('twitterComment').value;

let logCompletedModal = document.getElementById('logCompletedModal');

let twitterShare = document.getElementById('twitterShare');

let loading = document.getElementById('loading');







/* tweet機能 */



function LogPost(){

  if(twitterShare.checked === true){
    // twitterに投稿
    window.open("https://twitter.com/intent/tweet?text=" + twitterComment);

  //   // loading画面モーダル


  loading.style.visibility = 'visible';
  //   function init() {
  //     let elements = document.getElementsByTagName('button');
  //     for (let element of elements) {
  //         if (element.getAttribute('data-id')) {
  //             element.addEventListener('click', testLoad);
  //         }
  //     }
  //     stopAllLoad();
  // }
  
  // function testLoad() {
  //     let dataId = this.getAttribute('data-id');
  //     if (dataId) {
  //         startLoad(dataId);
  //         setTimeout(stopAllLoad, 3000);
  //     }
  // }
  
  // function startLoad() {
  //   loading.style.visibility = 'visible';
  // }
  
  // function stopAllLoad() {
  //     let elements = document.getElementsByClassName('loading');
  //     for (let element of elements) {
  //         element.style.visibility = 'hidden';
  //     }
  // }
  
  // window.addEventListener('loading', init);

    // 完了画面
    setTimeout(() => {
      loading.style.visibility = 'hidden';

    logCompletedModal.style.display ="block";
  }, 5000);
  }else{
    // lording画面


// 記録完了画面
    logCompletedModal.style.display ="block";
  }



};

logPostContainer.addEventListener('click',LogPost);






