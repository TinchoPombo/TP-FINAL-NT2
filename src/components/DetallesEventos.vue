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
            v-model="formData.fecha" 
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
          <label for="descripcion">descripcion</label>
          <input 
            type="text"
            id="descripcion"
            name="descripcion" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.descripcion" 
            required
            :placeholder=" evento.descripcion "
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
          <select class="custom-select" v-model="formData.idUsuario">
            <option disabled value="">Seleccione usuario</option>
            <option v-for="(usuario, index) in usuarios" :key="index" :value="usuario.id">{{ usuario.nombre }}</option>
          </select>

        

        <router-link to="/creacion-usuario">
          <a href="#">Crear nuevo usuario</a>
        </router-link>

        <br>
        <br>

        <label for="TipoEvento">Evento</label>
        <select class="custom-select" v-model="formData.idTipoEvento">
          <option disabled value="">Seleccione un evento</option>
          <option v-for="(TipoEve, index) in eventos" :key="index" :value="TipoEve.id">{{ TipoEve.descripcion }}</option>
        </select>

        <br>
      
        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid || !formData.idTipoEvento ">Enviar</button>
      </vue-form>      

      

    </div>

      <button type="button" class="btn btn-success">Editar</button>
      <button type="button" class="btn btn-danger">Borrar</button>

    

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
        formState : {},
        formData : this.getInicialData(),
      }
    },
    methods: {
      getEventos(){
        this.eventos = this.$store.getters.eventos
      },
      async getEvento(){
        let {data : evento} = await this.axios(this.getUrl() + 'eventos/' + this.id)
        this.evento = evento
      },
      getInicialData() {
        return {
          fecha: '',
          descripcion: '',
          idUsuario: '',
          idTipoEvento: '',
        }
      },
      
      
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
