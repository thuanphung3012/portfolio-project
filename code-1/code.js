
// Top bar navigation 
function topNav() {
    var plus = document.getElementById("myTopnav");
    if (plus.className === "topnav") {
      plus.className += " responsive";
    } else {
      plus.className = "topnav";
    }
}

$(".plus").click(function() {
$(".add").toggleClass("rotate");
   
   
});

// Forward - Backward button
var mybutton = document.getElementById("myBtn");



