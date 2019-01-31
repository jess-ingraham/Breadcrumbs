//import Plotly as plt from 'plotly.js-geo-dist';

document.addEventListener('DOMContentLoaded', function(){
    
    

    const data = {
        type: "scatter"
        ,mode: "lines"
        ,x:['1/1/19', '1/2/19', '1/3/19', '1/4/19']
        ,y:[60.92, 15.00, 25.00, 32.49]
        ,line:{color:'rgba(71, 249, 240, 1)'}
        
    }
    
    const axis_template ={
        showgrid:false
        
    }

    const layout = {
        title:"Monthly Spending"
        ,paper_bgcolor:'rgba(131, 151, 145, 1)'
        ,plot_bgcolor:'rgba(0,0,0,0)'
        ,xaxis:axis_template
        ,font:{family:"'Poppins', sans-serif", size:18, color:'rgba(244, 235, 236, 1)'}
    }
    
    const trace = [data];
    const div = document.querySelector('.content .graph');

    Plotly.plot(div, trace, layout);

});


function makeGraph(data, div){
    Plotly.plot(div, data);
}

function makeTimeSeriesPlotTotals(rows, dateStart, dateEnd, div){
    
}

function getDailyTotals(rows, dateStart, dateEnd){
    const start = new Date(dateStart);
    const end = new Date(dateEnd);
    
}