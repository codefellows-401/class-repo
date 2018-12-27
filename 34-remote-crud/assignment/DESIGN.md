![CF](http://i.imgur.com/7v5ASc8.png) DESIGN - Menus and Navigation
===================================================================

## Implement a `<Nav />` component into your base react/design repository

### Requirements

* Component should accept a single property "items", which is an array of objects, with the shape as demonstrated below.
* Output should be a `<nav>` element with a `<ul>` and `<li>` tags within and nested where required.
* Menu should be styled as a horizontal drop down menu on desktop
  * Hamburger Slide-Out on Mobile

```javascript
[
  {
    title: "home",
    url: "/"
  },
  {
    title: "about",
    url: "/about"
  }
  {
    title: "products",
    items: [
      {
        title: "electronics",
        url: "/electronics"
      },
      {
        title: "books",
        url: "/books"
      }
    ]
  }
]
```

### Stretch Goals
* Allow for more properties to indicate layout
  * Horizontal
  * Vertical
  * Sidebar/Slide-out

### Submission Instructions
Report in canvas with a link to the PR for this branch.  You may merge it to master after your submission is turned in.
