import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import {Beancount4js} from '../../src/Beancount4js'

const bc4js = new Beancount4js();
bc4js.testOne("/src/file");
bc4js.testTwo("content");
