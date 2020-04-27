

// var width = Math.max(960, innerWidth),
//     height = Math.max(500, innerHeight);
let width = innerWidth;
let height =innerHeight;

var i = 0;

var svg = d3.select("body").append("svg")
    .style('background-color', '#222')
    .attr("width", width)
    .attr("height", height);


svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

function particle() {
    var m = d3.mouse(this);

    svg.insert("circle", "rect")
        .attr("cx", m[0])
        .attr("cy", m[1])
        .attr("r", 1e-6)
        .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
        // .style("stroke", d3.hsl((i = (i + 1) % 360), 1, ((i % 10) * 0.1)))
        .style("stroke-opacity", 1)
        .transition()
        .duration(3000)
        .ease(Math.sqrt)
        .attr("r", 200)
        .style("stroke-opacity", 1e-6)
        .remove();

    d3.event.preventDefault();
}


