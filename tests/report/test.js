var mobile = window.matchMedia('(max-width: 321px)');
var tablet = window.matchMedia('(max-width: 769px)');
var labtop = window.matchMedia('(max-width: 1200px)');
var doublePage = window.matchMedia('(max-width: 1550px)');

var flexBox = document.querySelectorAll('.txtAuto');

window.onload = function(){
  resiaing();
}
window.onresize = function(){
  resiaing();
}

function resiaing(){
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

d3.selectAll(".graph")
  .style("background", "#efefef")
  .html("Graph Area");
