/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-item', {
    data: function() {
        return {
            active: false
        }
    },
    template: `
        <!-- trip-item -->
        <div id="trip-item" v-show="active">
            <div class="row">
                <div class="col s8" id="Details">
                    <h5>Details</h5>
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="tripTitle" type="text" class="validate">
                                <label for="tripTitle">Item title</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="Location" type="text" class="validate">
                                <label for="Location">Price</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 padding">
                                <textarea id="Description" class="materialize-textarea"></textarea>
                                <label for="Description">Description</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input type="date" id="formDate" class="datepicker">
                                <label for="formDate">Date</label>
                            </div>
                            <div class="input-field col s6">
                                <input type="date" id="tillDate" class="datepicker">
                                <label for="tillDate">Time</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col m6">
                                <input id="tripTitle" type="text" class="validate">
                                <label for="tripTitle">Location</label>
                            </div>
                            <div class="input-field col m6">
                                Google maps
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col s4" id="comments">
                    <h5>Comments</h5>
                    <div class="messages">
                        <div class="message right">
                            <div class="bubble z-depth-1">
                                <p>Hello i have a message about this item i think we could better buy tickets before hand if we want to go there</p>
                            </div>
                            <span class="sender">Jeroen van Haasteren - 16:56 15 april 2017</span>
                        </div>
                        <div class="message left">
                            <div class="bubble z-depth-1">
                                <p>Hello i have a message about this item i think we could better buy tickets before hand if we want to go there</p>
                            </div>
                            <span class="sender">Jeroen van Haasteren - 16:56 15 april 2017</span>
                        </div>
                        <div class="message left">
                            <div class="bubble z-depth-1">
                                <p>Hello i have a message about this item i think we could better buy tickets before hand if we want to go there</p>
                            </div>
                            <span class="sender">Jeroen van Haasteren - 16:56 15 april 2017</span>
                        </div>
                        <div class="message right">
                            <div class="bubble z-depth-1">
                                <p>Hello i have a message about this item i think we could better buy tickets before hand if we want to go there</p>
                            </div>
                            <span class="sender">Jeroen van Haasteren - 16:56 15 april 2017</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Type Message</label>
                        </div>
                        <div style="text-align: right">
                            <a class="waves-effect waves-light btn"><i class="material-icons left">send</i>Send</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});