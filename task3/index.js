/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */

$(document).ready(function () {
  
  const $div4 = $('div:contains("div4")');
  const $header4 = $('h3:contains("header4")');
  $div4.insertAfter($header4);

  const newElement = $('<h3>header3</h3>');
  $('body').append(newElement);

  const $header3 = $('h3:contains("header3")');
  const $div3 = $('div:contains("div3")');
  $header3.insertBefore($div3);
});