// d3.js

let data = [4, 8, 15, 16, 23, 42];

function some(){
    const newDiv = d3.create("div")
        .style("font", "10px sans-serif")
        .style("text-align", "right")
        .style("color", "white");

    newDiv.selectAll("div")
        .data(data)
        .join("div")
        .style("background", "steelblue")
        .style("padding", "3px")
        .style("margin", "1px")
        .style("width", d => `${d * 10}px`)
        .text(d => d);

console.log('something');

    return newDiv.node();
}
some();


function more() {
    const table = d3.create("table");
    const tbody = table.append("tbody");
    tbody.append("tr").append("td").text("First!");
    tbody.append("tr").append("td").text("Second.");
    tbody.append("tr").append("td").text("Third.");
    return table.node();
}
more();





function another(){
    d3.selectAll('p')
    .style('color', 'red');
}

another();