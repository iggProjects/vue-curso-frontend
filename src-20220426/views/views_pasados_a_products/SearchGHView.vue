<script setup>
    import GithubUserSearch from '@/components/GithubUserSearch.vue'
</script>

<template>
  <div class="github">    
    <GithubUserSearch />
  </div>
</template>

<style>

.github {
  min-width:760px; 
  overflow-y: scroll; 
  height:95vh;
  margin:3px;
  border: 5px solid rgb(199, 199, 199);    
}

@media (min-width: 1024px) {
  .github {
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
