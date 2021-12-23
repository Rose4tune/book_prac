var graph = document.getElementsByClassName('graph');
var graphCnt = graph.length;
var arr = [];
for (let i = 0; i < graphCnt.length; i++) {
  const num = graph[i].dataset;
  arr.push(num);
}

console.log(arr);

d3.selectAll(".graph")
  .style("background", "#efefef")
  .on('click', function(){console.log('you clicked a div')});
