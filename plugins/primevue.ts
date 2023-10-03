import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import OrderList from 'primevue/orderlist';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('OrderList', OrderList)
    nuxtApp.vueApp.component('Card', Card)
    nuxtApp.vueApp.component('Menubar', Menubar)
    nuxtApp.vueApp.component('Toast', Toast)
    //other components that you need
})