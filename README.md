# SimpleLegal Coding Challenge

![Workflow screenshots](https://github.com/l4nk332/simple-legal-coding-challenge/blob/master/assets/screenshot-panel.png)

## Set-up

1. Pull Repo down locally to your machine.

2. Change into the root of the project directory.

3. Run `npm install` to install node module dependencies.

> Will create and populate a `node_modules/` folder

4. Run `bower install` to install client-side dependencies.

> Will create and populate a `bower_components/` folder

5. Run a static file server to serve the `index.html` file.

> You can most likely just run `python -m SimpleHTTPServer` and visit the url listed in the console.

## My Process

**Brainstorm**

- Sketch a wireframe.

- Mark-up layout grid structure.

- Identify the components.

**Markup**

- Begin	laying out html structure for page and larger components.

- Set up and configure smaller sub-components with the proper data.

- Set up state within components.

**Style**

- Set base layer of styles onto page and major html elements, while setting up mixins and color/font variables.

- Reset some styles from framework (if framework is used) or set styles from normalize.css

- Sharpen up remaining layout, modules, states, and themes.

- Possibly add finishing touches with animation, transitions, or transforms.

## Technology Used

* **[React](https://facebook.github.io/react/)** - The foundation for setting up and breaking page into components and sub-components.

* **[Sass](http://sass-lang.com/)** - Pre-processed styles to help keep the stylesheet dry and maintainable.

* **[Gulp](http://gulpjs.com/)** - Build tool used for transpiling Sass into CSS. Can also be used for minification and other useful tasks.

* **[Recharts](http://recharts.org/)** - A charting library built with React and D3.

* **[React Bootstrap](https://react-bootstrap.github.io/)** - React implementation of Bootstrap that works well with react components.

* **[Babel](https://babeljs.io/)** - Used to transpile React ES6/JSX into ES5 client-side javascript.

## Issues

One issue you will find when looking in the developer console are two errors that pertain to Aria screen reading standards. When working with React Bootstrap this issue came up after I had implemented tabbed content. Currently I'm still in the process of figuring this out. *These errors should not cause any issues to the way in which the page is rendering.*
