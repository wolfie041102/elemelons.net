$( document ).ready(function() {
  let body = $('body').height();
  let padding = body - $('.section:last-child').height() - 52;
  $(".section:last-child").css({
    "padding-bottom": padding
  });
});
