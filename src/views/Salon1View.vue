<script setup>
  import WelcomeSalon from '../components/WelcomeSalon.vue'  
</script>

<template>
  <div class="salonComp">
    <WelcomeSalon />
  </div>  
</template>

<style scoped>  

  .salonComp {
    min-width:960px; 
    margin:3px;
    border: 5px solid rgb(214, 213, 213);     
    height:95vh;  
    overflow:scroll;
  }

@media (min-width: 1024px) {
  .salonComp {
    min-height: 90vh;    
    /*
        display: block;
        align-items: center;
    */
    /* display properties */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: baseline;
    align-items: baseline;
    align-content: center;   
  }
}
</style>

