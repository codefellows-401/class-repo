![CF](http://i.imgur.com/7v5ASc8.png) LAB - Context and Hooks
=============================================================

## Before you begin
* Start with a new react app, created at Code Sandbox or locally with create-react-app

## Implement a Context Provider and Consumer
Create a React application that wraps the entire `<App/>` with a context provider, created using Context API. Then, create multiple components that act as consumers to your context, using it in various ways.

### Requirements
* Create a GenericContext Provider component, which exposes 2 bits of state and functions that can change them.
* Wrap your entire app in that `.Provider` so that all child components can optionally subscribe to it as consumers.
* Create child components (even nested ones) that register as a `.Consumer` to the provided context.
* Change bits of state by calling functions from the provider and render parts of states within the components.
  * Can one component issue a function call to the provider that changes the context for all other components?
  * What if they are nested?

### Testing
* Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
  * Can they see context?
  * Can they interact via published functions?

##  Documentation
Complete the README.md file included in the lab folder
