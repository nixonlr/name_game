'use strict';

var HelperFunctions = function () {
	this.employees = [];
	this.getRandomSubArray = function(array, size){
  	var i = 0, index, indices = [], arrayLength = array.length, randomSubArray = [];
    while (i < size) {
      index = Math.floor(Math.random() * arrayLength);
      if(indices.indexOf(index) === -1){
      	randomSubArray.push(array[index]);
      	indices.push(index);
      	i++;
      }
    }
    return randomSubArray;
  };
	this.findEmployee = function(employees, employeeName){
    var employee = employees.filter(function (employee) {
        if (employee.name === employeeName){
          return employee;
        }
      });
    return employee[0];
  };
  this.getFirstName = function(name){
  	var firstName = '', l = name.length;
  	for (var i = 0; i < l; i++) {
  		if(name[i] === ' '){
  			break;
  		}
  		firstName += name[i];
  	}
  	return firstName;
  };
  this.findEmployeesByFirstName = function(employees, firstName){
  	var results = employees.filter(function (employee) {
        if (this.getFirstName(employee.name) === firstName){
          return employee;
        }
      });
  	return results;
  };
  this.getEmployees = function(url) {
  	$.get(url, function(data) {
      this.employees = data;
      console.log(data);
    }.bind(this));
  };
};




var helperFunctions = new HelperFunctions();
helperFunctions.getEmployees('http://namegame.willowtreemobile.com:2000/');

module.exports = helperFunctions;