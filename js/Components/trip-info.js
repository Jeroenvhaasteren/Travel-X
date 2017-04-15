/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-info', {
    template: `
        <!-- trip-info -->
        <div id="TripInfo">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            </p>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="tripTitle" type="text" class="validate">
                            <label for="tripTitle">Trip title</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="Location" type="text" class="validate">
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
                        <div class="file-field input-field col s6">
                            <div class="btn">
                                <span>Image</span>
                                <input type="file">
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class="col s12 padding">
                    <div class="chips chips-autocomplete"></div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 padding" style="text-align: right">
                    <a class="waves-effect waves-light btn"><i class="material-icons left">save</i>Save</a>
                    <a class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Delete</a>
                </div>
            </div>
        </div>
    `
});