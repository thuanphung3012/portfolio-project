var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywHQ83c6HLp5wgz'}).base('appPNy4mb0GsHqu7L')



base('Portfolio-project').select({
   
    maxRecords: 1,
    view:"Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        
        var firstValue = document.getElementById("project-title")
        firstValue.innerHTML = record.fields.Title;
       
        var secondValue = document.getElementById("description")
        secondValue.innerHTML = record.fields.Description;
        console.log(record.get('Title'));
        console.log(record);
    },




fetchNextPage()
    ); function done(err) {
    if (err) {console.error(err); return;}
};
    })
