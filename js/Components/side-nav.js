/**
 * Created by Usuario on 28/03/2017.
 */

Vue.component('side-nav', {
    template: `
        <!-- SideMenu -->
        <aside id="mainMenu" class="z-depth-3">
            <div class="logo-container">
                <ul>
                    <li class="menu-item">
                        <img src="rescources/cross-grey.png">
                    </li>
                </ul>
            </div>
            <div class="menu-item-container">
                <ul>
                    <li class="menu-item hover">
                        <img src="rescources/cross-grey.png">
                        My trips
                    </li>
                    <li class="menu-item hover">
                        <img src="rescources/cross-grey.png">
                        Barcelona 2017
                    </li>
                    <li class="menu-item hover">
                        <img src="rescources/cross-grey.png">
                        Favorites
                    </li>
                    <li class="menu-item hover">
                        <img src="rescources/cross-grey.png">
                        Inspiration
                    </li>
                </ul>
            </div>
            <div class="profile-container">
                <ul>
                    <li class="menu-item">
                        <img src="rescources/cross-grey.png">
                        <span id="profileSettings" class="smallIcon"><i class="material-icons">settings</i></span>
                        <span id="profileNotifications" class="smallIcon"><i class="material-icons">inbox</i></span>
                    </li>
                </ul>
            </div>
        </aside>
    `
});