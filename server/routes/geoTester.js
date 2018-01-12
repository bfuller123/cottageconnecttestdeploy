const ccGeoHelper = require("./ccGeoHelperV4");

console.log ("=================================");
console.log ("Beginning the test. ");
console.log ("Any good data should show up now.")
console.log ("=================================");
console.log ("");
console.log ("");

var testme = ccGeoHelper.geocode("2727 Shelby Avenue, Dallas, TX 75219",10);
	
console.log (testme);

console.log ("");
console.log ("");
console.log ("===============================================");
console.log ("Anything AFTER this section is a console.log");
console.log ("from INSIDE the geocode function that ");
console.log ("isn't helping to fix the asynchronous issue.");
console.log ("=============================================");

