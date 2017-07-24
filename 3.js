window.addEventListener('load', () => {

    let canvas = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500)
        .append('g')
        .attr('transform', 'translate(20, 0)');

    let circle = canvas.append('circle')
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('r', 25);

    circle.transition()
        .duration(1500)
        .delay(2000)
        .attr("cx", 150)
        .on("end", function () { d3.select(this).attr('fill', 'red'); })
})