/**
 * Created by Usuario on 01/03/2017.
 */

/** General Vue Instance to share Events and data between components **/
window.Event = new Vue();

/** Board Component **/
Vue.component('Board', {
    template: `
        <div class="board-container">
            <section class="board-col" v-for="(category,index ) in jsonimport" :data-category="category.categoryId" :data-category-index="index">
                <div class="board-col-header">
                    <div class="column-title">
                      <h6>{{category.categoryName}}</h6>
                    </div>
                    <div class="column-tools">
                      <i class="material-icons tools">code</i>
                      <i class="material-icons tools" @click="deleteCol(index)">delete</i>
                      <i class="material-icons tools">more_vert</i>
                    </div>
                </div>
                
                <!-- Vue itemCard Component -->
                <itemCard :items="category.items"></itemCard>
                
            </section>
            <section class="board-col">
                <div class="board-col-header">
                    <div class="column-title">
                      <i class="material-icons tools" @click="add()">add</i>
                    </div>
                </div>
            </section>
       </div>
    `,
    data: function () {
        return {jsonimport: jsonFile}
    },
    methods: {
        add: function() {
            //Event.$emit('addCategory', this.jsonimport);
            this.jsonimport.push({'categoryId': 2,'categoryName': 'Places to stay', 'items': []});
        },
        deleteCol: function(index) {
            this.jsonimport.splice(index, 1);
            $('.dropdown-button').dropdown();
        }
    }
});

/** ItemCard Component **/
Vue.component('itemCard', {
    props: ['items'],
    template: `
        <div style="text-align: center;">
            <article class="item" v-for="(item, index) in items" :data-item="item.itemId" :data-item-index="index" @click="itemClicked(item)">
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
            <article class="item add-new">
                <i class="material-icons tools" @click="add()">add</i>
            </article>            
        </div>
        
    `,
    methods: {
        add: function () {
            Event.$emit('addItem', this.items );
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


/**Add Item Component
 **
 */
Vue.component('additem', {
    template: `
          <div class="modal" id="addItemModal" v-show="active" style="display: block;">
                <div class="modal-content">
                    <div v-show="showUrl">
                        <h4>Add an item</h4>
                        <p>Paste the url of the website here</p>
                        <div class="input-field">
                            <input id="websiteUrl" v-model="itemUrl" type="text" class="validate">
                            <label for="websiteUrl">Url</label>
                        </div>
                    </div>
                    <div v-show="!showUrl">
                        <div class="input-field">
                            <input placeholder=" " id="itemName" v-model="itemName" type="text" class="validate">
                            <label for="itemName" class="active">Title</label>
                        </div>
                        <div class="input-field">
                            <textarea placeholder=" " id="itemDesc" v-model="itemDesc" type="text" class="materialize-textarea"></textarea>
                            <label for="itemDesc" class="active">Description</label>
                        </div>
                        <div class="input-field">
                            <input placeholder=" " id="ImageUrl" v-model="itemImg" type="text" class="validate">
                            <label for="ImageUrl" class="active">Image url</label>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                  <a class=" modal-action modal-close waves-effect waves-green btn-flat" @click="closeForm">Cancel</a>
                  <a class=" modal-action waves-effect waves-green btn-flat" @click="addUrl" v-show="showUrl">Add url</a>
                  <a class=" modal-action waves-effect waves-green btn-flat" @click="showUrl = true" v-show="!showUrl">Previous</a>
                  <a class=" modal-action waves-effect waves-green btn-flat" @click="showUrl = false"  v-show="showUrl">Manual add</a>
                  <a class=" modal-action modal-close waves-effect waves-green btn-flat" @click="addItem" v-show="!showUrl">Add</a>
                </div>
          </div>
    `,
    data: function() {
        return {
            'active': false,
            'itemUrl': '',
            'itemName':'',
            'itemDesc':'',
            'itemImg':'',
            'showUrl': true,
            'items':{}
        }
    },
    methods: {
        'addUrl': function() {
            console.log('fired');
            var urlEncoded = encodeURIComponent(this.itemUrl);
            var apiKey = '58aac6d3dd95e6b920d36457';
            var requestUrl = 'https://opengraph.io/api/1.0/site/' + urlEncoded + '?app_id=' + apiKey;
            _this = this;
            $.getJSON(requestUrl, function( json ) {

                _this.itemName = json.hybridGraph.title;
                _this.itemDesc = json.hybridGraph.description;
                _this.itemImg = json.hybridGraph.image;

            });
            this.showUrl = false;

        },
        'addItem': function() {
            this.items.push({
                'itemId': 0,
                'itemCategory': 0,
                'itemName': this.itemName,
                'itemDesc': this.itemDesc,
                'itemImg': this.itemImg,
                'itemRating': 0,
                'itemComments': false,
                'itemTasks': false,
                'itemFinancials': false,
                'itemAttachement': false
            });
            this.closeForm();
        },
        'closeForm': function() {
            $('#addItemModal').modal('close');
            this.active = false;
            this.resetFrom();
            Event.$emit('hideOverlay');
        },
        'resetFrom': function() {
            this.showUrl = true;
            this.itemName = '';
            this.itemDesc = '';
            this.itemImg = '';
            this.itemUrl = '';
        }
    },
    created: function() {
        $('.modal').modal();
        itemAddModal = this;
        Event.$on('addItem', function(items) {
            itemAddModal.items = items;
            $('#addItemModal').modal('open');
            itemAddModal.active = true;
        })
        Event.$on('closeModal', function() {
            $('#addItemModal').modal('close');
            itemAddModal.active = false;
        })

    }
});

/**Add Item Component
 **
 */
Vue.component('addCategory', {
    template: `
          <div class="modal" id="addCategoryModal" v-show="active" style="display: block;">
                <div class="modal-content">
                    <div>
                        <div class="input-field">
                            <input placeholder=" " id="categoryName" v-model="categoryName" type="text" class="validate">
                            <label for="categoryName" class="active">Title</label>
                        </div>
                        <div class="input-field">
                            <textarea placeholder=" " id="categoryDesc" v-model="categoryDesc" type="text" class="materialize-textarea"></textarea>
                            <label for="categoryDesc" class="active">Description</label>
                        </div>
                        <div class="input-field">
                            <input type="checkbox" id="categoryCollapse" checked="checked" />
                            <label for="categoryCollapse">Collapse Column</label>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                  <a class=" modal-action modal-close waves-effect waves-red red btn-flat" @click="addItem" v-show="!showUrl">Save</a>
                  <a class=" modal-action modal-close waves-effect waves-grey grey btn-flat" @click="closeForm">Cancel</a>
                  <a class=" modal-action modal-close waves-effect waves-green btn-flat" @click="addItem" v-show="!showUrl">Save</a>
                </div>
          </div>
    `,
    data: function() {
        return {
            'active': false,
            'categoryName': '',
            'categoryDesc':'',
            'categoryCollapse':'false',
            'categories':{}
        }
    },
    methods: {
        'addCategory': function() {
            this.categories.push({
                'categoryName': '',
                'categoryDesc':'',
                'categoryCollapse':'false',
            });
            this.closeForm();
        },
        'closeForm': function() {
            $('#addCategoryModal').modal('close');
            this.active = false;
            this.resetFrom();
            Event.$emit('hideOverlay');
        },
        'resetFrom': function() {
            this.showUrl = true;
            this.categoryName = '';
            this.categoryDesc = '';
            this.categoryCollapse = false;
        }
    },
    created: function() {
        $('.modal').modal();
        categoryAddModal = this;
        Event.$on('addCategory', function(categories) {
            categoryAddModal.categories = categories;
            $('#addCategoryModal').modal('open');
            categoryAddModal.active = true;
        })
        Event.$on('closeModal', function() {
            $('#addCategoryModal').modal('close');
            categoryAddModal.active = false;
        })

    }
})

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

