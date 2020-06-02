/*

- When clicking **blue** it should change:

  - Div tag with the id **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white`
*/

let blue = document.querySelector('#blueBtn');
blue.addEventListener('click',() => {

    document.querySelector('.jumbotron').style.backgroundColor = '#588fbd'   
    document.querySelector('.btn.btn-primary.btn-lrg').style.backgroundColor = '#ffa500'
   document.querySelector(".btn.btn-secondary.btn-lrg").style.backgroundColor ='black'
   document.querySelector(".btn.btn-secondary.btn-lrg").style.color = 'white'
})

/*
- When clicking **orange** it should change:

  - Div tag with the id **Jumbotron** background color to `#f0ad4e`
  - **Donate a bike** button background color to `#5751fd`
  - **Volunteer** button background color to `#31b0d5` and text color to `white`
*/
let orange = document.querySelector('#orangeBtn');
orange.addEventListener('click',() => {

    document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e'   
    document.querySelector('.btn.btn-primary.btn-lrg').style.backgroundColor = '#5751fd'
   document.querySelector(".btn.btn-secondary.btn-lrg").style.backgroundColor ='#31b0d5'
   document.querySelector(".btn.btn-secondary.btn-lrg").style.color = 'white'
})

/*
- When clicking **green** it should change:
  - Div tag with the id **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`

*/

let green = document.querySelector('#greenBtn');
green.addEventListener('click',() => {

    document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a'   
    document.querySelector('.btn.btn-primary.btn-lrg').style.backgroundColor = 'black'
   document.querySelector(".btn.btn-secondary.btn-lrg").style.backgroundColor ='#8c9c08'
   
})

/*
## Part 2

Just below the buttons, there's a form called **Register with us today**.

Continue working in `./js/main.js` to add the following functionality:

When the submit button is pressed, it should check that all the form fields are valid:

- The **Email address**, **Your name** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
- For the **Email Address** field also check if it contains the `@` character

For all the fields that invalid, it should make their background color `red`.
If all the fields are valid, when you click **Submit** it should:

- Display an alert to thank you for filling out the for.
- Blank out (make empty) all the text fields

**Hints**
- [How to obtain values from form fields](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/pt/processing-forms-with-events)
- [How to use alert](https://www.w3schools.com/jsref/met_win_alert.asp)

**Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()` to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault. Revisit the relevant part on [Kahnacademy](https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/pt/preventing-default-behavior-of-events) for further practice.
 */