<!-- 
    https://stackblitz.com/edit/vue-y5hetf?file=src%2Fcomponents%2FHelloWorld.vue
    https://www.codegrepper.com/code-examples/javascript/array+promise+all+in+vue+js
    https://www.codegrepper.com/code-examples/javascript/frameworks/vue/promises+loop
    https://stackoverflow.com/questions/52669596/promise-all-with-axios

    https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all
-->

<template>
  
  <div id="ppal" class="disp-col-center">
    <p class="welcomeP">MultiplefetchView.vue ✔</p>  
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
        
    <MultFetch msg="Welcome to Multiple Fetch" />   
  </div>

</template>

<script>
 
    import MultFetch from '../components/MultFetch.vue'

    import { ref, provide } from 'vue'

    import Miembros from '../assets/json/frontend_20200124.json'    
    // import { objectToString } from '@vue/shared'

    export default {

        name: 'multipleFetch',
        components: {
            MultFetch
        },
        props: {        
          msg: String        
        },



        setup () {

            const Tutor = ref([])

            const fetchData = function () {
              Promise.all([  
                  fetch(Miembros.tutor.github_json),
              ])
              .then(async ([resTutor]) => {             
                  Tutor.value = await resTutor.json()
                  // window.setTimeout(() => Tutor.value = [], 3000) // 3 seconds
              })
            }        
                     
            fetchData()
            provide("Tutor", Tutor)

          /*           
            console.log('TUTOR')
            console.log(Tutor)
            console.log(Object.entries(Tutor))
            console.log('Tutor.value')
            console.log(Tutor.value)
          */
  
            // creating "ref" array of github_json of Miembros.alumnos 
            const github_json_array = ref([])        
          
            for ( var i=0; i<Miembros.alumnos.length; i++ ) {     
              github_json_array.value.push([i,Miembros.alumnos[i].github_json]) 
            }
            /*
              console.log('json array: '); console.log(github_json_array.value); console.log('json array value first element: '); console.log(github_json_array.value[0])   
            */  
            const requestOptions = {  // Simple GET request 
                method: "GET",
                headers: { "Content-Type": "application/json" }      
            };

            console.log('Alumnos github json initial array: '); console.log(github_json_array.value)
            
            const url_json_array = ref([])            
            var array_json=[]
            array_json.push('hola')

            Promise.all(github_json_array.value).then(function(values) {              
              
              for ( i in values ) {
                  console.log('values: ' + values[i])
                  fetch(values[i][1], requestOptions)        
                  .then(response => response.json())            
                  .then(data => (
                    console.log('data: '), 
                    console.log(data), 
                    array_json.push(data), 
                    url_json_array.value.push(data) 
                  ))              
                  .catch(error => console.log( 'error: ' + error ) )               
              }   

            });

            console.log('ARRAY-> ' + typeof array_json + ' - ' + Object.entries(array_json))
            for ( let [key, value] of Object.entries(array_json)) {
               console.log(`${key}: ${value}`);        
            }

            // ver naturaleza de la data que sale del Promise
            console.log('url_json_array')
            console.log(url_json_array)
            console.log('type: ' + typeof url_json_array + 'entries ↓↓')
            console.log( Object.entries(url_json_array) )
            console.log('loop Object.entries ↓↓↓')
            for ( let [key, value] of Object.entries(url_json_array)) {
               console.log(`${key}: ${value}`);        
            }
          /*
            console.log('probando loop in url_json_array')
            for ( let key in url_json_array) {
               console.log(`${key}: ${url_json_array.value.key}`);  
               for ( let k in url_json_array.value.key ) { 
                 console.log(`${k}: ${url_json_array.value.key.k}`);  
               }       
            }
          */

            provide('url_json_array',url_json_array)

        }
    }

</script>

<style scoped>
  #ppal .welcomeP { margin-bottom: 0px; color:blue; font-size: 10px; text-align:center;}
  
  #ppal { 
    width:760px;
    height: 80vh;
    overflow-y: scroll;
    text-align: center;
    border:3px solid rgb(168, 168, 252);
    margin-left:10px;    
    margin-bottom:5px;
    margin-top:3px;        
  }

  #ppal img { margin-top:0px; width: 30px; }
  .disp-col-center {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: baseline;
    align-items: center;
    align-content: flex-start; 
  }

</style>