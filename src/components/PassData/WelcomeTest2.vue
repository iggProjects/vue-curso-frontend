<template>
  <div>
    <h1>Vue Top 10 Artists (Country)</h1>
    <div class="ulDiv">
        <table>
        <tr v-for="(artist, x) in artists" :key="x">
        <td>{{artist.name}}&nbsp;&nbsp;<span><b>from</b></span>&nbsp;&nbsp;{{artist.country}}</td>
        </tr>
        </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Test2',
  props: {
    artists: {
      type: String
    }
  }
}
</script>

<style scoped>
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
    .ulDiv table td{ font-size: 13px;  }
    span { color:blue;}
    a { color: #42b983; }

</style>