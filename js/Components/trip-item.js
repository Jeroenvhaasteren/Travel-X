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
                    
                    <div style="width: 100%;" v-for="message in m_Messages">
                        <div :class="message.hasOwnProperty('sender') ? 'message left z-depth-1' : 'message right z-depth-1'">
                            <div class="title" v-show="message.hasOwnProperty('sender')">
                                {{message.sender}}
                            </div>
                            <div class="text">
                                {{message.message}}
                            </div>
                            <div class="Stamp">
                                {{message.date}}
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="type-container">
                    <div class="input-container">
                        <textarea v-model="m_NewMessage"></textarea>
                    </div>
                    <div class="send-container">
                        <a class="waves-effect waves-light btn" @click="addMessage"><i class="material-icons">send</i></a>
                    </div>
                </div>
            </div>
            <div class="details">
                <div class="title">
                    <img :src="m_Item.img" class="z-depth-1">
                    <div style="width: 100%; padding: 0 10px">
                        <div class="input-field">
                            <input id="Title" type="text" v-model="m_Item.title">
                            <label for="Title" class='active'>Title</label>
                        </div>
                        <div class="input-field">
                            <textarea id="Desc" class="materialize-textarea" style="font-size: 12px; max-height: 68px;" v-model="m_Item.desc"></textarea>
                            <label for="Desc" class='active'>Description</label>
                        </div>
                    </div>
                </div>
                <div class="toolbar">
                    <div class="tools" title="Likes">
                        {{m_Item.likes}} <i class="material-icons" v-if="m_Item.liked">favorite</i><i class="material-icons" v-else>favorite_border</i>
                    </div>
                    <div class="tools" title="Website">
                        <a :href="m_Item.url" target="_blank"><i class="material-icons" style="color: #1d1d1b">link</i></a>
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
                            <input id="Price" type="text" v-model="m_Item.price">
                            <label for="Price" class='active'>Price</label>
                        </div>
                    </div>
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="input-field">
                            <input type="checkbox" class="filled-in" id="Payed" v-model="m_Item.financials" />
                            <label for="Payed" class="checkboxlbl">Payed</label>
                        </div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="input-field">
                            <input type="date" id="StartDate" class="datepicker" v-model="m_Item.f_date">
                            <label for="StartDate" class='active'>Start date</label>
                        </div>
                    </div>
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="input-field">
                            <input type="date" id="EndDate" class="datepicker" v-model="m_Item.t_date">
                            <label for="EndDate" class='active'>End date</label>
                        </div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="switch">
                            <label class='active'>
                                Single day
                                <input type="checkbox" v-model="m_Item.multipleDays">
                                <span class="lever"></span>
                                Multiple days
                            </label>
                        </div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px; padding-top: 10px;">
                        Tags:
                        <div id="itemDetailsTags" class="chips chips-autocomplete"></div>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="flex: 1; padding-left: 15px; padding-top: 10px;">
                        <div class="input-field">
                            <input id="Location" type="text" class="" v-model="m_Item.location">
                            <label for="Location" class='active'>Location</label>
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
            m_Messages: [],
            m_NewMessage: ''
        }
    },
    watch: {
        item: function() {
            this.m_Item = $.extend(window.defaultItem, this.item);
            this.getMessages();
            var self = this;
            $('#itemDetailsTags').material_chip({
                data: self.m_Item.tags,
                autocompleteOptions: {
                    data: {
                        'Museum': null,
                        'Outdoor': null,
                        'Culture': null,
                        'Nature': null,
                        'Beach': null,
                        'Sun': null,
                        'Food': null,
                        'Wine': null
                    },
                    limit: Infinity,
                    minLength: 1
                }
            });
        }
    },
    methods: {
        getMessages: function() {
            debugger;
            this.m_Messages = window.mockMessage[this.m_Item.id] ? window.mockMessage[this.m_Item.id].messages : [];
        },
        addMessage: function() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yy = today.getFullYear().toString().substring(2,4);
            if(dd<10){
                dd='0'+dd;
            }
            if(mm<10){
                mm='0'+mm;
            }
            var today = dd+'/'+mm+'/'+yy;
            this.m_Messages.push({message:this.m_NewMessage, date: today })
            this.m_NewMessage = '';
        }
    }
});

var defaultItem = {
    id: 0,
    img: '',
    title: '',
    desc: '',
    url:'',
    comments: 0,
    financials: false,
    likes: 0,
    liked: false,
    price: '',
    f_date: '',
    multipleDays: true,
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
        ]},
    {messages:[
        {sender:'Carolina',message:'I think sleeping in a hostel could be alot of fun. I have never done it but we could try it, right???',date:'01/04/17'},
        {sender:'Roxanne',message:'I did it last year was fun yeah. Most people there will probably surf too. I only think it is quite expensive compared to a complete place',date:'02/04/17'},
        {message:'Oke lets keep this one in mind',date:'02/04/17'}
    ]},
    {messages:[
        {sender:'Pedro',message:'Guys i found this article about amazing spots to surf. We could walk or hire i bike i will look for biking rental',date:'01/04/17'},
        {sender:'Pedro',message:'Do you guys have any problems with hiring a scooter. It is really cheap and it might be nice to get a bit further',date:'02/04/17'},
        {message:'No i am fine with that, We should do that men',date:'02/04/17'},
        {sender:'Roxanne',message:'Yeah gas is also really cheap according to the internet',date:'02/04/17'}
    ]},
    {messages:[
        {sender:'Hilda',message:'A friend told me this bar is Super!!!!!!!!! We should check it out. ',date:'01/04/17'},
    ]}
]