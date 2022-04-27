<!-- 
    https://stackblitz.com/edit/vue-y5hetf?file=src%2Fcomponents%2FHelloWorld.vue
    https://www.codegrepper.com/code-examples/javascript/array+promise+all+in+vue+js
    https://www.codegrepper.com/code-examples/javascript/frameworks/vue/promises+loop
    https://stackoverflow.com/questions/52669596/promise-all-with-axios

    https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all

    Estructura básica, ejemplo
    Promise.all(["array"]).then(function(values) {
      console.log(values);
    });   
-->

<template>
  
  <div id="ppal" class="disp-col-center">
    <p class="welcomeP">MultiplefetchView.vue ✔</p>  
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">

    <MultFetch msg="Welcome to Multiple Fetch"/>
    <!-- <MultFetch msg="Welcome to Your Vue.js App"/>  -->
  </div>

</template>

<script>
 
    import MultFetch from '../components/MultFetch.vue'
    import { ref, provide } from 'vue'

    import Miembros from '../assets/json/frontend_20200124.json'
    console.log('tutor: ' + Miembros.tutor.Nombre)

    export default {
      name: 'multipleFetch',
      components: {
          MultFetch
      },

      setup () {

          const Tutor = ref([])
          //const Alumno1 = ref([])
          // const Alumno2 = ref([])
          // const Alumno3 = ref([])  
          
          // console.log('Alumno1 before')
          // console.log(Alumno1)
          
          const fetchData = function () {
            Promise.all([  
                fetch(Miembros.tutor.github_json),
                // fetch(Miembros.alumnos[0].github_json),
                // fetch(Miembros.alumnos[1].github_json),
                // fetch(Miembros.alumnos[2].github_json)
            ])
            .then(async ([resTutor]) => {  
            //.then(async ([resTutor, resAlumno1, resAlumno2, resAlumno3]) => {  
                /* console.log(Tutor)  */           
                Tutor.value = await resTutor.json()
                // Alumno1.value = await resAlumno1.json()
                // Alumno2.value = await resAlumno2.json()           
                // Alumno3.value = await resAlumno3.json()                       
                // window.setTimeout(() => Tutor.value = [], 3000) // 3 seconds
            })
          }        
        
          fetchData()
          provide("Tutor", Tutor)
          // provide("Alumno1", Alumno1)
          // provide("Alumno2", Alumno2)       
          // provide("Alumno3", Alumno3)           

          // creating "ref" array of github_json of Miembros.alumnos 
          const github_json_array = ref([])        
        
          for ( var i=0; i<Miembros.alumnos.length; i++ ) {     
            github_json_array.value.push(Miembros.alumnos[i].github_json)          
            // github_json_array.value.push('fetch(Miembros.alumnos['+i+'].github_json)')          
          }

          console.log('json array: ')
          console.log(github_json_array.value)   
          console.log('json array value first element: ')
          console.log(github_json_array.value[0])   

          const requestOptions = {  // Simple GET request 
              method: "GET",
              headers: { "Content-Type": "application/json" }      
          };

          const url_json_array = ref([])

          // probar hacer el array sin el "fetch" y luego hacer el "fetch en el "
          Promise.all(github_json_array.value).then(function(values) {
            console.log('value: ' + values);
            for ( i in values ) { 
              console.log(values[i])
              fetch(values[i], requestOptions)        
              .then(response => response.json())            
              .then(data => (console.log(data), url_json_array.value.push(data)) )
              // .then(data => (this.TutorProjects = data))
              .catch(error => console.log( 'error: ' + error ) ) 
            }            
          });

          console.log('url_json_array')
          console.log(url_json_array)
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