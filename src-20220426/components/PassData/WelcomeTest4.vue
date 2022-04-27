<!--
login
id
name
bio
blog
avatar_url
created_at
updated_at
followers
following
url: https://api.github.com/users/albertomozo

repos= url + repos
following= url + /following
followers= url + /followers 
-->

<template>
  <div class="ppalDiv">
    <p>WelcomeTest4 ✔</p>
    <h1>Curso Frontend</h1>
    <div class="divTutor-res">        
        <table class="center">
            <tr><td class="f-sz-20"><b>Tutor: {{tutor.Nombre}}</b></td></tr>
        </table>
        <p><a v-bind:href="tutor.github_json" target="_blank"><span class="flecha">→</span> https://api.github.com/users/albertomozo <span class="flecha">←</span></a></p>		
    </div>
    <div class="divTutor-detail">                
        <table id="detail" class="center">
            <tr v-for="(key,value) in tutorJson" :key="key"><td class="td-right">{{value}}: </td><td class="td-left">{{key}}</td></tr>
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

    .f-sz-20 { font-size:20px; }

    .ppalDiv { margin-top:20px; border: 1px solid rgb(219, 219, 219); padding: 5px;}
    .ppalDiv p { color:blue; font-size:11px; }

    .divTutor-res { min-width: 50%; margin-top:5px; margin-bottom: 5px; padding:20px; color:blue; }
    .divTutor-detail { min-width: 70%; margin-top:5px; margin-bottom: 5px; padding:5px; }    
    .center { margin-left: auto;  margin-right: auto; }

    #detail { width: 90%; }
    
    #detail > tr,td { border: 1px solid rgb(206, 206, 207); }
	
	table tr,td { font-size:12px; height: 10px;}
    .td-right { text-align: right;}
    .td-left { text-align: left; color:blue;}


/*    
    .ulDiv table > th, td { padding:2px; }

    .ulDiv table td{
        font-size: 10px;
    }
*/

    a {
    color: #42b983;
    }
</style>