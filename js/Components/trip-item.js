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
                        <div :class="message.userId != sessionId ? 'message left z-depth-1' : 'message right z-depth-1'">
                            <div class="title" v-show="message.userId != sessionId">
                                {{message.name}}
                            </div>
                            <div class="text">
                                {{message.message}}
                            </div>
                            <div class="Stamp">
                                {{formatTime(message.time)}}
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
                    <img :src="m_Item.imageURL" class="z-depth-1">
                    <div style="width: 100%; padding: 0 10px">
                        <div class="input-field">
                            <input id="Title" type="text" v-model="m_Item.title">
                            <label for="Title" class='active'>Title</label>
                        </div>
                        <div class="input-field">
                            <textarea id="Desc" class="materialize-textarea" style="font-size: 12px; max-height: 68px;" v-model="m_Item.description"></textarea>
                            <label for="Desc" class='active'>Description</label>
                        </div>
                    </div>
                </div>
                <!--<div class="toolbar">
                    <div class="tools" title="Likes">
                        {{m_Item.likes}} <i class="material-icons" v-if="m_Item.liked">favorite</i><i class="material-icons" v-else>favorite_border</i>
                    </div>
                    <div class="tools" title="Website">
                        <a :href="m_Item.url" target="_blank"><i class="material-icons" style="color: #1d1d1b">link</i></a>
                    </div>
                    <div class="tools" title="Share">
                        <i class="material-icons">share</i>
                    </div>
                    <div class="tools" title="Visible">
                        <i class="material-icons">visibility</i>
                        <i class="material-icons" style="display: none;">visibility_off</i>
                    </div>
                </div>-->
                <div style="display: flex; margin: 15px 0;">
                    <div style="flex: 1; padding-left: 15px;">
                        <div class="switch">
                            <label class='active'>
                                Hidden
                                <input type="checkbox" v-model="m_Item.visible">
                                <span class="lever"></span>
                                Visible
                            </label>
                        </div>
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
                    <a class="waves-effect waves-light btn-flat" @click="cancel">Cancel</a>
                    <a class="waves-effect waves-light btn" @click="saveItem">Save</a>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {
            m_Item: {},
            m_Messages: [],
            m_NewMessage: '',
            sessionId: ''
        }
    },
    mounted: function() {
        this.sessionId = getSessionToken();
    },
    watch: {
        item: function() {
            this.m_Item = this.item;
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
            console.log(this.m_Item.startDate);
            $( document ).ready(function() {
                $("#StartDate").val(moment(self.m_Item.startDate).format('D MMMM, YYYY'));
                $("#EndDate").val(moment(self.m_Item.endDate).format('D MMMM, YYYY'));
            });
        }
    },
    methods: {
        formatTime: function(time) {
            return moment(time).format('HH:mm MM-DD-YYYY');
        },
        getMessages: function() {
            var self = this;
            var url = tripQuestEndPoints.get.messages + this.m_Item.id;
            $.get(url, function(data) {
                console.log(data);
                self.m_Messages = data.success.objects;
            });
        },
        addMessage: function() {
            var newMessage = {
                "userId": getSessionToken(),
                "itemId": this.m_Item.id,
                "message": this.m_NewMessage
            };
            var self = this;
            $.ajax({
                url: tripQuestEndPoints.post.messages,
                type:"POST",
                data: JSON.stringify(newMessage),
                contentType:"application/json; charset=utf-8",
                dataType:"json",
                success: function(data){
                    console.log(data);
                    self.getMessages();
                }
            });
            this.m_NewMessage = '';
        },
        cancel: function() {
            EventChannel.$emit('closeDetails');
        },
        saveItem: function() {
            this.m_Item.startDate = moment($("#StartDate").val(), 'D MMMM, YYYY').unix() * 1000;
            this.m_Item.endDate = moment($("#EndDate").val(), 'D MMMM, YYYY').unix() * 1000;
            EventChannel.$emit('saveItem', this.m_Item);
        }
    }
});