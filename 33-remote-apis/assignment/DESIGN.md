![CF](http://i.imgur.com/7v5ASc8.png) DESIGN - `<List />` Component
===================================================================

## Assignment
Implement a new compoent: `<List />` in your design repository

### Requirements
* The component should accept either an array of items or child elements.
* It should allow for up to 3 properties
  * `type` to indicate the type of list
    * Accept `unordered` (default) or `ordered`
  * `display` to indicate which style class to apply
  * `items`: an array of items to render
    * Given `items`, each item's content should be rendered in a `<li>`
* If you have `props.children` instead of `items`, render those directly.
* If you have both `children` and `items` render out the `items`

### Submission Instructions
Report in canvas with a link to the PR for this branch.  You may merge it to master after your submission is turned in.
