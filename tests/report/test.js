var labtop = window.matchMedia('(max-width: 1200px)');
var doublePage = window.matchMedia('(max-width: 1550px)');
var pdf = window.matchMedia('(max-width: 2400px)');

var flexBox = document.querySelectorAll('.txtAuto');

window.onload = function(){
  if(pdf.matches){
    resizing();
  }else{
    pdfSizing();
  }
}
window.onresize = function(){
  if(pdf.matches){
    resizing();
  }else{
    pdfSizing();
  }
}

// number of times
var times = document.querySelectorAll('times');
times.innerHTML = '1st tiems.';

// resizing layout
function resizing(){
  for (let i = 0; i < flexBox.length; i++) {
    const items = flexBox[i].childElementCount;
    console.log(items);
  
    if(labtop.matches){
      flexBox[i].style.height = 'auto';
  
    } else if(doublePage.matches) {
      if(items < 3){
        flexBox[i].style.height = 'auto';
      } else if(items >= 3 && items <= 4){
        flexBox[i].style.height = '330px';
      } else {
        flexBox[i].style.height = '540px';
      }
      
    } else {
      if(items >= 3 && items <= 4){
        flexBox[i].style.height = '270px';
      } else if(items > 4) {
        flexBox[i].style.height = '440px';
      }
    }
  }
}

// Change to PDF size
function pdfSizing(){
  for (let i = 0; i < flexBox.length; i++) {
    const items = flexBox[i].childElementCount;
    console.log(items);
    if(items < 3){
      flexBox[i].style.height = 'auto';
    } else if(items >= 3 && items <= 4){
      flexBox[i].style.height = '800px';
    } else {
      flexBox[i].style.height = '1020px';
    }
  }
}

// number of times
var times = document.getElementsByClassName('times');
console.log(times)
for (let i = 0; i < times.length; i++) {
  times[i].innerHTML = '1st times.';
  
}

// page number
var pageNum = document.querySelectorAll('.pageNum');
var pageCnt = [];
for (let i = 0; i < pageNum.length; i++) {
  pageCnt.push(pageNum[i]);

  var index = pageCnt.indexOf(pageCnt[i]);
  pageNum[i].innerHTML = index + 1;
}















d3.selectAll(".graph")
  .style("background", "#efefef")
  .html("Graph Area");

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(50, 50, 20, 0, Math.PI * 2);
ctx.stroke();


animateCircle = function() {
  var ctx = document.querySelector('#myCanvas').getContext('2d');
  var end = Math.PI * 1.5;
  for (var i = 0; i < 100; i++) {
    draw(i);
  };

  function draw(delay) {
    setTimeout(function() {
      ctx.clearRect(0, 0, 200, 200);
      ctx.beginPath();
      ctx.arc(100, 100, 50, 0, end / 100 * delay);
      ctx.stroke();
    }, delay * 10);
  }
};