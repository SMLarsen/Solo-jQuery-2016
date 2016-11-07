$(document).ready(function() {

  var color = '';
  var count = 0;

  setCounts();


  //=============  event listener  ========================
  $("button").on("click", function(event) {
    event.preventDefault();

    color = $(this).data('color');
    buildDiv(color);
    addDiv(color);
  });

  // adds count property to total p elements
  function setCounts() {
      $("p").data('data-count', 0);
  }

  // builds color-cube divs
  function buildDiv(color) {
    $(".container").append('<div class="color-cube ' + color + '"></div>');
  }

  // adds to counter
  function addDiv(color) {
    count = $('#' + color).data('data-count') + 1;  // increment count for color
    $('#' + color).data('data-count', count);       // replace count for this color
    $('#' + color).text('Total ' + color + '\: ' + count);
  }

});
