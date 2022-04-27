<script setup>
  import WelcomeHtmlCssJs from '../components/WelcomeHtmlCssJs.vue';
  import HtmlExample01 from '../components/z-HTML-Codes/HtmlExample01.vue'
  import HtmlCssJsProjects from '../components/z-HTML-Codes/HtmlCssJsProjects.vue'
  import DocumentationIcon from '../assets/icons/IconDocumentation.vue'    
</script>

<template>

  <div id="htmlPpalDiv">

    <h1>HTML - CSS - JS</h1>

<!--
    <WelcomeHtmlCssJs>

      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading></template>

      <template #heading>              
        <HtmlExample01 />     
      </template>
      
      This Api <a target="_blank" href="https://vuejs.org/">documentation</a> provides you with all information you need to get started.
    </WelcomeHtmlCssJs>
-->
    <WelcomeHtmlCssJs>

      <template #icon>
        <DocumentationIcon />
      </template>
      <!-- <template #heading>GIT HUB SEARCH</template>  -->

      <template #heading>              
        <HtmlCssJsProjects />     
      </template>

      <!-- https://www.bettercloud.com/monitor/the-academy/how-to-host-a-web-page-on-google-drive/#:~:text=To%20host%20a%20web%20page%20on%20Google%20Drive%3A,Preview%E2%80%9D%20button%20in%20the%20toolbar. -->
      
      This Api <a target="_blank" href="https://vuejs.org/">documentation</a> provides you with all information you need to get started.
    </WelcomeHtmlCssJs>


  </div>  

</template>

<style>

  #htmlPpalDiv { 
    border: 5px solid rgb(214, 213, 213); 
    text-align: center;        
    height:95vh;
    overflow-y: scroll;
    min-width:800px;
    max-width:1024px;
  }

  #htmlPpalDiv h1 { color:blue; text-align: center;  }
  
</style>


