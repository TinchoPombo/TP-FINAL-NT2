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
          <label for="mail">Mail</label>
          <input 
            type="mail"
            id="mail"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.mail" 
            required 
          />

          <!-- Mensajes de validación -->
          <field-messages name="mail" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="mail" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <label v-show="enviado" :style="envioOk ? styleOk : styleError" >{{envioOk ? msgEnvioOk : msgEnvioError}}</label>
        <br>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>

        <router-link to="/agregar-evento">
          <a class="nav-link" href="#">Volver a eventos</a>
        </router-link>
      
      
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
        envioOk : false,
        enviado: false,
        msgEnvioOk : "Usuario creado correctamente!",
        msgEnvioError : "Error al crear usuario",
        styleOk : "color : green",
        styleError : "color : red"
      }
    },
    methods: {
      
      getInicialData() {
        return {
          nombre: '',
          telefono: '',
          mail: ''
        }
      },
      enviar() {
        console.log({ ...this.formData })
        this.postUsuario({ ...this.formData })
        this.formData = this.getInicialData()
        this.formState._reset()
      },
      async postUsuario(formData){
        let nuevoUsuario = {
          nombre :         formData.nombre,
          telefono :   formData.telefono,
          mail :     formData.mail,
          
        };
        try{
          await this.axios.post(this.getUrl() + "usuarios", nuevoUsuario, {'content-type' : 'application/json'})
          this.envioOk = true
        }catch(error) {
          console.error('Error en postUsuario()', error.message)
         
        }
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
