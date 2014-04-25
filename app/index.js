'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var AngooGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
        this.bowerInstall();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('This generate a project ready to work with Angular, RequireJS and something else, maybe.'));

    var prompts = [{
      name: 'projectName',
      message: 'What is the name of your project?'
    }];

    this.prompt(prompts, function (props) {
      this.projectName = props.projectName;
      this.appNameNoSpace = props.projectName.replace(/[ çãõáà]/g, '');

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/js');
    this.mkdir('app/partials');
    this.mkdir('app/js/controllers');
    this.mkdir('app/js/directives');
    this.mkdir('app/js/filters');
    this.mkdir('app/lib');
    this.mkdir('app/css');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('bowerrc', '.bowerrc');
    this.template('_index.html', 'app/index.html');
    this.template('partials/_home.html', 'app/partials/home.html');
    this.template('js/_main.js', 'app/js/main.js');
    this.template('js/_myApp.js', 'app/js/' + this.appNameNoSpace + '.js');
    this.copy('Gruntfile.js', 'Gruntfile.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AngooGenerator;