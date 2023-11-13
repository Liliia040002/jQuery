$(document).ready(function () {
    const $checkBox = $('input[type="checkbox"]');
  
    $checkBox.on("click", function () {
      const $label = $(this).closest('label');
  
      if (this.checked) {
        $checkBox.css('background-color', '#D9930F');
        $label.css('color', '#D9930F'); 
      } else {
        $checkBox.css('background-color', ''); 
        $label.css('color', ''); 
      }
    });

    const $resetButton = $('.reset');
    $resetButton.on("click", function () {
        $checkBox.prop('checked', false); 
        $('input').css('background-color', ''); 
        $('label').css('color', ''); 
      });

  });