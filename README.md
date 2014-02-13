# generator-angoo [![Build Status](https://secure.travis-ci.org/chambs/generator-angoo.png?branch=master)](https://travis-ci.org/chambs/generator-angoo)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-angoo from npm, run:

```
$ npm install -g generator-angoo
```

Finally, initiate the generator:

```
$ mkdir app
$ cd app
$ yo angoo
```

### File structure

The angoo generator will create the structure below:

```
- .editorconfig
- .jshintrc
- Gruntfile.js
- app/
--- css/
--- index.html
--- js/
----- main.js
--- lib/
- bower.json
- bower_components/
- node_modules/
- package.json
```

### Developing

Inside your folder project, we have only one task to run, is the **Grunt default**, you can run: `grunt`,

And it make all the necessary commands:

- Copy dependencies from `bower_components` to your `lib/` folder
- Upping a local server on: `http://localhost:9090`
- `watch` your files under `app/` folder


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
