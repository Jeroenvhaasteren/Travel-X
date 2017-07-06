/**
 * Created by Usuario on 28/03/2017.
 */

var endPoints = {
    getTrips: "",
}

Vue.component('side-nav', {
    props: ['uid'],
    template: `
        <!-- SideMenu -->
        <aside id="mainMenu">
            <div class="menu-header">
                <ul>
                    <li class="menu-item">
                       <span class="menu-title">Menu</span>
                    </li>
                </ul>
            </div>
            <div class="menu-item-container">
                <ul>
                    <li class="menu-item hover">
                        <a href="mytrips.html">My trips</a>
                    </li>
                    <li class="menu-item hover">
                        <a href="#">Favorites</a>
                    </li>
                    <li class="menu-item hover">
                        <a href="#">Inspiration</a>
                    </li>
                </ul>
            </div>
            <div class="menu-footer">
                <ul>
                    <li class="menu-item hover">
                        <a>My Profile</a>
                    </li>
                    <li class="menu-item hover">
                        <a href="Login.html">Log out</a>
                    </li>
                </ul>
            </div>
        </aside>
    `,
    data: function() {
        return {
            trips: []
        }
    },
    mounted: function() {
        var _url = endPoints.getTrips + this.uid;
        var self = this;
        // $.get(_url, function(data) {
        //     self.trips = data.success.objects;
        // })
    }
});