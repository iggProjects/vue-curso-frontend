<template>
  <div class="ppalDiv">
    <p>WelcomeTest6 ✔</p>
    <h1>Grupo Frontend</h1>
    <div class="ppal">        
        <table class="center">   
          <tr><td><span style="color:blue;font-size:16px;">{{tutor.Nombre}}</span></td></tr>
          <tr><td><a v-bind:href="tutor.github_json" target="_blank"><span class="flecha">→</span> https://api.github.com/users/albertomozo <span class="flecha">←</span></a></td>		</tr>  
        </table>
        <table class="center">       
          <tr v-for="alumno in alumnos" :key="alumno">
              <td>{{alumno.Nombre}}</td>
          </tr>
        </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Test5',
  props: {
    alumnos: {
      type: Array
    },
    tutor: { 
      type:Array 
    }
  }
}
</script>

<style scoped>

    .ppalDiv { margin:20px; border: 1px solid rgb(219, 219, 219); padding: 10px;}
    .ppalDiv p { color:blue; font-size:11px; }    

    table { min-width:50%; margin-top:20px; margin-bottom: 20px;border: 2px solid rgb(110, 167, 252);}
    table.center { margin-left: auto;  margin-right: auto; }
	
	  td { font-size: 10px; }
    .td-right { text-align: right;}
    .td-left { text-align: left;}

/*
    .ulDiv table {
      font-family: arial, sans-serif;
      border-collapse: collapse;       
      margin-left: auto;  
      margin-right: auto;
      font-size:13px;
    }    
    .ulDiv table td{
        font-size: 13px;  
    }
*/    
    a {
    color: #024527;
    }
</style>