![CF](http://i.imgur.com/7v5ASc8.png) WARMUP - TOPIC
====================================================

## Assignment
Create a basic express server

### Requirements
* Express Based Web/API Server
* Listens on `process.env.PORT`
* Serves static files from a folder called `./public`
* Has a separate `routes.js` file for serving custom routes
  * handles a GET on '/' with a simple response of 'hello'
  * handles a POST on '/save' with a JSON response containing the data posted to the server
* Handles 404's by serving the usera a custom page (.ejs)
* Handles Errors by serving the user a custom page (.ejs)
  * log the actual error to the console
* Write tests for each route, the 404 page, and a simulated error
  * Use supertest, not supergoose
* Deploy to Heroku, via your master branch
* Confirm tests passing at Travis, via your master branch

### Submission Instructions
Report in canvas with a link to the PR for this branch and your heroku URL as well as how long this took you to complete

### Notes
You should be able to complete this from start to finish in ~ :45 minutes.  It may take a few more times completing this exercise to whittle down your times, but this should be considered a baseline for all "Full Stack Javascript Developers"
