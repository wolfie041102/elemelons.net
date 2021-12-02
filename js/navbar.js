var checkExist = setInterval(function() {
   if ($('nav').length) {
      clearInterval(checkExist);
      $(function() {
          var pathname = window.location.pathname;
          var navid = '#ID' + pathname.replace(/\x2F|\x2E/g, '-')
          var pattern = /-season-/
          var exists = pattern.test(navid)
          if (exists) {
            $('#seasons').addClass('active');
            $(navid).addClass('submenu-active');
          } else {
            $(navid).addClass('active');
          }

      });
   }
}, 100)
