/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-info', {
    props: ['trip'],
    template: `
        <!-- trip-info -->
        <div id="TripInfo">
            <p>Start the planning of your trip hear. Invite your friends and start your trip!</p>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="tripTitle" type="text" v-model="form.title" class="validate">
                            <label for="tripTitle">Trip title</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="Location" type="text" v-model="form.location" class="validate">
                            <label for="Location">Location</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input type="date" id="formDate" class="datepicker">
                            <label for="formDate">From</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="date" id="tillDate" class="datepicker">
                            <label for="tillDate">Till</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input type="text" id="Img" v-model="form.imageURL" class="validate">
                            <label for="Img">Img url</label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class="col s12 padding">
                    <div id="TripChips" class="chips chips-autocomplete"></div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 padding" style="text-align: right">
                    <a class="waves-effect waves-light btn" @click="saveTrip"><i class="material-icons left">save</i>Save</a>
                    <a class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Delete</a>
                </div>
            </div>            
        </div>
    `,
    data: function() {
        return {
            form: this.trip
        }

    },
    watch: {
        trip: function() {
            this.form = this.trip;
            var self = this;
            $( document ).ready(function() {
                $("#formDate").val(moment(self.form.startDate).format('D MMMM, YYYY'));
                $("#tillDate").val(moment(self.form.endDate).format('D MMMM, YYYY'));
            });
        }
    },
    created: function() {
        var self = this;
        $( document ).ready(function() {
            $("#formDate").val(moment(self.form.startDate).format('D MMMM, YYYY'));
            $("#tillDate").val(moment(self.form.endDate).format('D MMMM, YYYY'));
            $('#TripChips').material_chip({
                secondaryPlaceholder: 'Type to enter tags',
                placeholder: ' + Tag',
                autocompleteData: {
                    'Museum': null,
                    'Outdoor': null,
                    'Culture': null,
                    'Nature': null,
                    'Beach': null,
                    'Sun': null,
                    'Food': null,
                    'Wine': null,
                },
                data: []
            });
        });
    },
    methods: {
        saveTrip: function() {
            window.EventChannel.$emit('updateTrip', this.form);
        }
    }
});