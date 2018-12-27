![CF](http://i.imgur.com/7v5ASc8.png) LAB -  `<Login />` and `<Auth />`
=================================================

## Before you begin
* Fork [this sandbox](https://codesandbox.io/s/j32q2y3ko5) and complete your work in that fork.
* Reference: [`<Login />` and `<Auth />` implementation](https://codesandbox.io/s/q359203jmq) for use in wiring up your code.
  * You'll want do download this so that you can use the `auth` folder/components in your lab.

## Implement Login and Authorization into an existing application

### Requirements
* Hide the entire interface until the user has logged in.
* When a user logs in, add a "Log Out" link in the header
* Implement the following RBAC rules:
  * Logged In Users with 'read' permissions can see the list of records
  * Logged In Users with 'delete' permissions can delete records
  * Logged In Users with 'update' permissions can edit existing records
  * Logged In Users with 'create' permissions can create new records

### Notes
* You may not alter the functionality of the existing application components.
* You may only grant access using RBAC
* The server has the following user accounts (username:password) that you can use to login as a user with varying permissions
  * admin:ADMIN (create, read, update, delete)
  * editor:EDITOR (create, read, update)
  * user:USER (read)

### Testing
* Write a suite of UI tests that assert the existence of components based on user login state.
* You will need to create some mocking interface to fake a server/login to simulate.


##  Documentation
Complete the README.md file included in the lab folder
