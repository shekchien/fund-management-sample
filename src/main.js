import 'bootstrap/dist/css/bootstrap.min.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import { makeServer } from './fakeServer/server'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Panel from 'primevue/panel'
import Textarea from 'primevue/textarea'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'
import Menu from 'primevue/menu'
import Sidebar from 'primevue/sidebar'

const app = createApp(App)

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Panel', Panel)
app.component('ProgressBar', ProgressBar)
app.component('ProgressSpinner', ProgressSpinner)
app.component('Menu', Menu)
app.component('Sidebar', Sidebar)

app.mount('#app')
