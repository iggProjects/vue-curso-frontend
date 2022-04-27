<!-- https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/ -->

<script setup>
  import Test from '../components/PassData/WelcomeTest.vue'
  import Test2 from '../components/PassData/WelcomeTest2.vue'
  import Test3 from '../components/PassData/WelcomeTest3.vue'
  import Test4 from '../components/PassData/WelcomeTest4.vue'
  import Test5 from '../components/PassData/WelcomeTest5.vue'
  import Test6 from '../components/PassData/WelcomeTest6.vue'
</script>

<template>
  <div id="ppalPassData">
    <p>Passdata.vue ✔</p>
    <img alt="Vue logo" src="../assets/logo.svg">
    <p><a href="https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/" target="_blank">pass-data-to-child-components</a></p>
    <div class="components">
    <!--  
      <Test v-bind:artists="artists"/> 
    -->
      <Test2 v-bind:artists="artists"/>        
      <Test3 v-bind:alumnos="alumnos"/>
    <!--  
      <Test4 v-bind:tutor="tutor"/> 
      <Test5 v-bind:alumnos="alumnos" v-bind:tutor="tutor"/> 
    -->
      <Test6 v-bind:alumnos="alumnos" v-bind:tutor="tutor"/>
    </div>
  </div>
</template>

<script>

  import Elementos from '../assets/json/frontend_20200124.json'

  export default {
    name: 'passData',
    components: {
      Test, Test2, Test3, Test4
    },
    data (){
      return {
        artists: [
        {name: 'Davido', genre: 'afrobeats', country: 'Nigeria'},
        {name: 'Burna Boy', genre: 'afrobeats', country: 'Nigeria'},
        {name: 'AKA', genre: 'hiphop', country: 'South-Africa'},
        {name: 'Sarkodie', genre: 'hiphop', country: 'Ghana'},
        {name: 'Stormzy', genre: 'hiphop', country: 'United Kingdom'},
        {name: 'Lil Nas', genre: 'Country', country: 'United States'},
        {name: 'Nasty C', genre: 'hiphop', country: 'South-Africa'},
        {name: 'Shatta-walle', genre: 'Reagae', country: 'Ghana'},
        {name: 'Khalid', genre: 'pop', country: 'United States'},
        {name: 'ed-Sheran', genre: 'pop', country: 'United Kingdom'}
        ],
        tutor: Elementos.tutor,
        alumnos: Elementos.alumnos        
      }
    },
    created(){ 
      console.log('alumnos: ' + Elementos.alumnos.length)
    }
  }
</script>

<style scoped>
  #ppalPassData { 
    width:90%;
    overflow-x: scroll;
    text-align: center;
    border:3px solid rgb(168, 168, 252);
    margin-left:10px;    
    margin-bottom:10px;
    padding:10px;
    height: 400px;    
    overflow-y: scroll;
  }

  #ppalPassData .components { width:90%; }

  #ppalPassData img { width: 40px; margin-top:40px; }

  #ppalPassData p { color:blue; font-size:10px;}

</style>