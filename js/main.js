// Airtable retrieve data
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywHQ83c6HLp5wgz'}).base('appPNy4mb0GsHqu7L')

base('Project-page').find('reclQMB2IqbHIsMG0', function(err, record){
    if (err) {console.error(err); return; }
    console.log('Retrieved', record.id);
        
        var introduction = document.getElementById("introduction")
        introduction.innerHTML = record.fields.Description;     
        console.log(record.get('Description'));
        console.log(record); 
});


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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Button "more information" - "less information"
$('button').on("click", function() {
  $(this).toggleClass('active');
});

10

$(document).ready(function () {
    var expand = $("#Expand");
    expand.cliked = 1;
    expand.click(function () {
        $("#expand_p").text((expand.cliked++ % 2 == 0) ? "More information" : "Less information");
    });
});
  

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}