'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;


require('styles/Employee.css');

var Employee = React.createClass({
	getInitialState: function(){
		return {initClass: 'rightOrWrong'};
	},
	componentWillReceiveProps: function(nextProps) {
		// console.log(nextProps.answer)
		// if(nextProps.answer === this.props.name){
		//   this.setState({initClass: 'right'});
		// } else {
		// 	this.setState({initClass: 'wrong'});
		// }
		this.setState({initClass: 'rightOrWrong'});
	},
  render: function(){
    return (
      <div className='Employee' >
        <div className={this.state.initClass} id={this.props.name} onClick={this.props.employeeClickHandler} >
	        <p> {this.props.name} </p>
        </div>
          <img src={this.props.url} />
      </div>
     );
  }
});

module.exports = Employee; 

