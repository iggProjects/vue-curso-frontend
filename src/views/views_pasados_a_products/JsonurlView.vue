<script setup>
    import JsonurlComp from '@/components/JsonurlComp.vue'    
</script>

<template>  
  <div class="jsoncomp">   
    <p>Json_urlView ✔</p>       
    <JsonurlComp />
  </div>
</template>

<style scoped>

.jsoncomp {
  min-width:760px; 
  margin:3px;
  margin-top:20px;
  border: 5px solid rgb(154, 154, 248);   
  min-height:90vh;  
}

.jsoncomp p { margin-top: 20px; margin-bottom: 10px; color:blue; font-size: 10px; }

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
