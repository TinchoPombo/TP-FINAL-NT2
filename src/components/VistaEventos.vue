<template>

  <section class="src-components-vista-eventos">
    
    <div class="jumbotron">

      <table class="table" @>
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Evento</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(evento, index) in eventos" :key="index">
            <th scope="row">{{evento.fecha}}</th>
            <td> {{returnTipoEve(evento.idTipoEvento)}} </td>
            <td>{{evento.descripcion}}</td>
            <td> {{returnUser(evento.idUsuario)}} </td>
          </tr>
        </tbody>
      </table>

      
    </div>

    

  </section>

</template>

<script>

  export default  {
    name: 'src-components-vista-eventos',
    props: [],
    beforeMount(){
      this.getEventos()
      this.getTipos()
      this.getUsuarios()
    },
    created (){
      this.getTipos()
    },
    mounted () {
     
    },
    data () {
      return {
        eventos : [],
        tipos : [],
        usuarios : [],
       
      }
    },
    methods: {
      /* logear(stringg){
        this.$store.dispatch('logear', stringg)
      } */
      async getEventos(){
        let {data : eventos} = await this.axios(this.getUrl() + "eventos") 
        this.eventos = eventos
      },
      async getTipos(){
        let {data : tipos} = await this.axios(this.getUrl() + "tipoeventos")
        this.tipoEventos = tipos
      },
      async getUsuarios(){
        let {data : usuarios} = await this.axios(this.getUrl() + "usuarios") 
        this.usuarios = usuarios
      },
      toggleEventos(){
        (this.mostrarEventos? this.mostrarEventos = false :this.mostrarEventos = true)
        this.getEventos(),
        this.getTipos()
      },

      returnUser(id){
        let { ...list} = this.$store.getters.usuarios;
        let i = 0
        let encontre = false
        let nmb = ''

        while(!encontre){
          if(list[i].id == id){
            encontre = true
            nmb = list[i].nombre
          }else{
            i++
          }
        }
        return nmb
      },
      returnTipoEve(id){
        let { ...list} = this.$store.getters.tipos;
        let i = 0
        let encontre = false
        let nmb = ''

        while(!encontre){
          if(list[i].id == id){
            encontre = true
            nmb = list[i].descripcion
          }else{
            i++
          }
        }
        return nmb
      }

      
      

    },
    
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    margin-left: 20%;
    margin-top: 5%;
    margin-right: 20%;
  }
</style>
