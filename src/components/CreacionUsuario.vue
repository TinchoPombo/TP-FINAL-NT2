<template>

  <section class="src-components-creacion-usuario">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">

        <!--     NOMBRE      -->
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="nombreMinLength"
            no-espacios
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <!--      TELEFONO       -->
        <validate tag="div">
          <label for="telefono">Telefono</label>
          <input 
            type="number"
            id="telefono"
            name="telefono" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.telefono" 
            required
          />

          <!-- Mensajes de validación -->
          <field-messages name="telefono" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>

       <!--      <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div> -->
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--    Campo email     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="email">email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />

          <!-- Mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
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
    name: 'src-components-creacion-usuario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        edadMin: 18,
        edadMax: 120
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          telefono: '',
          email: ''
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
  .src-components-creacion-usuario {

  }
</style>
