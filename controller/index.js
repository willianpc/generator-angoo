'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

function nospaces(str) {
    return str.replace(/ /g, '');
}


var ControllerGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Creating controller ' + this.name + ' at "controllers" folder.');
  },

  files: function () {
    this.template('_controller.js', 'app/js/controllers/' + nospaces(this.name) + '.js');
  }
});

module.exports = ControllerGenerator;