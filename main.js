$(document).ready(function(){
      // Dropdown
      $('.dropdown-button').dropdown({
           inDuration: 300,
           outDuration: 225,
           constrain_width: false, // Does not change width of dropdown to that of the activator
           hover: false, // Activate on hover
           gutter: 0, // Spacing from edge
           belowOrigin: false // Displays dropdown below the button
           }
      );
    }); 
 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');