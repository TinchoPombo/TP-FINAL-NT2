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
            <th> {{$store.state.FormData.fecha}} </th>
            <td> {{tipoEvento}} </td>
            <td> {{$store.state.FormData.descripcion}} </td>
            <td> {{usuario}} </td>
          </tr>
        </tbody>
      </table>

      <vue-form :state="formState" @submit.prevent="enviar()">

        <!--     FECHA      -->
        <validate tag="div">
          <label for="fecha">Fecha</label>
          <input
            type="date"
            id="fecha"
            name="fecha" 
            class="form-control text-center"
            autocomplete="off"
            v-model="$store.state.FormData.fecha"
            required 
            no-espacios
            
          />

          <field-messages name="fecha" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <!--      DESCRIPCION       -->
        <validate tag="div">
          <label for="descripcion">Descripcion</label>
          <input 
            type="text"
            id="descripcion"
            name="descripcion" 
            class="form-control"
            autocomplete="off"
            v-model="$store.state.FormData.descripcion" 
            required
            :maxlength="maxDescripcion"
          />

          <!-- Mensajes de validación -->
          <field-messages name="descripcion" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>

          </field-messages>
        </validate>
      
        <br>
        
        
          <label for="usuario">Usuario</label>
          <select class="custom-select" v-model="$store.state.FormData.idUsuario">
            <option disabled value="">Seleccione usuario</option>
            <option v-for="(usuario, index) in $store.state.usuarios" :key="index" :value="usuario.id">{{ usuario.nombre }}</option>
          </select>


        <br>
        <br>

        <label for="TipoEvento">Evento</label>
        <select class="custom-select" v-model="$store.state.FormData.idTipoEvento">
          <option disabled value="">Seleccione un evento</option>
          <option v-for="(TipoEve, index) in $store.state.tipos" :key="index" :value="TipoEve.id">{{ TipoEve.descripcion }}</option>
        </select>

        <br>
      
        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>

      

      </vue-form>      

      

    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-detalles-eventos',
    props: ['id', 'tipoEvento', 'usuario'],
    beforeMount () {
       /* this.getEventos() */
    },
    mounted (){
     /*  this.getEvento(this.id) */
    },
    data () {
      return {
        eventos : [],
        evento : "",
        formState : {},
        /* formData : this.getInicialData(), */
        myDate : new Date().toISOString().slice(0,10),
        maxDescripcion : 200
      }
    },
    methods: {
      /* getEventos(){
        this.eventos = this.$store.getters.eventos
      },
      async getEvento(){
        let {data : evento} = await this.axios(this.getUrl() + 'eventos/' + this.id)
        this.evento = evento
      }, */
      
      async enviar(){
        await this.axios.put(this.getUrl() + "eventos/" + this.id, this.$store.state.FormData )
        this.$router.push({
          path : '/vista-eventos'
        })
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
