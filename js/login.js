var el = document.getElementById('login');
if(el){
  alert("test");
  el.addEventListener("submit", myfunction);
}

function myFunction() {
  alert("The form was submitted");
}
