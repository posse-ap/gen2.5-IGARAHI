'use strict';
console.log("test");




const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

// function logPost(){
//   console.log("aaa");
//   document.getElementById('modal').style.display="block";
// }



// window.onload = function () {
//   let context = document.getElementById('barGraph');

//   new Chart(context, {
//     type: 'bar',
//     data: {
//       labels: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
//       datasets: [{
//         label: "日本の人口推移",
//         data: [127094745, 127041812, 126918546, 126748506, 126555078, 126146099],
//       }],
//     },
//     options: {
//       responsive: false
//     }
//   })
//   return;
// }


