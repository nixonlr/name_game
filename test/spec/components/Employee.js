'use strict';

describe('Employee', function () {
  var React = require('react/addons');
  var Employee, component;

  beforeEach(function () {
    Employee = require('components/Employee.js');
    component = React.createElement(Employee);
  });

  it('should create a new instance of Employee', function () {
    expect(component).toBeDefined();
  });
});
