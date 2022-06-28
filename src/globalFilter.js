import Vue from 'vue'

Vue.filter('formatearFecha', function(value){
    const [year, month, day] = value.split('-');
    const result = [day,month,  year].join('/');
    return result
})