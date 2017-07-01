/**
 * Created by Usuario on 28/03/2017.
 */

Vue.component('side-nav', {
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
                        <span class="menu-title">My trips</span>
                    </li>
                    <li class="menu-item hover">
                        Barcelona 2017
                    </li>
                    <li class="menu-item hover">
                        Favorites
                    </li>
                    <li class="menu-item hover">
                        Inspiration
                    </li>
                </ul>
            </div>
        </aside>
    `
});