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

  //create event handlers
let button = d3.select("#filter-btn");
button.on("click", runSearch);


//function runSearch to deal with clicks & filtering data
function runSearch() {
    //prevent page from refreshing
    d3.event.preventDefault();
    console.log("search has been clicked");
    //select input element & get value of input element
    let dateInput = d3.select("#datetime").property("value");
    console.log(dateInput);
    
    let cityInput = d3.select("#city").property("value");
    console.log(cityInput);

    let stateInput = d3.select("#state").property("value");
    console.log(stateInput);

    let countryInput = d3.select("#country").property("value");
    console.log(countryInput);

    let shapeInput = d3.select("#shape").property("value");
    console.log(shapeInput);

    //filter to the value
    let filterData = tableData;
    if (dateInput){
      filterData = filterData.filter(ufo => ufo.datetime === dateInput);
    };
    
    if (cityInput){
      filterData = filterData.filter(ufo => ufo.city === cityInput);
    };

    if (stateInput){
      filterData = filterData.filter(ufo => ufo.state === stateInput);
    };

    if (countryInput){
      filterData = filterData.filter(ufo => ufo.country === countryInput);
    };

    if (shapeInput){
      filterData = filterData.filter(ufo => ufo.shape === shapeInput);
    };
    console.log(filterData);

    //select table body & clear data out
    let tbody = d3.select('tbody');
    tbody.text("");

    //loop thru filtered data to put onto html
    filterData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
})};