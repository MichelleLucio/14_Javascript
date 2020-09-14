// from data.js
let tableData = data;

//select the body of table
let tbody = d3.select('tbody');

//loop thru data to put onto html
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Select the button & form
let button = d3.select("#filter-btn");
let dateForm = d3.select(".form-control");

  //create event handlers
button.on("click", runSearch);
dateForm.on("click", runSearch);


//function runSearch
function runSearch() {
    //prevent page from refreshing
    d3.event.preventDefault();
    //select input element
    let dateInput = d3.select("#datetime");
    //get value of input element
    let dateinputValue = dateInput.property("value");
    console.log("search has been clicked");
    console.log(dateinputValue);
    console.log(tableData);

    //filter to the value
    let filterDate = tableData.filter(function(ufo){
        return ufo.datetime === dateinputValue});
    ////let filterDate = tableData.filter(ufo => ufo.datetime === dateinputValue);
      console.log(filterDate);

 
    //select table body & clear data out
    let tbody = d3.select('tbody');
    tbody.text("");


    //loop thru filtered data to put onto html
    filterDate.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
})};