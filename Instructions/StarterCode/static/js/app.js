// from data.js
var data = data;

// YOUR CODE HERE!
var table = d3.select("#ufo-table");
console.log(table);

table.attr("class", "table table-striped");

// Get a reference to the table body
var tbody = table.select("tbody");

data.forEach((Report) => {
  var row = tbody.append("tr");
  Object.entries(Report).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});



var submit = d3.select("#filter-btn");

  submit.on("click", function() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(data);

    var filteredData = data.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData)
    tbody.html("");
    filteredData.forEach((Report) => {
    var row = tbody.append("tr");
    Object.entries(Report).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);

  });
  });
  });



