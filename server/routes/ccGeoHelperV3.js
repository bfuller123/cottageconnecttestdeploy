const axios = require("axios");

const geocode = function (inAddress){

    let location = inAddress;

    // NEED TO COMMENT OUT KEY ONCE HOSTED ON HEROKU
    // But actually not, if within the server folder?
    // It just needs to be removed before putting it onto
    // GitHub.
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
        address:location,
        key:'AIzaSyC_nTVvqzEckQ6WzQmCV_POw6a80BmOQPo'
        }
    })
    .then(function(response){

        // Geometry
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;

        var objGeoCoded = {
            lat: lat, 
            lon: lng
        };

        console.log ("========================");
        console.log("geocode line 28");
        console.log("Anything returned before this line WON'T WORK");
        console.log(objGeoCoded);

        return(objGeoCoded);
    })
    .catch(function(error){
        console.log(error);
    });
} // end of geocode    


// Defining methods for the ccGeoHelper
module.exports = {

    radiusSearch: function (location,distance){

        var searchTerms = geocode(location);

        var lat1 = 32.8074316 //searchTerms.lat;
        var lon1 = -96.81256359999999 //searchTerms.lon;
        var searchRadius = distance;

        const earthRadius = 3959;

        // converts radians to degrees
        function rad2deg(radians) {
            var pi = Math.PI;
            return radians * (180/pi);
        };

        // converts degrees to radians
        function deg2rad(degrees){
            var pi = Math.PI;
            return degrees * (pi/180);
        };

        // latitude boundaries
        var maxLat = lat1 + rad2deg(searchRadius / earthRadius);
        var minLat = lat1 - rad2deg(searchRadius / earthRadius);

        // longitude boundaries (longitude gets smaller when latitude increases)
        var maxLng = lon1 + rad2deg(searchRadius / earthRadius / Math.cos(deg2rad(lat1)));
        var minLng = lon1 - rad2deg(searchRadius / earthRadius / Math.cos(deg2rad(lat1)));

        var objSearchSquare = {
            maxLat: maxLat,
            minLat: minLat,
            maxLng: maxLng,
            minLng: minLng
        };

        console.log("The search coordinates (as object) should be:");
        console.log(objSearchSquare);

        return (objSearchSquare);
    } // end of radiusSearch



}
