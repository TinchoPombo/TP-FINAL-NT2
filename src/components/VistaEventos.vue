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
            <td> {{}} </td>
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
    created (){
      this.getTipos()
    },
    mounted () {
     this.getEventos()
     this.getTipos()
     this.getUsuarios()
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
        console.log(list);
        return list[id-1]
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
