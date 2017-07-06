$(document).ready(function() {
    $('ul.tabs').tabs();
    $('.tooltipped').tooltip({delay: 50});
    $('.modal').modal();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});

function  setSessionToken(token) {
    sessionStorage.setItem('sessionToken', token);
};

function  getSessionToken() {
    var token = sessionStorage.getItem('sessionToken');
    return token;
}

function setActiveTrip(trip) {
    sessionStorage.setItem('activeTripId', trip.id);
}

function  getActiveTrip() {
    var tripId = sessionStorage.getItem('activeTripId');
    return tripId;
}

var tripQuestEndPoints = {
    post: {
        newRegistration: "http://localhost:6600/projectx/functions/create/user",
        loginUser: "http://localhost:6600/projectx/functions/login"
    },
    get: {
        trips: "http://localhost:6600/projectx/functions/get/trips/",
        trip: "http://localhost:6600/projectx/functions/get/trip/",
        items: "http://localhost:6600/projectx/functions/get/items/"
    }
};




