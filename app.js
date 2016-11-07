$(document).ready(function() {

  var color = '';
  var countRed = 0;
  var countYellow = 0;
  var countBlue = 0;
  var countGreen = 0;

  //=============  event listener  ========================
  $("button").on("click", function(event) {
    event.preventDefault();

    color = $(this).data('color');
    buildDiv(color);
    addDiv(color);
  });

  // builds color-cube divs
  function buildDiv(color) {
    $(".container").append('<div class="color-cube ' + color + '"></div>');
  }

  // adds to counter
  function addDiv(color) {
    switch (color) {
      case 'red':
        countRed++;
        $('#red').text('Total red: ' + countRed);
        break;
      case 'green':
        countGreen++;
        $('#green').text('Total red: ' + countGreen);
        break;
      case 'yellow':
        countYellow++;
        $('#yellow').text('Total red: ' + countYellow);
        break;
      default:
        countBlue++;
        $('#blue').text('Total red: ' + countBlue);
    }
  }
});
