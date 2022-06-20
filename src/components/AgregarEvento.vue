<template>

  <section class="src-components-agregar-evento">
    <div class="jumbotron">
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
            v-model.trim="formData.fecha" 
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
            :maxlength="maxDescripcion"
          />

          <!-- Mensajes de validación -->
          <field-messages name="descripcion" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>

          </field-messages>
        </validate>
        <br>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>      

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-agregar-evento',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        idUsuario: '',
        idTipoEvento: '',
        maxDescripcion: 200
      }
    },
    methods: {
      getInicialData() {
        return {
          fecha: '',
          descripcion: '',
          idUsuario: '',
          idTipoEvento: ''
        }
      },
      enviar() {
        console.log({ ...this.formData })

        this.formData = this.getInicialData()
        this.formState._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-agregar-evento {

  }
</style>
