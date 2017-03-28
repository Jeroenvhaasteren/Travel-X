/**
 * Created by Usuario on 28/03/2017.
 */
/** Board Component *
 *
 * @Data viewMode 0 Folded, 1 Login, 2 Help
 *
 *
 * */
Vue.component('help-login', {
    template: `
    
        <div :class="Classes" id="loginComponent">
            <div  v-if="viewMode == 0">
                <ul>
                    <li>
                        <a class="btn" @click="viewMode = 2">
                            Help
                        </a>
                    </li>
                    <li>
                        <a class="btn" @click="viewMode = 1">
                            Login
                        </a>
                    </li>
                </ul>
            </div>

			<div v-else-if="viewMode == 1" class="form">
			    <div style="text-align: right">
			        <a class="btn close" @click="viewMode = 0"><i class="material-icons">close</i></a>
                </div>
                <div class="login-form">
                    <div>
                        <div><input type="email" placeholder="Email"></div>
                        <div><input type="checkbox">Remember me</div>
                    </div>
			        <div>
			            <div><input type="password" placeholder="password"></div>
			            <div><a class="btn">Login</a></div>
			            <div><a class="inline">I forgot my password</a></div>
                    </div>
  
                </div>
                <div>
			    
                </div>
            </div>
            <div v-else-if="viewMode == 2" class="form">
			    Help Modal
            </div>
        </div>
    
    `,
    data: function() {
        return {
            viewMode: 0
        }
    },
    computed: {
        Classes: function() {
            var containerClasses,
            view = this.viewMode;
            switch(view) {
                case 0:
                    containerClasses = 'menu-btn-container';
                    break;
                case 1:
                    containerClasses = 'top-menu-active';
                    break;
                case 2:
                    containerClasses = 'top-menu-active';
                    break;
                default:
                    break;
            }
            return containerClasses;
        }
    }

});