<!-- source: https://codesandbox.io/s/vue-fetch-http-post-request-examples-4i038?file=/app/PostRequest.vue -->

<template>
	<div class="jsonex">
		<p>JsonurlComp.vue ✔</p>
		<h2>Fetch URL Json</h2> 
        <p><a href="https://api.github.com/users/albertomozo" target="_blank"><span class="flecha">→</span> https://api.github.com/users/albertomozo <span class="flecha">←</span></a></p>		
		<table class="center">
			<tr v-for="(key,value) in myjson" :key="key"><td class="td-right">{{value}} -> </td><td class="td-left">{{key}}</td></tr>
		</table>        
	</div>
</template>

<script>

    export default {  
        name:"jsonurlex",
        data() {
            return {        
                myjson: null
            };
        },
        created() {    
            const requestOptions = {  // Simple GET request 
                method: "GET",
                headers: { "Content-Type": "application/json" }      
            };
            fetch("https://api.github.com/users/albertomozo", requestOptions) // "https://jsonplaceholder.typicode.com/posts"
            .then(response => response.json())
            .then(data => (this.myjson = data)); 
        }
    }



    /*
        async created() {
                // GET request using fetch with async/await
                const response = await fetch("https://api.github.com/users/albertomozo");
                const data = await response.json();
                this.result = data;
        }
    
        async created() {
            console.log('entrando')
            // this.result = this.error = null
            try {
                const response = await fetch("https://api.github.com/users/albertomozo")

                if (!response.ok) throw new Error("json not found")
                
                const data = await response.json()

                console.log(data)

                this.result = data

            } catch(error) {
                this.error = error
            } finally {
                // this.search = null
            }
        }
    */

 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.jsonex { width:90%; height: 400px; overflow: scroll; text-align: center; border: 2px solid rgb(154, 154, 248);}

	.jsonex p { margin-top:10px; color:blue; font-size:10px;}

    p a { color: rgb(249, 7, 225); font-size:12px;}

    .flecha { font-size: 16px;}

	h1, h2 { margin-top:2px; font-weight: normal; color:blue;	font-size:15px;}

    table { width:80%; margin-top:20px; margin-bottom: 20px; border: 2px solid gray;}
    table.center { margin-left: auto;  margin-right: auto; }

    table tr, th, td { border: 1px solid rgb(207, 207, 206); }
	
	td { font-size: 10px; }
    .td-right { text-align: right;}
    .td-left { text-align: left;}

	a { color: #42b983;}

</style>