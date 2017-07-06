/**
 * Created by Jeroen on 10/04/2017.
 */
Vue.component('trip-header', {
    props: ['trip'],
    template: `
        <!-- trip-header -->
        <section id="appheader">
            <div class="trip-image">
                <img :src="trip.imageURL">
            </div>
            <div class="trip-info">
                <div class="trip-details">
                    <h1>{{trip.title}}<span class="sub-title"> / {{trip.location}}</span></h1>
                </div>
                <div>
                    <ul class="tabs">
                        <li class="tab"><a href="#TripInfo">Trip information</a></li>
                        <li class="tab"><a href="#Board">Board</a></li>
                        <li class="tab"><a href="#Financials">Financials</a></li>
                    </ul>
                </div>
            </div>
        </section>
    `,
    mounted: function() {
        if(this.trip.imageURL.length > 0) {
            var backgroundUrl = "url('" + this.trip.imageURL + "')";
            $('<style>#appheader:before{background-image:' + backgroundUrl + '}</style>').appendTo('head');
        }
        var self = this;
        EventChannel.$on('updateTrip', function(trip) {
            if(this.trip.imageURL.length > 0) {
                console.log("update Images");
                var backgroundUrl = "url('" + self.trip.imageURL + "')";
                $('<style>#appheader:before{background-image:' + backgroundUrl + '}</style>').appendTo('head');
            }
        });
    },
    watch: {
        trip: function() {
            if(this.trip.imageURL.length > 0) {
                var backgroundUrl = "url('" + this.trip.imageURL + "')";
                $('<style>#appheader:before{background-image:' + backgroundUrl + '}</style>').appendTo('head');
            }
        }
    }
});