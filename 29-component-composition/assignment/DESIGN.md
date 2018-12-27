![CF](http://i.imgur.com/7v5ASc8.png) DESIGN - Component Composition
===================================================================

## Assignment
**Create some Cards and Decks**

You will now be combining your existing work with the design and new work on React components into a single repository or sandbox.  The goal being that you will have a library of style-able plug and play components, along with a full site theme.

The components will be stylable on their own and augmented by the theme if it exists.

The theme will be a standalone means of styling a core website and component set.

Separately, they can solve problems. Together, perhaps they can rule the world?

### Requirements
Reference: [Cards and Decks Starter Code](https://codesandbox.io/s/km24yvxx8v)

* Using the `content.json` file in the starter code as a guide/source, create a page of cards and decks with the following baseline considerations:
  * `<Page />` should be a collection of Deck Components
  * `<Deck />` should be a collection of Card Components
  * `<Card />` should be the representation of a content record in markup
  * From a markup standpoint ...
    * Decks are sections with a class of 'deck'
    * Cards are divs with a class of 'card'
  * From a styling standpoint ...
    * Each component should carry it's own .scss, responsible for basic layout, based on options.
    * Each component should import the design to gain access to variables and mixins
    * Lean on the design for actual styling, animations, etc.

### Submission Instructions
Report in canvas with a link to the PR for this branch of your repo or your sandbox.  You may merge it to master after your submission is turned in.
