const init = function(){
  var checkExist = setInterval(function() {
     if ($('#button-login').length) {
        clearInterval(checkExist);
        document.getElementById('button-login').addEventListener('click', send);
     }
  }, 100)
}

const send = function(ev) {
  ev.preventDefault();
  ev.stopPropagation();

  let ret = validate();

  if (ret) {
    console.log('send!!');
  }
}

const validate = function(ev) {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  $.ajax({
    type: "POST",
    url: "/python/sensors.py",
    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}, //Add this <----
    success:function(result){
      console.log(result);
    },
  });
  return true;
};

document.addEventListener('DOMContentLoaded', init);
