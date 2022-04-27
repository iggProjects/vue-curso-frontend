<!-- https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/ -->

<script setup>
  import Test from '../components/WelcomeTest.vue'
  import Test2 from '../components/WelcomeTest2.vue'
</script>

<template>
  <div id="ppal">
    <img alt="Vue logo" src="../assets/logo.svg" width="50" height="50">
    <p><a href="https://blog.logrocket.com/how-to-use-props-to-pass-data-to-child-components/" target="_blank">pass-data-to-child-components</a></p>
    <Test v-bind:artists="artists"/>
    <Test2 v-bind:artists="artists"/>  </div>
</template>

<script>
  export default {
    name: 'passData',
    components: {
      Test, Test2
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
        ]
      }
    }
  }
</script>

<style scoped>
  #ppal { 
    width:760px;
    text-align: center;
    border:5px solid blue;
    margin-left:10px;
    margin-bottom:10px;
    padding:5px;
    height: 95vh;
    overflow-y: scroll;
  }

</style>