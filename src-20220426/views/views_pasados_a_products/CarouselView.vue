<script setup>
    import CarouselUno from '@/components/CarouselUno.vue'    
</script>

<template>
  <div class="carousel">    
    <CarouselUno />
  </div>
</template>

<style scoped>

.carousel {
  min-width:760px; 
  margin:3px;
  border: 2px solid rgb(214, 213, 213);
  overflow-y: scroll; 
  height:95vh;  
}

@media (min-width: 1024px) {
  .carousel {
    min-height: 90vh;
    /*
        display: block;
        align-items: center;
    */
    /* display properties */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;   

  }
}
</style>
