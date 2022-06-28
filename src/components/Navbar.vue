<template>

  <section class="src-componentes-navbar">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- CreacionUsuario -->
          <li class="nav-item">
            <router-link to="/creacion-usuario">
              <a class="nav-link" href="#">Creacion Usuario</a>
            </router-link>
          </li>

         <!-- AgregarEvento -->
          <li class="nav-item">
            <router-link to="/agregar-evento">
              <a class="nav-link" href="#">Agregar Evento</a>
            </router-link>
          </li>

          <!-- VistaEventos-->
          <li class="nav-item">
            <router-link to="/vista-eventos">
              <a class="nav-link" href="#">Lista de Eventos</a>
            </router-link>
          </li>
          
        </ul>
      </div>

    </nav>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  
</style>
