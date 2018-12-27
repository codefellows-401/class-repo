![CF](http://i.imgur.com/7v5ASc8.png) DESIGN - CSS Modules
==========================================================

## Overview
[modular css in react](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e)


## Assignment
Create a `<Header />` and `<Footer />` component, each of which can render children and are styled with CSS Modules.

### Requirements
* Create a new component, called `<Header />`
  * Put this into a new folder in your design/core app
  * Render `this.props.children`, if sent.
  * Accept properties such as `title` for custom display
  * Use a CSS Module to style this instead of a .scss file
* Repeat for `<Footer />`
  * Footers typically have multiple columns of information
  * Perhaps expect this and style appropriately...
  * Practice using CSS-in-JS to style this instead of a .scss file, perhaps passing in some JS Variables

### Notes
You'll now have CSS in regular .scss files at the design level, partials, components with their own .scss files, modules, and some CSS-in-JS solutions.  Kind of a mish-mash. Now it's time to start thinking about approach, scale and noting your own preferences.

These are all different means of hitting the same end, but every tool is different in it's best fit.

### Submission Instructions
Report in canvas with a link to the PR for this branch.  You may merge it to master after your submission is turned in.
