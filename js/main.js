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

var tripQuestEndPoints1 = {
    post: {
        newRegistration: "http://localhost:6600/projectx/functions/create/user",
        loginUser: "http://localhost:6600/projectx/functions/login",
        newItem: "http://localhost:6600/projectx/functions/create/item",
        editItem: "http://localhost:6600/projectx/functions/edit/item",
        messages: "http://localhost:6600/projectx/functions/create/comment",
        newTrip: "http://localhost:6600/projectx/functions/create/trip",
        editTrip: "http://localhost:6600/projectx/functions/edit/trip"
    },
    get: {
        trips: "http://localhost:6600/projectx/functions/get/trips/",
        trip: "http://localhost:6600/projectx/functions/get/trip/",
        items: "http://localhost:6600/projectx/functions/get/items/",
        item: "http://localhost:6600/projectx/functions/get/item/",
        messages: "http://localhost:6600/projectx/functions/get/comments/"
    }
};

var tripQuestEndPoints = {
    post: {
        newRegistration: "http://34.227.7.188:6600/projectx/functions/create/user",
        loginUser: "http://34.227.7.188:6600/projectx/functions/login",
        newItem: "http://34.227.7.188:6600/projectx/functions/create/item",
        editItem: "http://34.227.7.188:6600/projectx/functions/edit/item",
        messages: "http://34.227.7.188:6600/projectx/functions/create/comment",
        newTrip: "http://34.227.7.188:6600/projectx/functions/create/trip",
        editTrip: "http://34.227.7.188:6600/projectx/functions/edit/trip"

    },
    get: {
        trips: "http://34.227.7.188:6600/projectx/functions/get/trips/",
        trip: "http://34.227.7.188:6600/projectx/functions/get/trip/",
        items: "http://34.227.7.188:6600/projectx/functions/get/items/",
        item: "http://34.227.7.188:6600/projectx/functions/get/item/",
        messages: "http://34.227.7.188:6600/projectx/functions/get/comments/"
    }
};




