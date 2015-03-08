'use strict';

var React = require('react/addons');
var Employee = require('./Employee');

require('styles/Employees.css');

var Employees = React.createClass({
  render: function () {
		console.log(this.props.employeeClickHandler);
    return (
      <div id='Employees'>
      	{
      		this.props.choices.map(function (employee, i) {
      			return(
	      				<Employee name={employee.name} url={employee.url} onClick={this.props.employeeClickHandler} key={i} />
      			);
      		}.bind(this))
	      }
      </div>
    );
  }
});

module.exports = Employees; 

