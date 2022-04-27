<script setup>
    import DragDrop from '@/components/DragDrop.vue'    
</script>

<template>
  <div class="Drag-Drop">    
    <DragDrop />
  </div>
</template>

<style scoped>

.Drag-Drop {
  min-width:760px; 
  margin:3px;
  border: 5px solid rgb(154, 154, 248);
  overflow-y: scroll; 
  height:95vh;  
}

@media (min-width: 1024px) {
  .Drag-Drop {
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
    align-content: center;   

  }
}
</style>
