import React from 'react';
import {Doughnut, Chart} from 'react-chartjs-2';

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width;
    var height;
    var fontSize;

    if (width > 205) {
      height = chart.chart.height * 0.8;
      fontSize = (height / 50).toFixed(2); //def: 114
    } else {
      height = chart.chart.height * 0.6;
      fontSize = (height / 50).toFixed(2); //def: 114
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

const options = {
  legend: {
    display: true,
    position: 'bottom',
    onClick: null
  },
  tooltips: {
    mode: 'point'
  }
}

class DonutWithText extends React.Component {
  render() {
    return (
      <div>
        <Doughnut data={this.props.data} options={options}/>
      </div>
    );
  }
};

export default DonutWithText;