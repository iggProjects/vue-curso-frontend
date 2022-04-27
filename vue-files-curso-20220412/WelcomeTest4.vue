<template>
  <div class="ppalDiv">
    <p>WelcomeTest4 ✔</p>
    <h1>Tutor Frontend</h1>
    <div class="ulDiv">        
        <table>
            <tr><td><b>{{tutor.Nombre}}</b></td></tr>
        </table>
    </div>
    <div class="jsonex">
        
        <p><a v-bind:href="tutor.github_json" target="_blank"><span class="flecha">→</span> https://api.github.com/users/albertomozo <span class="flecha">←</span></a></p>		
        <!-- <p><a href="https://api.github.com/users/albertomozo" target="_blank"><span class="flecha">→</span> https://api.github.com/users/albertomozo <span class="flecha">←</span></a></p>	-->	
        <table class="center">
            <tr v-for="(key,value) in tutorJson" :key="key"><td class="td-right">{{value}} -> </td><td class="td-left">{{key}}</td></tr>
        </table>        
	</div>
  </div>
</template>
<script>
export default {
    name: 'Test4',

    data() {
        return {        
            tutorJson: null
        };
    },

    props: {
        tutor: { type: Array }        
    },

    created() {           
        const requestOptions = {  // Simple GET request 
            method: "GET",
            headers: { "Content-Type": "application/json" }      
        };
        fetch(this.tutor.github_json, requestOptions)            
       // fetch("https://api.github.com/users/albertomozo", requestOptions) // "https://jsonplaceholder.typicode.com/posts"   
        .then(response => response.json())
        .then(data => (this.tutorJson = data)); 
    }
/*
    methods: {
        imprime_tutor(json_url){
            const requestOptions = {  // Simple GET request 
            method: "GET",
            headers: { "Content-Type": "application/json" }      
            };              
            fetch(json_url, requestOptions)
            .then(response => response.json())
            .then(data => (this.tutorJson = data));                            
        }
    }
*/        
}

</script>

<style scoped>

    .ppalDiv { border: 1px solid rgb(219, 219, 219); padding: 10px;}
    .ppalDiv p { color:blue; font-size:11px; }

    .ulDiv{
        text-align:center;        
        margin:auto;
        width:80%;
    }
    .ulDiv table {
      font-family: arial, sans-serif;
      border-collapse: collapse;       
      margin-left: auto;  
      margin-right: auto;      
    }    
    .ulDiv table > th, td { padding:2px; }

    .ulDiv table td{
        font-size: 10px;
    }
    a {
    color: #42b983;
    }
</style>