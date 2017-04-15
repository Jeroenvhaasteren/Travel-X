/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-board', {
    template: `
        <!-- trip-board -->
        <div id="Board">

            <article class="trip-item z-depth-1">
                <div class="trip-item-icons">
                    <ul>
                        <li><a><i class="material-icons">share</i></a></li>
                        <li class="disabled"><a><i class="material-icons">euro_symbol</i></a></li>
                        <li><a><i class="material-icons">comment</i></a></li>
                        <li><a><i class="material-icons">favorite</i></a></li>
                    </ul>
                </div>
                <div class="trip-item-img">
                    <img src="rescources/houseGaudi.jpg">
                </div>
                <div class="trip-item-details">
                    <h3>Casa Batllo</h3>
                    <p>Web oficial del edificio modernista de Antoni Gaudí en Barcelona Casa Batlló. Información sobre Gaudí y el edificio, visitas, precios, ofertas y eventos.</p>
                </div>
            </article>

        </div>
    `
});