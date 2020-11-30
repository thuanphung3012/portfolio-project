var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywHQ83c6HLp5wgz'}).base('appPNy4mb0GsHqu7L')
var media = document.querySelector('.media');
var rowHeader = document.querySelector('.row-header');
var rowHeader2b = document.querySelector('.row-header2b');
var rowHeader3 = document.querySelector('.row-header3');




base('Portfolio-project').select({
    maxRecords: 2,
    view:"Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        
        var firstValue = document.getElementById("project-title")
        firstValue.innerHTML = record.fields.Title;
       
        var secondValue = document.getElementById("description")
        secondValue.innerHTML = record.fields.Description;
        console.log(record.get('Title'));
        console.log(record);
       
        var image = document.createElement('img');
        var src = record.fields.Images[5].url;
        image.setAttribute('src', src);
        media.appendChild(image);
        


        // Command + K + C to comment out Command + K + U to unblock
        // var fourthValue = document.getElementById("header")
        // fourthValue.innerHTML = record.fields.Header;
        // var fifthValue = document.getElementById("outcome")
        // fifthValue.innerHTML = record.fields.Outcome;
        // var sixthValue = document.getElementById("year")
        // sixthValue.innerHTML = record.fields.Year;
        

        var image = document.createElement('img');
        var src = record.fields.Images[6].url;
        image.setAttribute('src', src);
        rowHeader.appendChild(image);
        
        var image = document.createElement('img');
        var src = record.fields.Images[7].url;
        image.setAttribute('src', src);
        rowHeader2b.appendChild(image);


        var image = document.createElement('img');
        var src = record.fields.Images[8].url;
        image.setAttribute('src', src);
        rowHeader3.appendChild(image);
        
    },


    


fetchNextPage()
    ); function done(err) {
    if (err) {console.error(err); return;}
};
    })
   
