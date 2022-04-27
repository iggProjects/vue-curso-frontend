<script setup>

  import GithubUserSearch from '../components/GH_UserSearch/GithubUserSearch.vue'
  import CarouselUno from '@/components/CarouselUno/CarouselUno.vue'    
  import WelcomeProduct from '../components/WelcomeProduct.vue'
  import DocumentationIcon from '../assets/icons/IconDocumentation.vue'  
  import ToolingIcon from '../assets/icons/IconTooling.vue'
  import EcosystemIcon from '../assets/icons/IconEcosystem.vue'
  import CommunityIcon from '../assets/icons/IconCommunity.vue'
  import SupportIcon from '../assets/icons/IconSupport.vue'
  import JsonComp from '../components/FetchLocalJson/JsonComp.vue'
  import JsonurlComp from '../components/FetchUrlJson/JsonurlComp.vue'
  import WelcomeTable from '../components/TableExample/WelcomeTable.vue'
  import DragDrop from '../components/Drag&Drop/DragDrop.vue'
  // import PassdataView from '../views/PassdataView.vue'
  import PassData from '../components/PassData.vue'
</script>

<template>
  
  <div id="ppalProducts" >

    <h1>Our Works</h1> 
  
    <WelcomeProduct>
      <template #icon>
        <DocumentationIcon />
      </template>
      <!-- <template #heading>GIT HUB SEARCH</template>  -->

      <template #heading>              
        <GithubUserSearch />          
      </template>

      This Api <a target="_blank" href="https://vuejs.org/">documentation</a> provides you with all information you need to get started.
    </WelcomeProduct>

    <WelcomeProduct>
      <template #icon>
        <DocumentationIcon />
      </template>

      <template #heading>
        <CarouselUno />
      </template>

      Vue’s
      <a target="_blank" href="https://vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeProduct>

    <WelcomeProduct>
      <template #icon>
        <DocumentationIcon />
      </template>

      <template #heading>
        <DragDrop />        
      </template>

      Vue’s
      <a target="_blank" href="https://vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeProduct>

    <WelcomeProduct>
      <template #icon>
        <DocumentationIcon />
      </template>

      <template #heading>
        <JsonComp />        
      </template>

      Vue’s
      <a target="_blank" href="https://vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeProduct>

    <WelcomeProduct>
      <template #icon>
        <DocumentationIcon />
      </template>

      <template #heading>
        <JsonurlComp />        
      </template>

      Vue’s
      <a target="_blank" href="https://vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeProduct>

    <WelcomeProduct>
      <template #icon>
        <DocumentationIcon />
      </template>

      <template #heading>
        <PassData />        
      </template>

      Vue’s
      <a target="_blank" href="https://vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeProduct>

    <WelcomeProduct>
      <template #icon>
        <DocumentationIcon />
      </template>

      <template #heading>
        <WelcomeTable />        
      </template>

      Vue’s
      <a target="_blank" href="https://vuejs.org/">official documentation</a>
      provides you with all information you need to get started.
    </WelcomeProduct>

  </div>
</template>

<style scoped>

#ppalProducts { 
  border: 5px solid rgb(214, 213, 213); 
  padding:5px; 
  overflow-y: scroll; 
  height:95vh;
  min-width:800px;
  max-width:1024px;
}

#ppalProducts h1 { color:blue; text-align: center;  }

/*
.products {
   
  min-height:95vh;  
  min-width:760px;
  margin:3px;     
  border: 5px solid rgb(214, 213, 213);
  display: flex; 
  flex-direction: column;
  flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;  
} // optional 

.products h1 { text-align: center; margin:auto}

@media (min-width: 1024px) {

  .products {
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;  
  }
}

*/

/*
  .github {
    height: auto;
    
    //    display: block;
    //    align-items: center;
    
    // display properties 
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;   

  }
  */



/*

  height: 100vh = 100% of the viewport height. Technically, this is true, 
  but a better way to think of it is = 100% of the available height. 
  If you are looking to fill up a div with the available height, 
  that's a mighty useful trick
  
  1px = 100vw / viewport's width (in px)
  ​
  function convertPXToVW(px) {
  return px * (100 / document. documentElement. clientWidth);
}

*/

</style>

