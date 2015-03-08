'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;


require('styles/Employee.css');

var Employee = React.createClass({
	getInitialState: function(){
		return {initClass: 'rightOrWrong'};
	},
  render: function(){
    return (
      <div className='Employee'>
        <div className='rightOrWrong' id={this.props.name}>
	        <p> {this.props.name} </p>
        </div>
          <img src={this.props.url} />
      </div>
     );
  }
});

module.exports = Employee; 

