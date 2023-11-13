/**
Для усіх посилань зі сторінки додайте атрибут target="\_blank", якщо
href починається на`https://
 */
$(document).ready(function () {
  const regExp = /^[h][t][t][p][s]\:\/\//;
  const $link = $('a');
  $link.each(function () {
    if($(this).attr('href').match(regExp)) {
      $(this).attr('target', "\_blank");
    }
    
  });
});


