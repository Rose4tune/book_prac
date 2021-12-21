d3.select("body").append("div")
  .style("border", "1px solid black")
  .html("hello world");

d3.select('div')
  .style('background', 'pink')
  .style('font-size', '24px')
  .attr('id', 'newDiv')
  .attr('class', 'd3div')
  .on('click', function(){console.log('you clicked a div')});