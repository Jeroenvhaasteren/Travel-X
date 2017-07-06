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
    sessionStorage.setItem('activeTrip', trip);
}

function  getSessionToken() {
    var trip = sessionStorage.getItem('activeTrip');
    return trip;
}

var endPoints = {
    newRegistration: "http://localhost:6600/projectx/functions/create/user",
    loginUser: "http://localhost:6600/projectx/functions/login"
}




