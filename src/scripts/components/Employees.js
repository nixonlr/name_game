'use strict';

var React = require('react/addons');
var Employee = require('./Employee');

require('styles/Employees.css');

var Employees = React.createClass({
	getInitialState: function(){
		return {url: "http://www.willowtreeapps.com/wp-content/uploads/2014/12/headshot_andrew_harris1.jpg"}
	},
	clickHandler:function(e){
		console.log(e)
	},
  render: function () {
    return (
      <div id='Employees'>
      	{this.props.choices.map(function (employee, i) {
      			return(
      				<Employee name={employee.name} url={this.state.url} onClick={this.clickHandler} key={i} />
      			);
      		},this)
	      }
      </div>
    );
  }
});

module.exports = Employees; 

