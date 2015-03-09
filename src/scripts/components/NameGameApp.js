'use strict';

var React = require('react/addons');
var Employee = require('./Employee');
var Employees = require('./Employees');
var WhoIs = require('./WhoIs');
var Metrics = require('./Metrics');
var employees = require('../employees');
var helperFunctions = require('../helperFunctions');
var ReactTransitionGroup = React.addons.TransitionGroup;


// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var NameGameApp = React.createClass({
	getInitialState: function() {
    return {
    	mode: '',
    	employees: employees,//helperFunctions.employees
    	metrics:{attempts:[], right:0, wrong:0},
			attempts: [],
			roundOver: false,
			choices: [],
			answer: ''
		};
  },
  componentDidMount: function(){
  	var choices = helperFunctions.getRandomSubArray(this.state.employees, 5);
  	var answer = choices[Math.floor(Math.random() * 5)].name;

  	if(this.state.attempts.length > 0){
  		this.state.metrics.attempts.push(this.state.attempts.length);
  	}
  	this.setState({choices: choices, answer: answer, roundOver: false, attempts:[]});
  },
  restoreStyling: function(ids){
  	var i = 0, l = ids.length;
  	for (i = 0; i < ids.length; i++){
  		document.getElementById(ids[i]).className = 'rightOrWrong';
  	}
  },
  prepareForNxtRound: function(){
  	this.restoreStyling(this.state.attempts);
  	this.componentDidMount();
  }, 
  clickHelper: function(event, rightOrWrong, targetId, index){
  	if(rightOrWrong === 'right'){
			this.state.roundOver = true;
			this.state.metrics.right++;
  	} else if(rightOrWrong === 'wrong'){
			this.state.metrics.wrong++;
  	} else{
  		return;
  	}
		event.target.className = rightOrWrong;
  	this.state.attempts.push(targetId);
		this.state.choices.splice(index,1);
  },
  employeeClickHandler: function (event) {
		var targetId = event.target.id, employee = helperFunctions.findEmployee(this.state.employees, targetId);
		var index = this.state.choices.indexOf(employee);

		if(!this.state.roundOver && employee){
			if ( targetId === this.state.answer){
				this.clickHelper(event,'right', targetId, index);
			} else {
				if (this.state.attempts.length < 5){
					this.clickHelper(event,'wrong', targetId, index);
				}
				else{
					this.setState({roundOver:true});
				}
			}
		}
		console.log(this.state);

		if(this.state.roundOver){
			setTimeout(function(){ 
				this.prepareForNxtRound();
			}.bind(this), 1500);
		}
	},  
  render: function() {
    return (
      <div className='main'>
	      	<WhoIs answer={this.state.answer}/>
					<Employees choices={this.state.choices} employeeClickHandler={this.employeeClickHandler} ref='employees' />
					<Metrics metrics={this.state.metrics} />
      </div>
    );
  }
});

React.render(<NameGameApp />, document.getElementById('content')); // jshint ignore:line

module.exports = NameGameApp;
