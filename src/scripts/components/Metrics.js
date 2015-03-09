'use strict';

var React = require('react/addons');

require('styles/Metrics.css');

var Metrics = React.createClass({

	// componentWillReceiveProps: function(nextProps) {
		
	// 	this.setState({initClass: 'rightOrWrong'});
	// },
	average: function(attempts){
		var sum = attempts.reduce(function(pv, cv) { return pv + cv; }, 0); 
		var l = attempts.length;
		return Math.round((sum/l));
	},
  render: function () {
    return (
        <div id='Metrics' className='Metrics'>
        	<div id='right'>
        		<h5>Correct Guesses: {this.props.metrics.right} </h5>
	        </div>  
	        <div id='wrong'>
	        	<h5>Incorrect Guesses: {this.props.metrics.wrong} </h5>
	        </div>
	        <div id='average'>
	        	<h5>On Average, you take about {this.average(this.props.metrics.attempts) || 0} turn(s) to guess correctly </h5>
	        </div>
        </div>
      );
  }
});

module.exports = Metrics; 

