const init = function(){
  var checkExist = setInterval(function() {
     if ($('#create').length) {
        clearInterval(checkExist);
        document.getElementById('create').addEventListener('click', send);
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
  let group = document.getElementById('group').value;
  console.log("username: " + username);
  console.log("group: " + group);

  $.ajax({
    url: 'http://localhost/python/create-user.py',
    method: "post",
    data: {username},
    datatype: "text",
    success: function(data){
      console.log(data);
    },
  });

  return true;
};

document.addEventListener('DOMContentLoaded', init);
