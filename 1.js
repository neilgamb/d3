window.addEventListener('load', () => {

    // Tutorial (YouTube): https://www.youtube.com/watch?v=qIIKw2RFNlU&list=PL6il2r9i3BqH9PmbOf5wA5E1wOG3FT22p&index=2

    // d3.select("h1")
    //     .append("p")
    //     .style("color", "red") // example of d3 styling code
    //     .text("yo");

    // d3 is an object that contains various methods
    // console.log d3 to inspect each available method

    // svg = scalable vector graphics / a way to create 2D graphics in browser
    let canvas = d3.select('body')
                    .append('svg')
                    .attr('width', 500)
                    .attr('height', 500) // create WxH 'canvas' / container attrs
    
    let circle = canvas.append('circle')
                    .attr('cx', 250) // x-coord for center of shape
                    .attr('cy', 250) // y-coord for center of shape
                    .attr('r', 50) // radius
                    .attr('fill', 'red') 
    
    let rect = canvas.append('rect')
                    .attr('width', 100)
                    .attr('height', 50);
    
    // since no coordinates were defined for center, automatically positions rect
    // to top left corner of canvas

    var line = canvas.append('line')
                    .attr('x1', 0)
                    .attr('y1', 100)
                    .attr('x2', 400)
                    .attr('y2', 400)
                    .attr('stroke', 'green')
                    .attr('stroke-width', 5)
})


