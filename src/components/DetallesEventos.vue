<template>

  <section class="src-components-detalles-eventos">

    <div class="jumbotron">


      <h4>Detalles</h4>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Evento</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th> {{evento.fecha}} </th>
            <td> {{tipoEvento}} </td>
            <td> {{evento.descripcion}} </td>
            <td> {{usuario}} </td>
          </tr>
        </tbody>
      </table>

      <button type="button" class="btn btn-success">Editar</button>
      <button type="button" class="btn btn-danger">Borrar</button>

    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-detalles-eventos',
    props: ['id', 'tipoEvento', 'usuario'],
    beforeMount () {
       this.getEventos()
    },
    mounted (){
      this.getEvento(this.id)
    },
    data () {
      return {
        eventos : [],
        evento : "",
      }
    },
    methods: {
      getEventos(){
        this.eventos = this.$store.getters.eventos
      },
      async getEvento(){
        let {data : evento} = await this.axios(this.getUrl() + 'eventos/' + this.id)
        this.evento = evento
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    margin-left: 20%;
    margin-top: 2%;
    margin-right: 20%;
    
  }
</style>
