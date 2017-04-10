/**
 * Created by Usuario on 28/03/2017.
 */
/** Top Nav Component *
 *
 *
 *
 *
 * */
Vue.component('top-nav-bar', {
    template: `
    
    <div id="TopNavBarContainer">
        <!-- Visible part -->
        <nav class="top-nav-bar" id="TopNavBar">
            <div class="left-container">
                <img src="rescources/trip_quest_logo.png">
            </div>
            <div class="middle-container">
                <slot name="middle-container">
            
                </slot>
            </div>
            <div class="right-container">
                <ul class="menu-items">
                    <li><a>Start now</a></li>
                    <li @click="view.dropDown=true"><a>Log in</a></li>
                </ul>
            </div>
        </nav>
        
        <!-- Main dropDown part -->
        <transition name="fade">
        <section id="TopNavDropDown" class="z-depth-3" v-show="view.dropDown">        
            <div class="cont">
                <div class="close-containter" @click="view.dropDown=false"><i class="material-icons">close</i></div>
                <log-in v-if="view.viewMode == 0"></log-in>
            </div>
        </section>   
        </transition>
	</div>
    
    `,
    data: function() {
        return {
            view: {
                dropDown: false,
                viewMode: '0',
            }
        }
    }
});

Vue.component('log-in', {
    template: `
        <div id="LogInComp">
            <div class="info">
                INFO
            </div>
            <div class="form">
            <h3>Log in</h3>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" v-model="account.email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" v-model="account.password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
                <a class="waves-effect waves-light btn">Log in</a>
                <p>or</p>
                <div><div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="false"></div></div>
            </div>
        </div>
    `,
    data: function() {
        return {
            account: {
                user: '',
                password: ''
            }
        }
    }
});