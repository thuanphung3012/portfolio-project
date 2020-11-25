var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keywHQ83c6HLp5wgz'}).base('appPNy4mb0GsHqu7L')

base('Portfolio-project').select({
   
    maxRecords: 5,
    view:"Grid view"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        
        var introduction = document.getElementById("introduction")
        introduction.innerHTML = record.fields.Description;

    },
        fetchNextPage()
    ); function done(err) {
    if (err) {console.error(err); return;}
};
    });
