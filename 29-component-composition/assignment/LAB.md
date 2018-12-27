![CF](http://i.imgur.com/7v5ASc8.png) LAB - Component Composition
=================================================================

## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Practice Component Composition
### Assignment 1
* Fork the [Starter Code Sandbox](https://codesandbox.io/s/2zpknvmk0n)
* Create a new component called "Stuff"
* Render this component from the App component with markup/content inside of the `<div>`
* Create a new component called "Things"
* Have `<Stuff>` render `<Things>` with the `<span>` tags nested within it
* Have the `<Things>` component render the div and then the `<span>` tags using the children property

### Assignment 2
* Fork your completed sandbox
* Refactor your work using new modules/files for each component
* Be prepared to discuss/defend file & directory structures chosen
  * Do this will class based components
  * Repeat the process with functional components in different files
    * `<FunctionalStuff />` and `<FunctionalThings />`
  * Your output should repeat, once with each component set

### Stretch Goals / Further Practice
* Have your "Stuff" component compose other components in the same way
* Send named props through to your child and grandchild components and render the data sent

### Testing
* Complete basic render testing on these components

##  Documentation
Complete the README.md file included in the lab folder
