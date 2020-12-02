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
  