import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {Amplify} from 'aws-amplify'
import awsExports from './aws-exports'; 
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

awsExports.oauth.redirectSignIn = `${window.location.origin}/`;
awsExports.oauth.redirectSignOut = `${window.location.origin}/`;

Amplify.configure(awsExports);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
