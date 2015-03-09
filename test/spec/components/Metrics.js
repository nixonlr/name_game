'use strict';

describe('Metrics', function () {
  var React = require('react/addons');
  var Metrics, component;

  beforeEach(function () {
    Metrics = require('components/Metrics.js');
    component = React.createElement(Metrics);
  });

  it('should create a new instance of Metrics', function () {
    expect(component).toBeDefined();
  });
});
