/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-board', {
    props: ['items','searchbar'],
    template: `
        <!-- trip-board -->
        <div id="Board">
            <search-bar v-on:addNew="modalNewItem = true" :searchbar="searchbar"></search-bar>
            <div class="toolbar">
                <div v-show="modalNewItem" class="addNewContainer z-depth-4" >
                    <div class="input-field">
                      <input id="newUrl" v-model="newUrl" type="text" class="validate">
                      <label for="newUrl">Url</label>
                    </div>
                    <div class="input-field"  style="min-width: auto; max-width: 300px;">
                      <input id="newPrice" v-model="newPrice" type="text" class="validate">
                      <label for="newPrice">Price</label>
                    </div>
                    <div class="btn-container" style="text-align: right">
                        <a class="waves-effect waves-light btn-flat" @click="modalNewItem = false">Cancel</a>
                        <a class="waves-effect waves-light btn" @click="addNewItem">Manual</a>
                        <a class="waves-effect waves-light btn" @click="addNewItem">Add with url</a>
                    </div>
                </div>
                <div v-show="modalNewItem" class="comp-overlay" @click="modalNewItem = false"></div>
            </div>
            
            <div class="board">
                <article class="trip-item z-depth-1" v-for="(item, index) in m_Items">
                    <div class="trip-item-img" @click="openItem(item.id)">
                        <img :src="item.imageURL">
                    </div>
                    <div class="trip-item-details" @click="openItem(item.id)">
                        <h3>{{item.title}}</h3>
                        <p style="flex: 1; max-height: 90px;">{{item.description}}</p>
                        <p style="text-align: right;">€ {{item.price}},-</p>
                    </div>
                </article>
           </div>
        </div>
    `,
    data: function() {
        return {
            m_Items: this.items,
            m_Unfilterd: {},
            m_Filters: [],
            newUrl: '',
            newPrice: '',
            modalNewItem: false
        }
    },
    watch: {
      items: function() {
          this.m_Items = this.items;
      }
    },
    methods:{
        openItem: function(id) {
            window.EventChannel.$emit('openDetailsItem', id);
        },
        toggleLiked: function(index) {
            console.log(index);
            if(this.m_Items[index].liked) {
                this.m_Items[index].liked = false;
                this.m_Items[index].likes --;
            } else {
                this.m_Items[index].liked = true;
                this.m_Items[index].likes ++;
            }
        },
        addNewItem: function() {
            var package = {
                url: this.newUrl,
                price: this.newPrice
            }
            window.EventChannel.$emit('addNewItem', package);
            this.newUrl = '';
            this.newPrice = '';
            this.modalNewItem = false;

        },
        filterTrips: function() {
            this.m_Items = this.items;

            for (i = 0; i < this.m_Filters.length; i++) {
                var filterProps = this.m_Filters[i];
                var fnFilter = searchFilter();
                this.m_Items = this.m_Items.filter(function(item) {
                    var result;
                        //Search in all Properties
                        for (j = 0; j < item.tags.length; j++) {
                            console.log('**************');
                            console.log(filterProps.tag);
                            console.log(item.tags[j].tag);

                            result = fnFilter(item.tags[j].tag, filterProps.tag);
                            if (result) break;
                        }
                    return  result;
                });
            }

        }
    },
    mounted: function() {
        var self = this;
        window.EventChannel.$on('filterBoard',function(filters) {
            self.m_Filters = filters;
            self.filterTrips();
        });
    }
});

function searchFilter(Operator) {
    var fnFilter;
    fnFilter = function(a,b) {
        if(a.toString().toLowerCase().search(b.toString().toLowerCase()) != -1) {
            return true;
        } else {
            return false;
        }
    };
    return fnFilter;
}
