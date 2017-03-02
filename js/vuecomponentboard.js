/**
 * Created by Usuario on 01/03/2017.
 */

/** General Vue Instance to share Event and data**/
window.Event = new Vue();

/** Board Component **/
Vue.component('Board', {
    template: `
        <div style="display: flex;">
            <section class="board-col" v-for="category in jsonimport" :data-category="category.categoryId">
                <ul id='dropdownCol1' class='dropdown-content'>
                    <li><a>Collapse Column</a></li>
                    <li><a>Settings</a></li>
                    <li class="divider"></li>
                    <li><a>Settings</a></li>
                </ul>
                <div class="board-col-header">
                    <i class="material-icons hide">local_activity</i>
                    <h6>{{category.categoryName}}</h6>
                    <i class="material-icons collapse dropdown-button" style="right:0px;" data-activates='dropdownCol1'>more_vert</i>
                    <i class="material-icons collapse">code</i>
                    <!-- Dropdown Structure -->
                </div>
                
                <!-- Vue itemCard Component -->
                <itemCard :items="category.items"></itemCard>
                
            </section>
       </div>
    `,
    data: function () {
        return {jsonimport: jsonFile}
    }
});

/** ItemCard Component **/
Vue.component('itemCard', {
    props: ['items'],
    template: `
        <div>
            <article class="item" v-for="item in items" :data-item="item.itemId" @click="itemClicked(item)">
                <div class="card horizontal">
                    <div class="card-image">
                        <img id="OGImag" :src="item.itemImg">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <h6 id="OGTitle">{{item.itemName}}</h6>
                            <p id="OGDesc">{{item.itemDesc}}</p>
                        </div>
                        <div class="card-action">
                            <div class="toolbar">
                                <div class="toolbar-items">
                                    <i v-show="item.itemComments" class="material-icons">chat</i>
                                    <i v-show="item.itemTasks" class="material-icons">playlist_add_check</i>
                                    <i v-show="item.itemFinancials" class="material-icons">attach_money</i>
                                    <i v-show="item.itemAttachement" class="material-icons">attach_file</i>
                                </div>
                                <div class="toolbar-vote">
                                    {{item.itemRating}}<i class="material-icons">stars</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            
            <a class="waves-effect waves-light btn" @click="add()" href="#addItem">Modal</a>
            
        </div>
        
    `,
    methods: {
        add: function () {
            this.items.push({
                'itemId': 3,
                'itemCategory': 1,
                'itemName': 'Casino Barcelona',
                'itemDesc': 'American roulette, poker & slots, plus dining options & live concerts in a modern, relaxed casino.',
                'itemImg': 'http://cdn02.visitbarcelona.com/files/5531-3996-imagenCAT/BarcelonaCasino-T24-e_O.jpg',
                'itemRating': 2,
                'itemComments': true,
                'itemTasks': false,
                'itemFinancials': false,
                'itemAttachement': true});
        },
        itemClicked: function(item) {
            var itemId = event.currentTarget.getAttribute('data-item');
            Event.$emit('itemClicked', item);
        }
    }
});

/** Item Details Modal **/
Vue.component('itemdetails', {
    data: function() {
        return {
            itemDetailsActive: false,
            item: {}
        }
    },
    template: `
        <div id="editModal" v-show="itemDetailsActive">
            <div class="card modal-views">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" :src="item.itemImg">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4"><span id="itemTitle">{{item.itemName}}</span><i class="material-icons right">more_vert</i></span>
                    <div class="rating-div">
                        <fieldset class="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
                        </fieldset>
                    </div>
                    <p id="itemDesc">{{item.itemDesc}}</p>
                    <div class="card-tools">
                        <p>
                            <input type="checkbox" id="itemCommit" />
                            <label for="itemCommit">Let's do this</label>
                        </p>
                        <p>
                            <input type="checkbox" id="itemBooked" checked="checked" />
                            <label for="itemBooked">Booked</label>
                        </p>
                        <p>
                            <input type="checkbox" id="itemPayed" checked="checked" />
                            <label for="itemPayed">Payed</label>
                        </p>
                    </div>
                    <div class="action-btn">
                        <a class="waves-effect waves-light grey btn">Link</a>
                        <a class="waves-effect waves-light btn">Edit</a>
                        <a class="waves-effect waves-light red btn">Delete</a>
                    </div>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><span id="itemTitle">Card Title</span><i class="material-icons right">close</i></span>
                    <p id="itemDesc">Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
            <div class="modal-views z-depth-2" id="commentWindow">
                hi
            </div>
        </div>
        
    `, created: function() {
        itemdetails = this;
        Event.$on('itemClicked', function(item) {
            itemdetails.item = item;
            itemdetails.itemDetailsActive = true;
            Event.$emit('showOverlay');
        });
        Event.$on('closeModal', function() {
            itemdetails.itemDetailsActive = false;
        });
    }
});

/** Overlay Component can be toggeld by all components **/
/** show: Event.$emit('showOverlay'); **/
/** hide: Event.$emit('hideOverlay'); **/
Vue.component('overlay', {
    template: `<div class="overlay" v-show="active" @click="closeModal"></div>`,
    data: function () {
        return {
            'active': false
        }
    },
    methods: {'closeModal': function() {
        Event.$emit('closeModal');
        Event.$emit('hideOverlay');
    }},
    created: function() {
        overlay = this;
        Event.$on('showOverlay', function() {
            overlay.active = true;
        })
        Event.$on('hideOverlay', function() {
            overlay.active = false;
        })
    }
});


/**
// Vue Tab 2 Board Instance
**/
var app = new Vue({
    el: '#tabContent2',
    data: {
        overlayShow: false,
        itemDetailsModal: false,
    }
})

