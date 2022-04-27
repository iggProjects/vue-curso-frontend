<script setup>
  import WelcomeFriend from '../components/WelcomeFriend.vue'
  import DocumentationIcon from '../components/icons/IconDocumentation.vue'
  import ToolingIcon from '../components/icons/IconTooling.vue'
  import EcosystemIcon from '../components/icons/IconEcosystem.vue'
  import CommunityIcon from '../components/icons/IconCommunity.vue'
  import SupportIcon from '../components/icons/IconSupport.vue'
</script>

<template>
  
  <div class="about ">

    <h1>Working</h1>
    
    <div class="team grid-container">

     <!-- https://api.github.com/users/ --> 
  
      <div  class="grid-item1">
      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>
        <template #heading>
          TUTOR
          <img src="https://avatars.githubusercontent.com/u/79279132?v=4" alt="Lamp" width="40" height="40">
          <img src="../assets/img/foto04.jpg" alt="Lamp" width="40" height="40">
        </template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>
      </div>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>11111</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>  
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>


    </div>  


  </div>
</template>

<style scoped>

.about {
  margin:3px;   
  min-width:760px; 
/*  
  height:90vh;
  overflow-y: scroll; 
*/  
  border: 5px solid rgb(214, 213, 213);
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;   

} /* optional */

.about h1 { text-align: center; margin:auto; color:blue;}

.team {
  /* display properties */  
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
}

@media (min-width: 1024px) {
  .about {
    /* min-height: 90vh; */
    display: flex;
    align-items: center;
  }
}

/* definir grid -> https://www.w3schools.com/css/css_grid.asp  */
  
.grid-container {
    display: grid;
    grid-template-columns: auto auto;
    /* background-color: #2196F3; */
}

.grid-item1 { 
  
  height:auto;  
  grid-row: 1;
  grid-column: 1 / span 2;
}

/*
.grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
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
