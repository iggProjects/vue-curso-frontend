<script setup>
    import JsonComp from '@/components/JsonComp.vue'    
</script>

<template>
  <div class="jsoncomp">    
    <JsonComp />
  </div>
</template>

<style scoped>

.jsoncomp {
  min-width:760px; 
  margin:3px;
  border: 5px solid rgb(154, 154, 248);
  overflow-y: scroll; 
  height:95vh;  
}

@media (min-width: 1024px) {
  .jsoncomp {
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
