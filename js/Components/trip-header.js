/**
 * Created by Jeroen on 10/04/2017.
 */
Vue.component('trip-header', {
    props: ['trip'],
    template: `
        <!-- trip-header -->
        <section id="appheader">
            <div class="trip-image">
                <img :src="trip.img">
            </div>
            <div class="trip-info">
                <div class="trip-details">
                    <h1>{{trip.title}}</h1>
                    <h5>{{trip.location}}</h5>
                    <p><span class="capitalized">created by: </span>TripQuest team</p>
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
        var backgroundUrl = "url('" + this.trip.img + "')";
        $('<style>#appheader:before{background-image:' + backgroundUrl + '}</style>').appendTo('head');
        var self = this;
        EventChannel.$on('updateTrip', function(trip) {
            var backgroundUrl = "url('" + self.trip.img + "')";
            $('<style>#appheader:before{background-image:' + backgroundUrl + '}</style>').appendTo('head');
        });
    }
});