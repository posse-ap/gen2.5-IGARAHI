'use strict';
console.log("test");




function logPost(){
  console.log("aaa");
  document.getElementById('modal').style.display="block";
  document.getElementById('modalMask').style.backgroundColor = '#dfdddd';
}







// ドーナッツ一個目
var ctx = document.getElementById("myChart");
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


