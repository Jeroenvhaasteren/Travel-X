/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-item', {
    props: ['item'],
    template: `
        <!-- trip-item -->
        <div id="trip-item">
            <div class="comments">
                <div class="message-field">
                    
                    
                    
                    <div class="message left z-depth-1">
                        <div class="title">
                            Pedro
                        </div>
                        <div class="text">
                            Lorem ipsum and more way more bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </div>
                        <div class="Stamp">
                            05/03/17
                        </div>
                    </div>
        
                    <div class="message right z-depth-1">
                        <div class="text">
                            Lorem ipsum and more way more bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                        </div>
                        <div class="Stamp">
                            05/03/17
                        </div>
                    </div>
        
                </div>
                <div class="type-container">
                    <div class="input-container">
                        <textarea></textarea>
                    </div>
                    <div class="send-container">
                        <a class="waves-effect waves-light btn"><i class="material-icons">send</i></a>
                    </div>
                </div>
            </div>
            <div class="details">
                <div class="title">
                    <img src="rescources/houseGaudi.jpg" class="z-depth-1">
                    <div style="width: 100%; padding: 0 10px">
                        <div class="input-field">
                            <input id="Title" type="text" value="Casa Batllo Barcelona">
                            <label for="Title">Title</label>
                        </div>
                        <div class="input-field">
                            <textarea id="Desc" class="materialize-textarea" style="font-size: 12px; max-height: 68px;"> Web oficial del edificio modernista de Antoni Gaudí en Barcelona Casa Batlló. Información sobre Gaudí y el edificio, visitas, precios, ofertas y eventos."</textarea>
                            <label for="Desc">Description</label>
                        </div>
                    </div>
                </div>
                <div class="toolbar">
                    <div class="tools" title="Likes">
                        3 <i class="material-icons">favorite_border</i>
                    </div>
                    <div class="tools" title="Website">
                        <i class="material-icons">link</i>
                    </div>
                    <div class="tools" title="Share">
                        <i class="material-icons">share</i>
                    </div>
                    <div class="tools" title="Add payment">
                        <i class="material-icons">attach_money</i>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="input-field">
                            <input id="Price" type="text">
                            <label for="Price">Price</label>
                        </div>
                    </div>
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="input-field">
                            <input type="checkbox" class="filled-in" id="Payed" checked="checked" />
                            <label for="Payed">Payed</label>
                        </div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="input-field">
                            <input type="date" id="StartDate" class="datepicker">
                            <label for="StartDate">Start date</label>
                        </div>
                    </div>
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="input-field">
                            <input type="date" id="EndDate" class="datepicker">
                            <label for="EndDate">End date</label>
                        </div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="switch">
                            <label>
                                Single day
                                <input type="checkbox">
                                <span class="lever"></span>
                                Multiple days
                            </label>
                        </div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px; padding-top: 10px;">
                        Tags:
                        <div class="chips chips-autocomplete"></div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px; padding-top: 10px;">
                        <div class="input-field">
                            <input id="Location" type="text" class="">
                            <label for="Location">Location</label>
                        </div>
                    </div>
                </div>
                <div class="MapsContainer">
                    <img src="rescources/GoogleMaps.png">
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {
            m_Item: window.defaultItem,
            m_message: []
        }
    },
    watch: {
        item: function() {
            this.m_Item = $.extend(window.defaultItem, this.item)
            this.getMessages();
        }
    },
    methods: {
        getMessages: function() {
            //this.m_Item.id
            this.m_message = window.mockMessage[0].messages;
        }
    }
});

var defaultItem = {
    id: 0,
    img: '',
    title: '',
    desc: '',
    comments: 0,
    financials: false,
    likes: 0,
    liked: false,
    price: '',
    f_date: '',
    t_date: '',
    time: '',
    tags: [],
    location: ''
}

var mockMessage = [
    {messages:[
        {sender:'Pedro',message:'I think this is awesome we could look for more things like this',date:'01/04/17'},
        {sender:'Hilda',message:'Yes that looked so awesome i would love to do that',date:'02/04/17'},
        {message:'I found a website with a lot of other websites where we can get more information about this',date:'02/04/17'}
        ]}
]