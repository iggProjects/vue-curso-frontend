<script setup>
import WelcomeItem from './WelcomeHome/WelcomeItem.vue'
import DocumentationIcon from '../assets/icons/IconDocumentation.vue'
//import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from '../assets/icons/IconTooling.vue'
import EcosystemIcon from '../assets/icons/IconEcosystem.vue'
import CommunityIcon from '../assets/icons/IconCommunity.vue'
import SupportIcon from '../assets/icons/IconSupport.vue'
</script>

<template >

<div id="ppal">
  <p>TheWelcome.vue ✔</p>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>PROGRAMA FRONTEND</template>

    <a target="_blank" href="https://docs.google.com/presentation/d/1G_Q5Dof6Pg9Uq3h5DzDRcwVTlhMU1Kz_MavNwVgAgyw/edit?usp=sharing">Official documentation</a>
    provides you with all information you need to know.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>HTML</template>

    Some online tutorials:<br>
    <table><tr>
      <td><a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a></td>
      <td><a href="https://html.com/" target="_blank">HTML For Beginners</a></td> 
      <td><a href="https://www.learn-html.org/en/Basic_Elements" target="_blank">HTML Basic Elements</a></td> 
    </tr></table>
  
    More in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>CSS</template>

    Some online tutorials:<br>
    <table><tr>
      <td><a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a></td>
      <td><a href="https://html.com/" target="_blank">HTML For Beginners</a></td> 
      <td><a href="https://www.learn-html.org/en/Basic_Elements" target="_blank">HTML Basic Elements</a></td> 
    </tr></table>
  
    More in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>JAVASCRIPT</template>

    Some online tutorials:<br>
    <table><tr>
      <td><a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a></td>
      <td><a href="https://html.com/" target="_blank">HTML For Beginners</a></td> 
      <td><a href="https://www.learn-html.org/en/Basic_Elements" target="_blank">HTML Basic Elements</a></td> 
    </tr></table>
  
    More in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>BOOTSTRAP</template>

    Some online tutorials:<br>
    <table><tr>
      <td><a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a></td>
      <td><a href="https://html.com/" target="_blank">HTML For Beginners</a></td> 
      <td><a href="https://www.learn-html.org/en/Basic_Elements" target="_blank">HTML Basic Elements</a></td> 
    </tr></table>
  
    More in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>SASS</template>

    Some online tutorials:<br>
    <table><tr>
      <td><a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a></td>
      <td><a href="https://html.com/" target="_blank">HTML For Beginners</a></td> 
      <td><a href="https://www.learn-html.org/en/Basic_Elements" target="_blank">HTML Basic Elements</a></td> 
    </tr></table>
  
    More in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>VUE</template>

    Some online tutorials:<br>
    <table><tr>
      <td><a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a></td>
      <td><a href="https://html.com/" target="_blank">HTML For Beginners</a></td> 
      <td><a href="https://www.learn-html.org/en/Basic_Elements" target="_blank">HTML Basic Elements</a></td> 
    </tr></table>
  
    More in <code>README.md</code>.
  </WelcomeItem>

</div>

</template>

<style scoped>
  #ppal { border: 5px solid rgb(214, 213, 213); padding:3px; min-height:95vh;}
  #ppal p { text-align:center; color:blue;}
  /* a { border:1px solid blue;}  */

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }


</style>