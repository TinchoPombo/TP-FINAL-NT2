import Vue from 'vue'
import VueRouter from 'vue-router'

import CreacionUsuario from './components/CreacionUsuario.vue'
import AgregarEvento from './components/AgregarEvento.vue'
import VistaEventos from './components/VistaEventos.vue'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/agregar-evento' },
        { path: '/creacion-usuario', component: CreacionUsuario },
        { path: '/agregar-evento', component: AgregarEvento },
        { path: '/vista-eventos', component: VistaEventos },
     
        { path: '*', redirect: '/' },
    ]
})