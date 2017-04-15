/**
 * Created by Jeroen on 10/04/2017.
 */
Vue.component('trip-header', {
    template: `
        <!-- trip-header -->
        <section id="appheader">
            <div class="trip-image">
                <img src="rescources/barcelona.jpg">
            </div>
            <div class="trip-info">
                <div class="trip-details">
                    <h1>Culture trip Barcelona 2017</h1>
                    <h5>Barcelona</h5>
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
    `
});