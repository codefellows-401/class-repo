![CF](http://i.imgur.com/7v5ASc8.png) LAB - React Testing and Deployment
==============================================================

## Assignment

### Write Tests
* Visit the Sandbox containing the [Lab Starter Code](https://codesandbox.io/s/2471rk2wzr) and FORK it.
* Write tests to cover the counter component
  * For Up and Down events
    * Assert state changes properly
    * Assert that state is being transferred to the DOM
    * Assert DOM changes

### Deploy the application
* Create a new repository for your application at Github and connect your sandbox to it.
* Clone the repo to your local machine
* Perform an `npm install`
* Perform an `npm run build`
  * You should now have a fully functional static build in the builds folder
* Do a manual deployment of the `build` folder contents to a new Bucket and Cloud at AWS
* Make sure that 'aws.yml' and 'build' are in your .gitignore, and then commit your code back to github.
* Do an automated deployment to another new Bucket/Cloud at AWS


### Submission Instructions
* Upload the completed README.md, with diagram to your Code Sandbox
* Submit a link to your fork of the application running at Code Sandbox with full test coverage
* Submit links to both deployments at AWS
