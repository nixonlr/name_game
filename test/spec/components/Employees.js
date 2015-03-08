'use strict';

describe('Employees', function () {
  var React = require('react/addons');
  var Employees, component;

  beforeEach(function () {
    Employees = require('components/Employees.js');
    component = React.createElement(Employees);
  });

  it('should create a new instance of Employees', function () {
    expect(component).toBeDefined();
  });
});
