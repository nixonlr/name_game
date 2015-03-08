'use strict';

var React = require('react/addons');

require('styles/Employees.css');

var Employees = React.createClass({
  render: function () {
    return (
      <div id='Employees'>
      	{this.prop.choices.map(function (employee, i) {
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

