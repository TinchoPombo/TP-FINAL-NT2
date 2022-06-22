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

      <div v-if="ultimosEventos.length != 0">
        <label>Ultimo evento agregado</label>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card-group" display: flex  v-for="(evento, index) in ultimosEventos" :key="index" >
              <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header"> {{  eventos[evento.idTipoEvento - 1].descripcion}} </div>
                <div class="card-body">
                  <h5 class="card-title">{{evento.fecha}}</h5>
                  <p class="card-text"> {{evento.descripcion}} </p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Por: {{usuarios[evento.idUsuario - 1].nombre}} </small>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    

    <router-link to="/vista-eventos">
      <button type="button" class="btn btn-primary">Ver todos los eventos</button>
    </router-link>

    

    <div>
      
    </div>

  </section>    

</template>

<script>



  export default  {
    name: 'src-components-agregar-evento',
    props: [],
    mounted () {
      this.cargarVueX()
    },
    components:{
      
    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        idUsuario: '',
        idTipoEvento: '',
        maxDescripcion: 200,
        usuarios : [],
        eventos : [],
        ultimosEventos : [],
        
      }
    },
    methods: {
      cargarVueX(){
        this.getTipoEvento()
        this.getUsuarios()
        this.getEventos()
      },
      /* setTipoEventos(eventos){
        this.$store.dispatch('setTipoEvento', eventos)
      }, */
      getInicialData() {
        return {
          fecha: '',
          descripcion: '',
          idUsuario: '',
          idTipoEvento: '',
        }
      },
      enviar() {
        console.log({ ...this.formData })
        this.postEvento({ ...this.formData })
        this.getEventos()
        this.formData = this.getInicialData()
        this.formState._reset()
      },
      async postEvento(formData){
        let nuevoEvento = {
          fecha :         formData.fecha,
          descripcion :   formData.descripcion,
          idUsuario :     formData.idUsuario,
          idTipoEvento :  formData.idTipoEvento
        };
        try{
          await this.axios.post(this.getUrl() + "eventos", nuevoEvento, {'content-type' : 'application/json'})
          this.agregarUltimosEventos(nuevoEvento)
        }catch(error) {
          console.error('Error en postUsuario()', error.message)
        }

      },
      agregarUltimosEventos(evento){
        if(this.ultimosEventos.length >= 3){
          this.ultimosEventos.pop()
        }
        this.ultimosEventos.unshift(evento)
      },
      onChange(e) {
        console.log(e.target.value);
      },
      async getUsuarios(){
        let {data : usuarios} = await this.axios(this.getUrl() + "usuarios") 
        this.usuarios = usuarios
        this.$store.dispatch('setUsuarios', usuarios)
      },
      async getTipoEvento(){
        let {data : tipoEventos} = await this.axios(this.getUrl() + "tipoeventos") 
        this.eventos = tipoEventos
        this.$store.dispatch('setTipoEventos', tipoEventos)
      },
      async getEventos(){
        let {data : eventos} = await this.axios(this.getUrl() + "eventos") 
        this.$store.dispatch('setEventos', eventos)
      }
    },
    computed: {
      getEventosCom(){
        return this.$store.getters.eventos
      }
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
