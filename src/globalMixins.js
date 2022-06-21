import Vue from 'vue'

const globalMixin = {
    
    methods:{
        getUrl(){
            return this.$store.state.url;
        }
    },
    computed : {
        /* mostrarEventos(){
            let eventos = this.$store.state.eventos
            return eventos
        } */
    }
}

Vue.mixin(globalMixin)