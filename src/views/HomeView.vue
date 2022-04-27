<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
  import WelcomeItem from '../components/WelcomeHome/WelcomeItem.vue'
  import DocumentationIcon from '../assets/icons/IconDocumentation.vue'
  import ToolingIcon from '../assets/icons/IconTooling.vue'
  import EcosystemIcon from '../assets/icons/IconEcosystem.vue'
  import CommunityIcon from '../assets/icons/IconCommunity.vue'
  import SupportIcon from '../assets/icons/IconSupport.vue'
</script>

<template>
  
<!-- <TheWelcome /> -->

<div id="ppal" class="disp-col-center">
    <p>TheWelcome.vue ✔</p>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>PROGRAMA FRONTEND</template>

      <a target="_blank" href="https://docs.google.com/presentation/d/1G_Q5Dof6Pg9Uq3h5DzDRcwVTlhMU1Kz_MavNwVgAgyw/edit?usp=sharing">
      En el Contenido del Programa FrontEnd, enero - abril 2022,
      </a>encontrarás la información necesaria para conocer los temas tratados en el curso dictado por el 
      <a href="https://github.com/albertomozo" target="_blank">Profesor Alberto Mozo</a>,
      especialista en el área de desarrollo web.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>HTML</template>

      Tutoriales y documentos relacionados con HTML:<br>
      <table><tr>
        <td ><a href="https://docs.google.com/presentation/d/1KfPKrD9dmRxfIlOQ9hdRaeayiibZQ7jZJXq_qWlHOTA/edit#slide=id.p" target="_blank">TUTOR</a></td>
        <td ><a href="https://www.w3schools.com/html/default.asp" target="_blank">w3schools</a></td>
        <td ><a href="https://html.com/" target="_blank">HTML For Beginners</a></td> 
        <td ><a href="https://www.learn-html.org/en/Basic_Elements" target="_blank">HTML Basic Elements</a></td> 
      </tr></table>
    
      <!-- + info <code>README.md</code> -->
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>CSS</template>

      Tutoriales y documentos relacionados con CSS:<br>
      <table><tr>
        <td ><a href="https://docs.google.com/presentation/d/1KfPKrD9dmRxfIlOQ9hdRaeayiibZQ7jZJXq_qWlHOTA/edit#slide=id.p" target="_blank">TUTOR</a></td>
        <td><a href="https://www.w3schools.com/css/" target="_blank">w3schools</a></td>
        <td><a href="https://css-tricks.com/" target="_blank">CSS Tricks</a></td> 
        <td><a href="https://lenguajecss.com/css/" target="_blank">Introducción a CSS</a></td> 
      </tr></table>
    
      <!-- + info <code>README.md</code> -->
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>BOOTSTRAP</template>

      Tutoriales y documentos relacionados con BOOTSTRAP:<br>
      <table><tr>
        <td ><a href="https://docs.google.com/presentation/d/1RthlxoQhDyouV3BonTuOC0qGuBtSoAKYbSInRs4pST4/edit#slide=id.p" target="_blank">TUTOR</a></td>
        <td><a href="https://www.w3schools.com/bootstrap4/default.asp" target="_blank">w3schools vers 4</a></td>
        <td><a href="https://bootstrap-cheatsheet.themeselection.com/" target="_blank">CheatSheet vers 5</a></td> 
        <td><a href="https://bootswatch.com/" target="_blank">Free Themes</a></td> 
      </tr></table>
    
      <!-- + info <code>README.md</code> -->
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>SASS</template>

      Tutoriales y documentos relacionados con SASS:<br>
      <table><tr>
        <td ><a href="https://docs.google.com/presentation/d/1Lr8MJz9VN-TjAu0dqOe5RsJiwO0VYG60XxWZGZLq7oo/edit#slide=id.gdfa196b4b2_0_37" target="_blank">TUTOR</a></td>
        <td><a href="https://www.w3schools.com/sass/" target="_blank">w3schools</a></td>
        <td><a href="https://www.tutorialsteacher.com/sass" target="_blank">SASS For Beginners</a></td> 
        <td><a href="https://www.javatpoint.com/sass-tutorial" target="_blank">SASS/SCSS Tutorial</a></td> 
      </tr></table>
    
      <!-- + info <code>README.md</code> -->
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>JAVASCRIPT</template>

      Tutoriales y documentos relacionados con JAVASCRIPT:<br>
      <table><tr>
        <td ><a href="https://docs.google.com/presentation/d/1rTIUbxueAOxUOdXNKrYtGgCswSCpzSENOLpReap8E5A/edit#slide=id.p" target="_blank">TUTOR</a></td>
        <td><a href="https://www.w3schools.com/js/" target="_blank">w3schools</a></td>
        <td><a href="https://es.javascript.info/" target="_blank">JavaScript Moderno</a></td> 
        <td><a href="https://bluuweb.github.io/node/" target="_blank">NODE, entorno JS</a></td> 
      </tr></table>
    
      <!-- + info <code>README.md</code> -->
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>VUE</template>

      Tutoriales y documentos relacionados con VUE:<br>
      <table><tr>
        <td ><a href="https://docs.google.com/presentation/d/1H2TqF_hRK8TQNi4Go6FvWoSNj1vFqWh_R39wbHQK1Yg/edit#slide=id.p" target="_blank">TUTOR</a></td>
        <td><a href="https://vuejs.org/tutorial/#step-1" target="_blank">VUE School</a></td>
        <td><a href="https://lenguajejs.com/vuejs/" target="_blank">Introducción a Vue</a></td> 
        <td><a href="https://jdonsan.github.io/charla-aprendiendo-vuejs/slides/#slide=1" target="_blank">Un ejemplo práctico</a></td> 
      </tr></table>
    
      <!-- + info <code>README.md</code> -->
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>PLUS</template>

      Control Versiones, Frameworks JS, Animaciones CSS, Api docs<br>
      <table><tr>
        <td ><a href="https://docs.google.com/presentation/d/1v8LjvzaJVrzTUrp3jUhqi79V3jjB4E90blN_RDNsxIo/edit#slide=id.gaa366c707f_0_0" target="_blank">Git y Github</a></td>
        <td><a href="https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks" target="_blank">frameworks JS</a></td>
        <td><a href="https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations/Using_CSS_animations" target="_blank">Animaciones con CSS3</a></td> 
        <td><a href="https://devdocs.io/" target="_blank">API documentation</a></td> 
      </tr></table>
    
      <!-- + info <code>README.md</code> -->
    </WelcomeItem>

</div>

</template>

<style scoped>

  #ppal { 
    border: 5px solid rgb(214, 213, 213); 
    padding:10px; 
    width:960px; 
    margin:auto; 
    /*
    height: 90vh;
    overflow-x: scroll;
    */    
  }

  #ppal p { text-align:center; color:blue;}
  .disp-col-center {
   /* display properties */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: baseline;
    align-items: baseline;
    align-content: center;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 95%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  td { width:24% }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

</style>


  


