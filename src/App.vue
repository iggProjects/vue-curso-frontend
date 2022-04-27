<script setup>

  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
  <header>       
    <div class="wrapper">
      
      <p>App.vue ✔</p>
      <div><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" /></div>
      
      <HelloWorld msg="Areafor" />
      
      <nav>
        <p>App.vue ✔</p>
        <RouterLink to="/">Home</RouterLink>
       <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/products">Products</RouterLink>  
        <RouterLink to="/salon1">Frontend vers 1</RouterLink>
        <RouterLink to="/salon2">Frontend vers 2<span style="font-size:12px;color:blue;">&nbsp;(PromiseAll)</span></RouterLink>       

<!--
        <RouterLink to="/passData">Pass data child's</RouterLink>
        <RouterLink to="/DragDrop">Drag and Drop</RouterLink>
        <RouterLink to="/salon">Frontend team</RouterLink>
        <RouterLink to="/about">About Team</RouterLink>
        <RouterLink to="/course">Course Team</RouterLink>
        <RouterLink to="/githubsearch">Search User in GH</RouterLink>
        <RouterLink to="/carouseluno">Carousel Uno</RouterLink>
        <RouterLink to="/prueba">HTML genérico w3s</RouterLink>
        <RouterLink to="/jsonex">Read Local Json</RouterLink>
        <RouterLink to="/jsonurlex">Fetch URL Json</RouterLink>
--> 

        <RouterLink to="/htmlcssjs">HTLM-CSS-JS</RouterLink>

      </nav>

    </div>    
  </header>

  <RouterView />  

</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  /* min-height: 90vh; */
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  /* border:3px solid rgb(36, 36, 252); */
}

header {  
  line-height: 1.5;
  min-width:300px;
  max-height: 100vh;
  /* border:1px solid; */
}

.wrapper { 
    width:95%;
    padding-left:10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.wrapper p { margin-top:0px; font-size:10px; color:blue; }

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a, .green {
  text-decoration: none;
  color: rgb(0, 160, 107);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  /* border:1px solid green; */
}

nav p { font-size:10px; color:blue;} 

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  /* display: inline-block; */
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {    
    display: flex;
    place-items: center;
  }

  #app {
    /*  
      OJO GRID en dos bloques. valor orig: grid-template-columns: 1fr 1fr;
        https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-column
    */ 
    
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 0rem 1rem;
    
  }

  header {
    width:90%;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 5);
    /* padding-right: calc(var(--section-gap) / 2); */
    /* border:1px solid rgb(78, 195, 254); */
  }

  header .wrapper {
    display: flex;    
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .wrapper { 
    width:95%;
    border:1px solid rgb(78, 195, 254); 
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  /*  ojo margin-left orig: margin-left: -1rem; */ 
  nav {
    text-align: left;
    margin: auto;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
