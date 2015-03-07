'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var NamegameApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    NamegameApp = require('components/NamegameApp.js');
    component = React.createElement(NamegameApp);
  });

  it('should create a new instance of NamegameApp', function () {
    expect(component).toBeDefined();
  });
});
