'use strict';

var React = require('react/addons');
var Employee = require('./Employee');

require('styles/Employees.css');

var Employees = React.createClass({
  render: function () {
		console.log(this.props.employeeClickHandler);
    return (
      <div id='Employees'>
      	{this.props.choices.map(function (employee, i) {
      			return(
      				<div className='Employee' key={i}>
	      				<Employee name={employee.name} url={employee.url} onClick={this.props.employeeClickHandler} />
      				</div>
      			);
      		}.bind(this))
	      }
      </div>
    );
  }
});

module.exports = Employees; 

