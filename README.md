# generator-angoo [![Build Status](https://secure.travis-ci.org/chambs/generator-angoo.png?branch=master)](https://travis-ci.org/chambs/generator-angoo)

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


## License

MIT
