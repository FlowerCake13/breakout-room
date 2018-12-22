# random-goal-generator

Generate goals for next year.

## Objective

Use **Functions**, **Arrays**, **If Statements**, **Events** and more to create a goal generator.

## Prerequisites

To complete this project, students should have the following:
* Intermediate understanding of HTML elements (divs, images, attributes, structure...etc.)
* Intermediate understanding of CSS (Flexbox, absolute positioning...etc.)
* Intermediate understanding of JS (DOM, Events, variables, if statements, arrays)

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:

1. Set up your file structure in the command line:
  * index.html
  * styles.css
  * app.js
2. Link your files.

### Part II HTML

To complete Part II, fulfill the following requirements:
1. Create a ```div``` with an ```id``` of "container".
2. Inside of this container div, create a text element (header or p) with the text of "What will your goal next year be?" and an ```id``` of "goal".
3. Still inside of this container div, create a ```button``` with an ```id``` of "button" and text of "Random category."

### Part III CSS
To complete Part III, fulfill the following requirements:
1. Design your goal generator as you like. Style at least 3 elements.

### Part IV JS
To complete Part IV, fulfill the following requirements:
1. Create variables to store your button and goal elements.
2. Create an array called "categories" that will store at least 4 categories that you may want to improve (Strings) (e.g. 'mind', 'body', 'school'..etc.)
3. For each element in your categories array, create another array with at least 3 specific goals in that category.

Example:
``` javascript
var categories = ["school", "category2", "category3", "category4"];

var school = ["Study once a week", "Goal2", "Goal3"];  
```

4. When we click on the button, the following should happen:
  * The text in the element with id of goal should be changed to a random CATEGORY
  * The text in the button should be changed to "Random goal."
    * When we click the button AGAIN, the text in the goal element should be changed to random GOAL

Hint: Think about how we can detect if the button is clicked again. What can we check for? What is different when we click it the second time vs. the first time?

## Stretch Goal
1. Add images to associate with each goal.
2. Create a simple goal plan with notes and images of how you plan to achieve 1 goal.

Resources:
  * Arrays: https://www.w3schools.com/js/js_arrays.asp
  * Random: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  * Switch Statement: https://www.w3schools.com/js/js_switch.asp
  * Events: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
