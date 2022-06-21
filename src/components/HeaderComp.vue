<template>

  <section class="src-components-header-comp">
    
    <div id="header">
   
      <span id="Display">Agendin</span>
    
    </div>

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-header-comp',
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
  #header {
    transition: all 0.3s;
    background: steelblue;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;	
}
h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
#Display {
	font-size: 200%;
}
</style>
