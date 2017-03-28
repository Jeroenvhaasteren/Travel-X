/**
 * Created by Usuario on 28/03/2017.
 */

Vue.component('side-nav', {
    template: `
        <aside id="sideNav">
            <div class="logo-container">
                <img src="respources/trip_quest_logo_sm.png" alt="TripQuest">
            </div>
            <div class="menu-items-container">
                <ul>
                    <li>
                        <a>
                            <img src="resources/my-trips.svg">
                            <span>My trips</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img id="tripImage" src="">
                            <span>{{currentTrip}}</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="resources/inspiration.svg">
                            <span>Inspiration</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="profile-container">
                
            </div>
        </aside>
    `
});