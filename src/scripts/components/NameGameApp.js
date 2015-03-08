'use strict';

var React = require('react/addons');
var Employee = require('./Employee');
var employees = require('../employees');
var ReactTransitionGroup = React.addons.TransitionGroup;
var employees;

// $.ajax({
//     url: 'http://namegame.willowtreemobile.com:2000',
//     success: function(employees) {
//         employees = employees
//     }
// });


// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var NameGameApp = React.createClass({
	getInitialState: function() {
    return {
    	employees: employees,
			roundOver: false,
			choices: null,
			answer: null,
			score: 0,
			turns: 0
		};
  },

  // getEmployees: function(){
		// $.ajax({
	 //    url: 'http://namegame.willowtreemobile.com:2000',
	 //    success: function(employees) {
  //       this.setState({employees: employees});
	 //    }.bind(this),
	 //    error: function(xhr, status, err){
  //       console.error(url, status, err.toString());
  //     }.bind(this)
		// });
  //   // $.ajax({
  //   //   url: this.props.url,
  //   //   dataType: 'json',
  //   //   success: function(data){
  //   //     this.setState({data: data});
  //   //   }.bind(this),
  //   //   error: function(xhr, status, err){
  //   //     console.error(url, status, err.toString());
  //   //   }.bind(this)
  //   // });
  // },
  // componentWillMount: function(){
  //     this.getEmployees();
  // },
  findEmployee: function(name){
  	var person_array = this.state.choices.filter(function (employee) {
				if (employee.name === name){
					return employee;
				}
			});
		return person_array[0];
  },
  employeeClickHandler: function (event) {
		var targetId = event.target.id, employee = this.findEmployee(targetId);
		var index = this.state.choices.indexOf(employee);

		if(!this.state.roundOver && employee){
			if ( targetId === this.state.answer){
				event.target.className = 'right';
				this.state.roundOver = true;
				this.state.turns++;
				this.state.choices.splice(index,1);
			} else {
				if (this.state.turns < 5){
					event.target.className = 'wrong';
					this.state.turns++;
					this.state.choices.splice(index,1);
				}
				else{
					this.state.roundOver=true;
				}
			}
		}
		console.log("choices:" + this.state.choices);
		console.log("turns:" + this.state.turns);
		console.log("score:" + this.state.score);

		if(this.state.roundOver){

		}

	},

  getRandomSubarray: function(size){
  	var i = 0, index, indices = [], arrayLength = this.state.employees.length, someEmployees = [];
    while (i < size) {
      index = Math.floor(Math.random() * arrayLength);
      if(indices.indexOf(index) === -1){
      	someEmployees.push(this.state.employees[index]);
      	indices.push(index);
      	i++;
      }
    }
    return someEmployees;
  },

  prepareToRender: function(){
  	var choices = this.getRandomSubarray(5);
  	var answer = choices[Math.floor(Math.random() * 5)].name;
  	this.state.choices = choices;
  	this.state.answer = answer;
  },

  render: function() {
  	this.prepareToRender();
    return (
      <div className='main'>
	      	<div id="whoIs">
	      		<h3>Who is {this.state.answer}</h3>
				  </div>
					<div id='Employees'>
		      	{this.state.choices.map(function (employee, i) {
		      			return(
		      				<div className='Employee' id={this.props.name} onClick={this.employeeClickHandler} key={i}>
			      				<Employee name={employee.name} url={employee.url}/>
		      				</div>
		      			);
		      		}.bind(this))
			      }
	        </div>
      </div>
    );
  }
});

React.render(<NameGameApp />, document.getElementById('content')); // jshint ignore:line

module.exports = NameGameApp;
