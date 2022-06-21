import Vue from "vue";
import Vuex from "vuex";
//import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url: "http://localhost:3000/",
        tipos : [],
        log : "",
        usuarios : [],
        eventos : [],
    },
    actions : {
        setTipoEventos({commit}, tiposEventos){
            commit('setearTipoEventos', tiposEventos)
            console.log("action" + tiposEventos);
        },
        setUsuarios({commit}, usuariosList){
            commit('setearUsuarios', usuariosList)
        },
        setEventos({commit}, eventosList){
            commit('setearEventos', eventosList)
        },
        logear({commit}, stringg){
            commit('logear', stringg)
          }
    },
    mutations : {
        setearTipoEventos(state, tipoEventos){ 
            state.tipos = tipoEventos
            console.log(state.tipos);
        },
        setearUsuarios(state, usuariosList){
            state.usuarios = usuariosList
        },
        setearEventos(state, eventosList){
            state.eventos = eventosList
        },
        logear(state, text){
            state.log = text;
            console.log(state.log);
        }
    },
    getters: {
        tipos(state){
            return state.tipos;
        },
        eventos(state){
            return state.eventos;
        },
        usuarios(state){
            return state.usuarios;
        }
    }
})