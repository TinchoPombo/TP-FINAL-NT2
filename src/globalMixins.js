import Vue from 'vue'

const globalMixin = {
    
    methods:{
        getUrl(){
            return this.$store.state.url;
        }
    },
    computed : {
        
    }
}

Vue.mixin(globalMixin)