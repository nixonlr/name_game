'use strict';

var React = require('react/addons');
var Employee = require('./Employee');

require('styles/Employees.css');

var Employees = React.createClass({
	// getInitialState: function(){
		
	// },
	// clickHandler:function(e){
	// 	console.log(e)
	// },
  render: function () {
    return (
      <div id='Employees'>
      	{this.props.choices.map(function (employee, i) {
      			return(
      				<Employee name={employee.name} url={employee.url} employeeClickHandler={this.props.employeeClickHandler} key={i} />
      			);
      		},this)
	      }
      </div>
    );
  }
});

module.exports = Employees; 

