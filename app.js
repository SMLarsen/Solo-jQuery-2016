console.log('hello world');

$(document).ready(function() {

  var color = '';

  $("button").on("click", function(event) {
    event.preventDefault();

    color = $(this).data('color');
    buildDiv(color);
    addDiv(color);
  });

  function buildDiv(color) {
    console.log(color);
    $(".container").append('<div class="color-cube ' + color + '"></div>');
  }

  function addDiv(color) {
    
  }
});
