const cities = require("cities");
//var city = cities.findByState('NJ')

var city = cities.zip_lookup('10016');
console.log(city);