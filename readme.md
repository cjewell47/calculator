# Calculator

I made this calculator with JavaScript, jQuery, HTML, CSS, and Bootstrap.
I used jQuery because it is a great and simple way to manipulate the DOM, and as it is just a single page app I did not think any other JavaScript libraries or frameworks would be necessary.
I used standard CSS without Sass, as there wasn't a lot of styling required.
I used Bootstrap as it is really useful for creating responsive websites. Creating the number / operator buttons without Bootstrap's grid system would have been a lot more difficult. Other frameworks such as Skeleton or Materialize have similar grid systems which I could have used, but Bootstrap is tried and trusted - so why deviate? Creating the tablet and mobile version were quite straight forward, using col-sm and col-xs instead of col-md. However, for the mobile version to get the correct button layout I had to make use of visible-xs and hidden-md. I also added a clearfix visible-xs as the buttons were initially not working on the mobile version, as another div was disrupting the layout.

A bigger project in the future might be to create an API to link this with so the saved Maths could be stored. 
