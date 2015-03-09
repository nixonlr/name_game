'use strict';

describe('WhoIs', function () {
  var React = require('react/addons');
  var WhoIs, component;

  beforeEach(function () {
    WhoIs = require('components/WhoIs.js');
    component = React.createElement(WhoIs);
  });

  it('should create a new instance of WhoIs', function () {
    expect(component).toBeDefined();
  });
});
