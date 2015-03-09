'use strict';

var React = require('react/addons');

require('styles/WhoIs.css');

var WhoIs = React.createClass({
  render: function () {
    return (
    		<h3>Who is {this.props.answer}</h3>
      );
  }
});

module.exports = WhoIs; 

