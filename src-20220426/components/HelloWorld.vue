<script setup>
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })
</script>

<template>
  
  <div class="greetings">
    
    <p>HelloWorld.vue ✔</p>
    <h1><b>{{ msg }}</b></h1>
    <h2>EDUCATION</h2>
    <h4>A colaborative project !</h4>
     
<!--      
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
-->      
    

  </div>

</template>

<style scoped>
h1 {
  font-weight: 400;
  font-size: 1.6rem;
  color:blue;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings { 
  
  /* border:1px solid rgb(255, 153, 0); */
  }

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings p { font-size:10px; color:rgb(255, 153, 0);}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
