var idArr = [];

$(".anchor").each(function(){idArr.push($(this).attr("id"));});
$.each(idArr, function(index, value) {
  var id = '#' + value;
  var child = index + 1;
  var oldchild = child -1


    var element_position = $(id).offset().top;
    var screen_height = $(window).height();
    var activation_offset = 0.1;//determines how far up the the page the element needs to be before triggering the function
    var activation_point = element_position - (screen_height * activation_offset);
    var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer


    $(window).on('scroll', function() {

      var y_scroll_pos = window.pageYOffset;
      var element_in_view = y_scroll_pos > activation_point;
      var select = '.sidebar li:nth-child(' + child + ')'
      var oldselect = '.sidebar li:nth-child(' + oldchild + ')'
      if(element_in_view) {
          $(select).css({
            "font-weight": 'bold',
            'padding-left': '20px'
          });
        } else {
          $(select).css({
            "font-weight": '',
            'padding-left': ''
          });
        }
      if ($(oldselect).css('font-weight') == $(select).css('font-weight')) {
        $(oldselect).css({
          "font-weight": '',
          'padding-left': ''
        });
      }
      });
    });
