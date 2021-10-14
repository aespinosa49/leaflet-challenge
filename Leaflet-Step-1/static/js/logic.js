// Creating the map object
var myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  

  // Assemble the API query URL.
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
  
// Get the data with d3.
d3.json(url).then(function(data) {

}