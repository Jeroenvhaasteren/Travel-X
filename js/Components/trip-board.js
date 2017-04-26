/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-board', {
    props: ['items'],
    template: `
        <!-- trip-board -->
        <div id="Board">
            <search-bar v-on:addNew="modalNewItem = true"></search-bar>
        
            <div class="toolbar">
                <div v-show="modalNewItem" class="addNewContainer z-depth-4" >
                    <div class="input-field">
                      <input id="newUrl" v-model="newUrl" type="text" class="validate">
                      <label for="newUrl">Url</label>
                    </div>
                    <div class="btn-container"><a class="waves-effect waves-light btn" @click="addNewItem">Add</a></div>
                    <div class="btn-container"><a class="waves-effect waves-light grey lighten-2 btn" @click="modalNewItem = false">Cancel</a></div>
                </div>
                <div v-show="modalNewItem" class="comp-overlay" @click="modalNewItem = false"></div>
            </div>
            
            <div class="board">
                <article class="trip-item z-depth-1" v-for="(item, index) in m_Items">
                    <div class="trip-item-icons">
                        <ul>
                            <li><a><i class="material-icons">share</i></a></li>
                            <li :class=" item.financials ? null : 'disabled'" @click="openFinancials(item.id)"><a><i class="material-icons">euro_symbol</i></a></li>
                            <li :class=" item.comments < 1 ? 'disabled' : null" @click="openItem(item.id)"><a><i class="material-icons">comment</i></a></li>
                            <li @click="toggleLiked(index)"><a><i class="material-icons" v-if="item.liked">favorite</i><i class="material-icons" v-else>favorite_border</i></a></li>
                        </ul>
                    </div>
                    <div class="trip-item-img" @click="openItem(item.id)">
                        <img :src="item.img">
                    </div>
                    <div class="trip-item-details" @click="openItem(item.id)">
                        <h3>{{item.title}}</h3>
                        <p>{{item.desc}}</p>
                    </div>
                </article>
           </div>
        </div>
    `,
    data: function() {
        return {
            m_Items: this.items,
            newUrl: '',
            modalNewItem: false
        }
    },
    methods:{
        openItem: function(id) {
            window.EventChannel.$emit('openDetailsItem', id);
        },
        openFinancials: function(id) {
            window.EventChannel.$emit('openFinancialsItem', id);
        },
        toggleLiked: function(index) {
            console.log(index);
            this.m_Items[index].liked ? this.m_Items[index].liked = false : this.m_Items[index].liked = true;
        },
        addNewItem: function() {
            window.EventChannel.$emit('addNewItem', this.newUrl);
            this.newUrl = '';
            this.modalNewItem = false;

        }
    }
});