window.addEventListener('load', () => {

    let dataArray = [10, 40, 50, 60];

    let width = 500;
    let height = 500;

    console.log(d3);

    let widthScale = d3.scaleLinear()
        .domain([0, 60])
        .range([0, width]);

    let color = d3.scaleLinear()
        .domain ([0, 60])
        .range (['red', 'blue']);

    let axis = d3.axisBottom()
        .ticks(5)
        .scale(widthScale);

    let canvas = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height) 
        .append('g')
        .attr('transform', 'translate(20, 0)');

    var bars = canvas.selectAll('rect')
        .data(dataArray)
        .enter()
            .append('rect')
            .attr('width', function(d) {return widthScale(d)})
            .attr('height', 50)
            .attr('fill', function(d) {return color(d)})
            .attr('y', function(d, i){return i * 70})

    canvas.append('g')
        .attr('transform', 'translate(0, 290)')
        .call(axis);
})