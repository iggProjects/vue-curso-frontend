<script setup>
  import WelcomeAlumno from './salon1/WelcomeAlumno.vue'
  import WelcomeTutor from './salon1/WelcomeTutor.vue'
  // import Test4 from '../components/WelcomeTest4.vue'
  import TutorGhjson from './salon1/WelcomeTutorghjson.vue'
  // import TutorGhProjects from '../components/WelcomeTutorGhubProjects.vue'
  // import TutorGhProjects from '../components/WelcomeTutorGhubProjects.vue'
  /* import GithubIcon from './icons/IconGithub.vue' */
  /* import AvatarIcon from './icons/IconAvatar.vue' */
</script>

<template>
	<div class="div-salon disp-col-center">
		<p>WelcomeSalon.vue ✔</p>
		<h2>CURSO FRONT END</h2>

    <div class="grid-container">

      <div class="grid-item1 disp-col-center">        
        
        <WelcomeTutor> 
        
        <!--  SUSTITUÍ ICON POR IMG
          <template #icon><AvatarIcon /></template>
        -->
        
          <template #heading>
            <img v-bind:src="Tutor.github_avatar" target="_blank" width="80" height="80" style="border-radius: 15px;">            
            <h3>Tutor</h3>           
          </template>   
                 
          <table class="tableT">
            <tr v-for="(key,val) in Tutor" :key="key">
              <td class="td-right" v-if="val === 'linked' || val === 'github'">{{ val }}:</td>
              <td class="td-left" v-if="val === 'linked' || val === 'github'"><a v-bind:href="key" target="_blank">{{ key }}</a></td>  
              <td class="td-right" v-if="val === 'Nombre' || val === 'email'">{{ val }}:</td>
              <td class="td-left" v-if="val === 'Nombre' || val === 'email'">{{ key }}</td>              
            </tr>
          </table>

          <TutorGhjson v-bind:Tutor="Tutor" />
         <!--  <TutorGhProjects v-bind:Tutor="Tutor"/>  -->            
        
        </WelcomeTutor>
      </div>      

      <div class="div-alumno" v-for="alumno in Alumnos" :key="alumno">
        <!-- <img v-bind:src="alumno.avatar_url" :alt="alumno.login" class="avatar"> -->
        
        <WelcomeAlumno>

          <template #heading>            
            Alumno
          </template>

          <table class="tableAl">
            <tr v-for="(key,val) in alumno" :key="key">
              <td class="td-right" v-if="val === 'linked' || val === 'github' || val === 'github_json' || val === 'github_avatar'">{{ val }}:</td>
              <td class="td-left" v-if="val === 'linked' || val === 'github' || val === 'github_json' || val === 'github_avatar'"><a v-bind:href="key" target="_blank">{{ key }}</a></td>  
              <td class="td-right" v-if="val === 'Nombre' || val === 'email'">{{ val }}:</td>
              <td class="td-left" v-if="val === 'Nombre' || val === 'email'">{{ key }}</td>
            </tr>
          </table>
        <!--
          <AlumnoGhjson v-bind:Alumno="Alumno" />
        -->
        </WelcomeAlumno>

      </div>

    </div>
	</div>
</template>

<script>

	import Elementos from '../assets/json/frontend_20200124.json'

	export default {
		name:'salon',
    components: {      
      TutorGhjson      
    },
		data () {
			return {        
        Tutor: Elementos.tutor,
				Alumnos: Elementos.alumnos				
			}
		},    

    created(){ 
      console.log('tutor: ' + Elementos.tutor.github_json)
    },
    methods:{
      
    }
	}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.div-salon {
    margin:auto;    
    width:95%;  
    /* border:2px solid rgb(5, 73, 2);  */

    /* display properties */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

	.div-salon p { color:blue; font-size:10px;}

	.div-salon h1, h2, h3 { font-weight: normal; color:blue;	text-align: center;}

  .div-alumno { border:1px solid gray; margin:5px;}
  .div-alumno p { font-size:12px; }

  .tableT, .tableAl {
        font-family: arial, sans-serif;
        border-collapse: collapse;       
        margin-left: auto;  
        margin-right: auto;        
        font-size:12px;        
  }
.tableAl { width:250px; } 


  .tableT { margin-bottom:10px; }

  .tableT { width:600px; }

  .tableT, .tableAl > th, td {
        /* border: 1px solid rgb(223, 221, 221); */
        text-align: center;
        padding: 2px;
  }  

  /*
  .tableT tr:nth-child(even) {
       background-color: rgb(223, 221, 221);
       color:blue;       
  }
  */

  .tableAl tr:nth-child(even) {
       /* background-color: rgb(223, 221, 221); */
       color:blue; 
  }

.td-right { text-align: right;}
.td-left { text-align: left;}

.dis-row-center {
    /* display properties */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.disp-col-center {
   /* display properties */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;   
}

.avatar {
  height: 50px;
  width:50px;
  /* height: 4rem;  */
  margin: 0.3rem;
  border:1px solid rgb(202, 201, 201);
}

  /* definir grid -> https://www.w3schools.com/css/css_grid.asp  */
    
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  width:97%;
  margin:0;
  /* border:2px solid rgb(231, 12, 12); */ 
  /* background-color: #2196F3; */
}

.grid-item1 {       
  height:auto; 
  width:97%; 
  grid-row: 1;
  grid-column: 1 / span 2;  
  margin-bottom:15px;
  /* border:2px solid rgb(2, 105, 12); margin:5px; */
}

/*
.grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
}   
*/

/*
	ul { list-style-type: none; padding: 5px; }

	li {  margin: 0 10px; }
*/
	a { color:#4394fd;}

</style>  

<!--
<script>


    //  function setTheme
    // const setTheme = theme => document.documentElement.className = theme;

    let talumnos ='';
    let person_avatar='';
    let projects_alumno='';  
    let projects_following='';
    let projects_followers='';

    // read json

    import elementos from '../assets/json/frontend_20200124'

    export default {
      name: 'jsonex',
      data () {
        return {
          Curso: elementos.curso,
          Fec_Inicio: elementos.fecha_inicio,
          Alumnos: elementos.alumnos,
          Tutor: elementos.tutor
        }
      },
    }  




/*     
          // datos curso a h1
          // document.getElementById("pageTitle").innerHTML=`${Curso} ${Fec_Inicio}`;

          // datos profesor a #profesor
          // document.querySelector('#profesor').innerHTML=` ${ficha_persona(Tutor)}`;

          for (const alumno of Alumnos) {
            talumnos += '<article class="disp_center">';
            talumnos += ficha_persona(alumno);
            talumnos += evolucion(alumno);           

            // OJO con la asincronía !!!
            talumnos += gitHubPersonJson(alumno.Nombre,alumno.github_json);

            talumnos += '</article>';
          }

          document.querySelector('#alumnos').innerHTML=talumnos;  
          
      },    

      function ficha_persona (persona){
        ficha = `
          <ul>
            <li id="liName"><b>${persona.Nombre}</b></li>        
            <li>&nbsp;</li>
            <li>
              <div id="rel_icons">
                <a href="${persona.email}" target="_blank">Email<img src="assets/icons/mail-icon.svg" width="20px"></a>
                <a href="${persona.linked}" target="_blank">Linked<img src="assets/icons/linkedin-brands.svg" width="20px"></a>
                <a href="${persona.github}" target="_blank">Github Page<img src="assets/icons/github-brands.svg" width="20px"></a>         
                <a href="${persona.github_json}" target="_blank">Github Json<img src="assets/icons/github-brands.svg" width="20px"></a>               
              </div>
            </li>
          </ul>
          `;
        
          return ficha;      
      }

      function evolucion(pers) {
        
        let evolucion = '<div class="gh-json-alumno"><table><tr><th>Materia</th><th>Inicio</th><th>Fin</th></tr>';    
        
        for ( let i in pers.inicio, pers.fin ) {
          // console.log ('persona inicio ' + i + ': ' + pers.inicio[i] + ' | persona fin ' + i + ': ' + pers.fin[i]);     
          evolucion += `<tr><td>${i}</td><td>${estrellas(pers.inicio[i])}</td><td>${estrellas(pers.fin[i])}</td></tr>`;    
        }     
        
        evolucion +='</table></div>';
        evolucion +="<div class='gh-json-projects'><table id='projects-"+ pers.Nombre + "'><tr><th>Projetcs Alumno</th></tr></table></div>";
        evolucion +="<div class='gh-json-foll'><table id='following-"+ pers.Nombre + "'><tr><th>Following</th></tr></table></div>";
        evolucion +="<div class='gh-json-foll'><table id='followers-"+ pers.Nombre + "'><tr><th>Followers</th></tr></table></div>";

        return evolucion;

      }

      function estrellas(n){
            texto = '';
            for (i=1;i<=n;i++){ texto += '*';}
            return texto;
      }

      function gitHubPersonJson(Name,json_gh){  

        console.log('name ' + Name + ' json ' + json_gh );
        fetch(json_gh)
          .then(response => {
            if (response.ok)
              return response.text()
            else
              throw new Error(response.status);
          })

          .then(data => {

              const json_person = JSON.parse(data);
              // console.log("JSON Person Reposit-> " + json_person.repos_url);
              person_avatar= json_person.avatar_url;  
              gitHubPersonProjects(Name,json_person);     

          })

          .catch(err => {
            console.error("Desde function gitHubPersonJson, ERROR: ", err.message)

        });    

      }  

      function gitHubPersonProjects(_name,_json){    
            
          // console.log('name: ' + _name + ', json: ' + _json.respo_url);
          fetch(_json.repos_url)

          .then(response => {
            if (response.ok)
              return response.text()
            else
              throw new Error(response.status);
          })

          .then(data => {

              const json_person_projects = JSON.parse(data);
              // console.log("JSON Person Projects-> " + _name + ':  '+ json_person_projects);

              projects_alumno = '<tr><th>Proyectos en Git Hub</th></tr>'; 
              for ( let project in json_person_projects ) { 
                console.log("JSON Project Name -> " + json_person_projects[project].name); 
                projects_alumno += "<tr><td><a href='"+ json_person_projects[project].html_url + "' target='_blank'>"+json_person_projects[project].name+"</a></td></tr>";
              }           

              var proj_name = "projects-"+_name;            
              document.getElementById(proj_name).innerHTML = projects_alumno;  
              
              gitHubPersonFollowing(_name,_json);
              gitHubPersonFollowers(_name,_json)

          })

          .catch(err => {
            console.error("Desde gitHubPersonProjects, ERROR: ", err.message)

          });
          
        }
        
        function gitHubPersonFollowing(_Name,_Json){        

          var following_url = _Json.url + '/following';
          // console.log('name: ' + _Name + ', following-> ' + following_url);
            
            fetch(following_url)
    
            .then(response => {
              if (response.ok)
                return response.text()
              else
                throw new Error(response.status);
            })
    
            .then(data => {
    
                const json_person_following = JSON.parse(data);
                // console.log("name -> " + _Name + ':  ' + json_person_following);
    
                following_alumno = "<tr><th>Folowing in Git Hub</th></tr>";  
                for ( let follow_login in json_person_following ) {                   
                  following_alumno += "<tr><td><a href='"+ json_person_following[follow_login].html_url + "' target='_blank'>"+json_person_following[follow_login].login+"</a></td></tr>";              
                }            
    
                var following = "following-"+_Name;              
                document.getElementById(following).innerHTML = following_alumno;                
    
            })
    
            .catch(err => {
              console.error("Desde gitHubPersonFollowing, ERROR: ", err.message)
    
            });
              
        }

        
        function gitHubPersonFollowers(_Name,_Json){        

          var followers_url = _Json.url + '/followers';
          // console.log('name: ' + _Name + ', followers-> ' + followers_url);
          
          fetch(followers_url)

          .then(response => {
            if (response.ok)
              return response.text()
            else
              throw new Error(response.status);
          })

          .then(data => {

              const json_person_followers = JSON.parse(data);
              //console.log("name -> " + _Name + ':  ' + json_person_followers);

              followers_alumno = "<tr><th>Followers in Git Hub</th></tr>";
              for ( let follow_login in json_person_followers ) { 
                followers_alumno += "<tr><td><a href='"+ json_person_followers[follow_login].html_url + "' target='_blank'>"+json_person_followers[follow_login].login+"</a></td></tr>";            
              }            
              var followers = "followers-"+_Name;
              document.getElementById(followers).innerHTML = followers_alumno;  

          })

          .catch(err => {
            console.error("Desde gitHubPersonFollowers, ERROR: ", err.message)
          });
      
        }

      
*/
  
    

      

</script>       

<style scoped>

    /*
      .jsonex { width:760px; text-align: center;}
      .jsonex p { color:blue; font-size:10px;}
      h1, h2 { font-weight: normal; color:blue;	}
      ul { list-style-type: none; padding: 5px; }
      li {  margin: 0 10px; }
      a { color: #42b983;}
    */


    .container { width:760px; text-align: center; border: 5px solid rgb(214, 213, 213); padding:3px; overflow-y: scroll; height:95vh;}    
    .container p { color:blue; font-size:10px; }
    .container h1, h2 { font-weight: normal; color:blue;	}

    table { border-top: 5px solid rgb(175, 177, 174);}  

    .gh-json-alumno { width:80%; max-height: 250px; margin-top:10px; margin-bottom:10px; overflow-y: auto; font-size: 13px; color:blue;}
    .gh-json-projects { width:80%; max-height: 250px; margin: 10px; overflow-y: auto; font-size: 13px; color:blue;}
    .gh-json-foll { width:40%; max-height: 250px; margin:10px; overflow-y: auto; font-size: 13px; color:blue;}

    div.gh-json-projects th { background-color: rgb(214, 182, 243); font-size: 15px; ; color:rgb(30, 3, 182);}

    /* SCROLL BAR CSS - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar2 */ 

    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 15px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgb(157, 157, 253); 
    border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #fa8f8f; 
    }

</style>   


-->