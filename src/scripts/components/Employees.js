'use strict';

var React = require('react/addons');
var Employee = require('./Employee');

require('styles/Employees.css');
require('styles/Employee.css');

var Employees = React.createClass({

	findEmployee: function(name){
  	var person_array = this.props.info.choices.filter(function (employee) {
				if (employee.name === name){
					return employee;
				}
			});
		return person_array[0];
  },
  employeeClickHandler: function (event) {
  	console.log(event);
		var targetId = event.target.id, employee = this.findEmployee(targetId);
		var index = this.props.info.choices.indexOf(employee);

		if(!this.props.info.roundOver && employee){
			if ( targetId === this.props.info.answer){
				event.target.className = 'right';
				this.props.info.roundOver = true;
				this.props.info.attempts++;
				this.props.info.choices.splice(index,1);
			} else {
				if (this.props.info.attempts < 5){
					event.target.className = 'wrong';
					this.props.info.attempts++;
					this.props.info.choices.splice(index,1);
				}
				else{
					this.props.info.roundOver=true;
				}
			}
		}
		console.log("choices:" + this.props.info.choices);
		console.log("attempts:" + this.props.info.attempts);
		console.log("score:" + this.props.info.score);
	},

  render: function () {
    return (
      <div id='Employees'>
      	{this.props.info.choices.map(function (employee, i) {
      			return(
      				<Employee name={employee.name} url={employee.url} onClick={this.employeeClickHandler} key={i} />
      			);
      		}.bind(this))
	      }
      </div>
    );
  }
});

module.exports = Employees; 

