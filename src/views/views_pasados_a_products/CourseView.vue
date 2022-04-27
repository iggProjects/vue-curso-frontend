<script setup>
  import WelcomeFriend from '../components/WelcomeFriend.vue'
  import DocumentationIcon from '../components/icons/IconDocumentation.vue'
  import ToolingIcon from '../components/icons/IconTooling.vue'
  import EcosystemIcon from '../components/icons/IconEcosystem.vue'
  import CommunityIcon from '../components/icons/IconCommunity.vue'
  import SupportIcon from '../components/icons/IconSupport.vue'
</script>

<template>
  
  <div class="about ">

    <h1>Here We Are</h1>
    
    <div class="team grid-container">

     <!-- https://api.github.com/users/ --> 
  
      <div  class="grid-item1">
      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>
        <template #heading>
          TUTOR
          <img src="https://avatars.githubusercontent.com/u/79279132?v=4" alt="Lamp" width="40" height="40">
          <img src="../assets/img/foto04.jpg" alt="Lamp" width="40" height="40">
        </template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>
      </div>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>11111</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend><template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon><DocumentationIcon /></template>  
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>

      <WelcomeFriend>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>22222</template>

        Vue’s
        <a target="_blank" href="https://vuejs.org/">official documentation</a>
        provides you with all information you need to get started.
      </WelcomeFriend>


    </div>  


  </div>
</template>

<style>

.about {
  margin:3px;   
  min-width:760px; 
/*  
  height:90vh;
  overflow-y: scroll; 
*/  
  border: 5px solid rgb(214, 213, 213);
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;   

} /* optional */

.about h1 { text-align: center; margin:auto; color:blue;}

.team {
  /* display properties */  
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
}

@media (min-width: 1024px) {
  .about {
    /* min-height: 90vh; */
    display: flex;
    align-items: center;
  }
}

/* definir grid -> https://www.w3schools.com/css/css_grid.asp  */
  
.grid-container {
    display: grid;
    grid-template-columns: auto auto;
    /* background-color: #2196F3; */
}

.grid-item1 { 
  
  height:auto;  
  grid-row: 1;
  grid-column: 1 / span 2;
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

  height: 100vh = 100% of the viewport height. Technically, this is true, 
  but a better way to think of it is = 100% of the available height. 
  If you are looking to fill up a div with the available height, 
  that's a mighty useful trick
  
  1px = 100vw / viewport's width (in px)
  ​
  function convertPXToVW(px) {
  return px * (100 / document. documentElement. clientWidth);
}

*/

</style>


<!--

<style>

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

</head>
<body>

   <div id="capa"></div>

   <div class="container">
    
       <header class="disp_center">
        <div id="barra">            
            <div id="menu">
                <nav>
                    <ul>
                        <li><a href="#cursos">cursos</a></li>
                        <li><a href="#front">frontend</a></li>
                        <li><a href="#cursos">contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div id="pageTitle"></div>            
            <div class="toggle-container">

                
                <button class="theme-btn light" onclick="setTheme('light')" title="Light mode">Light
                <span class="material-icons">light_mode</span>
                </button>

                <button class="theme-btn dark" onclick="setTheme('dark')" title="Dark mode">Dark
                <span class="material-icons">dark_mode</span>                
                </button>

            </div>
        </div>
        
      </header>
         
      <h2>Tutor</h2>
      <section id="profesor" class="disp_center"></section>

      <h2>Alumnos</h2>
      <section id="alumnos" class="disp_center"></section>        
        
      <div id="txt1"></div>
    
       
<script>

    //  function setTheme
    const setTheme = theme => document.documentElement.className = theme;

    let talumnos ='';
    let person_avatar='';
    let projects_alumno='';  
    let projects_following='';
    let projects_followers='';

    // read json
    fetch("frontend_20200124.json")
        .then(response => {
          if (response.ok)
            return response.text()
          else
            throw new Error(response.status);
        })
        .then(data => {           

            const clase=JSON.parse(data);           

            // datos curso a h1
            document.getElementById("pageTitle").innerHTML=`${clase.curso} ${clase.fecha_inicio}`;

            // datos profesor a #profesor
            document.querySelector('#profesor').innerHTML=` ${ficha_persona(clase.tutor)}`;

            for (const alumno of clase.alumnos) {
              talumnos += '<article class="disp_center">';
              talumnos += ficha_persona(alumno);
              talumnos += evolucion(alumno);           

              // OJO con la asincronía !!!
              talumnos += gitHubPersonJson(alumno.Nombre,alumno.github_json);

              talumnos += '</article>';
            }

            document.querySelector('#alumnos').innerHTML=talumnos;

        })
        .catch(err => {
          console.error("Desde frontend_20200124.json, ERROR: ", err.message)

    });

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

      

</script>         
   
       
</div> 
</body>








-->