import React from 'react';
import ReactDOM from 'react-dom';
import {Doughnut, Chart} from 'react-chartjs-2';

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width;
    if (width > 205) {
      var height = chart.chart.height * 0.8;
      var fontSize = (height / 50).toFixed(2); //def: 114
    } else {
      var height = chart.chart.height * 0.6;
      var fontSize = (height / 50).toFixed(2); //def: 114
    }
    var ctx = chart.chart.ctx;

    
    ctx.font = 'bold ' + fontSize + "em poppins";
    ctx.textBaseline = "middle";
    

    var sum = 0;
    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
      sum += chart.config.data.datasets[0].data[i];
    }

    var text = Math.round((chart.config.data.datasets[0].data[0] / sum) * 100).toString() + "%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height * 0.5;
    
    ctx.fillStyle = "#2DCE89";
    ctx.fillText(text, textX, textY);
  }
});

const data = {
  datasets: [{
    data: [82, 18],
    backgroundColor: [
      '#2DCE89',
      '#11CDEF'
    ]
  }],
  labels: [
    'Healthy',
    'Parkinson\'s'
  ]
};

const options = {
  legend: {
    display: true,
    position: 'bottom'
  }
}

class DonutWithText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Doughnut data={this.props.data} options={options}/>
      </div>
    );
  }
};

export default DonutWithText;