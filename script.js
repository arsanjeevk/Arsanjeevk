//hamburger btn navigation bar

// $("#toggle").click(function () {

//     $(this).toggleClass('on');
//     $("#resize").toggleClass("active");

// });


var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")
sidenav.style.right = "-100vw";
menubtn.onclick = function() {
  if (sidenav.style.right == "-100vw") {
    sidenav.style.right = "0";
    menu.src = "close";
  }
  else {
    sidenav.style.right = "-100vw";
    menu.src = "menu";
  }
}

// online offline deduction
function myFunction() {
  var x = "Is the browser online? " + navigator.onLine;
  document.getElementById("demo").innerHTML = x;
}





