<template>
  <div class="ppalDiv">
    <p>WelcomeTest5 ✔</p>
    <h1>Grupo Frontend</h1>
    <div class="ulDiv">        
        <table>   
          <tr>
              <td><span style="color:blue;font-size:16px;">{{tutor.Nombre}}</span></td>
          </tr>       
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

    .ppalDiv { border: 1px solid rgb(219, 219, 219); padding: 10px;}
    .ppalDiv p { color:blue; font-size:11px; }

    .ulDiv{
        text-align:center;
        border:2px solid gray;
        margin:auto;
        width:80%;
    }

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
    a {
    color: #42b983;
    }
</style>