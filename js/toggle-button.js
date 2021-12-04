const enhome = function() {
    var home = document.getElementById("home");
    home.style.display = "block";
    $("#Btn-home").css({
      "padding-left": "20px",
      color: "#FFFFFF"
    });
}

let oldsection = "home";
let oldbuttonid = "#Btn-home"

$(".sidebar button").click(function() {
  var section = $(this).val();


  if (oldsection !== section) {
    var buttonid = "#" + $(this).attr("id");

    var display = document.getElementById(section);
    var olddisplay = document.getElementById(oldsection);
    if (display.style.display === "none") {
      display.style.display = "block";
      olddisplay.style.display = "none";

      $(buttonid).css({
        "padding-left": "20px",
        color: "#FFFFFF"
      });

      $(oldbuttonid).css({
        "padding-left": "",
        color: ""
      });

    }
    oldbuttonid = buttonid;
    oldsection = section;
  }
});

document.addEventListener('DOMContentLoaded', enhome);
