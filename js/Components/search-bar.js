/**
 * Created by Usuario on 26/04/2017.
 */

Vue.component('search-bar', {
    props:['searchbar'],
    template: `
    <!-- search-bar -->
    <section id="SearchBar">
        <div class="bar">
            <div class="search-container">
                <div id="searchTags" class="chips chips-placeholder"></div>
            </div>
            <div class="tools">
                <i class="material-icons" title="Add an item" @click="addNew">add</i>
            </div>
        </div>
        <div class="sub-toolbar">
            <div class="tag" v-for="tag in SuggestTags" @click="addTag(tag)">
                {{tag.tag}}
            </div>
        </div>
    </section>
     `,
    methods: {
        addNew: function() {
            this.$emit('addNew');
        },
        addTag: function(newTag) {
            this.CurrentTags.push(newTag);
            window.$('#searchTags').material_chip({
                placeholder: 'Enter a tag',
                secondaryPlaceholder: '+Tag',
                data: this.CurrentTags
            });
        }
    },
    data: function() {
        return {
            SuggestTags: [],
            CurrentTags: []
        }
    },
    watch: {
      searchbar: function() {
          this.SuggestTags = this.searchbar.recommendedTags;
      }
    },
    mounted: function() {
        this.SuggestTags = this.searchbar.recommendedTags;
        var self = this;
        $( document ).ready(function() {
            window.$('#searchTags').material_chip({
                placeholder: 'Enter a tag',
                secondaryPlaceholder: '+Tag',
                data: self.CurrentTags,
                autocompleteData: {
                    'Museum': null,
                    'Outdoor': null,
                    'Culture': null,
                    'Nature': null,
                    'Beach': null,
                    'Sun': null,
                    'Food': null,
                    'Active': null,
                    'Club': null,
                    'Chill': null,
                    'WaterSports': null,
                    'Mountain': null,
                    'Retrait': null
                }
            });
        });

        $('#searchTags').on('chip.add', function(e, chip){
            self.CurrentTags = $('#searchTags').material_chip('data');
        });
        $('#searchTags').on('chip.delete', function(e, chip){
            self.CurrentTags = $('#searchTags').material_chip('data');
        });
    }
});