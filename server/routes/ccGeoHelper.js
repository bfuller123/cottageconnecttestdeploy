const axios = require("axios");

// Defining methods for the ccGeoHelper
module.exports = {

    geocode: function (inAddress){

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

            // console.log("Latitude: " + lat);
            // console.log("Longitude: " + lng);

            // var objGeoCoded = {
            //     lat: lat,
            //     lng: lng
            // };

        var objGeoCoded = [lat, lng];
        console.log(objGeoCoded);

        return (objGeoCoded);

        })
        .catch(function(error){
            console.log(error);
        });
    }, // end of geocode
    

    radiusSearch: function (searchTerms){

        var lat1 = searchTerms.lat;
        var lon1 = searchTerms.lon;
        var searchRadius = searchTerms.distance;

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

        console.log("The search coordinates should be:");
        console.log(objSearchSquare);
    } // end of radiusSearch
}
