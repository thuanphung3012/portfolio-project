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
  