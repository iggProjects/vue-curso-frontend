<!-- 
    https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
    https://stackblitz.com/edit/vue-y5hetf -> Promise.all
-->

<template>
   
  <p class="welcomeP">WelcomeTutorDetail ✔</p>
  <div id="ppal" class="ppalDiv disp-row-center">         

        <div class="div-detail">      
            <p>PROJECTS</p>          
            <table id="table1-detail" class="center" v-if="TutorProjects!=null">                  
                <!-- <tr><td>GH Web Page</td><td><a v-bind:href="TutorProjects[0].html_url" target="_blank">{{ TutorProjects[0].html_url }}</a></td></tr> -->
                <tr v-for="(key,value) in TutorProjects" :key="key"><td class="td-right">{{value + 1}}: </td><td class="td-left"><a :href="key.html_url" target="_blank">{{key.name}}</a></td></tr>
                <!-- <tr v-for="(key,value) in TutorJson" :key="key"><td class="td-right">{{value}}: </td><td class="td-left">{{key}}</td></tr> -->
                <!-- <tr v-for="(key,value) in TutorProjects" :key="key"><td class="td-right">{{value}}: </td><td class="td-left">{{key}}</td></tr> -->
            </table>        
        </div>

        <div class="div-detail">       
            <p>FOLLOWERS</p>     
            <table id="table2-detail" class="center" v-if="TutorFollowers!=null">
                <tr v-for="(key,value) in TutorFollowers" :key="key"><td class="td-right">{{value + 1}}: </td><td class="td-left"><a :href="key.html_url" target="_blank">{{key.login}}</a></td></tr>             
            </table>        
        </div>

        <div class="div-detail">
            <p>FOLLOWING</p>
            <table id="table3-detail" class="center" v-if="TutorFollowing!=null">                                                   
                <tr v-for="(key,value) in TutorFollowing" :key="key"><td class="td-right">{{value + 1}}: </td><td class="td-left"><a :href="key.html_url" target="_blank">{{key.login}}</a></td></tr>
            </table>        
        </div>

  </div>

<!--
<div class="disp-row-center">
    <div><Tutorprojects v-bind:TutorProjects="TutorProjects"/></div>
    <div><TutorFollowers v-bind:TutorProjects="TutorProjects"/></div>
    <div><TutorFollowing v-bind:TutorProjects="TutorProjects"/></div>
</div>
-->

</template>

<script>

// import { ref, provide } from 'vue'
 
export default {  
    name: 'TutorGhProjects',
    
    data() {
        return {         
            TutorProjects: null,
            TutorFollowers: null,
            TutorFollowing: null
        };
    },
  
    props: {
        Tutor: { type: Array },
        TutorJson: { type: Array }        
    },  
       
    // inject: ['TutorJson'],    

    async created() {           
        
        console.log('projects, followers, following ✔')    
        
        console.log('Entré al fecth con método GET: TutorJson.repos_url')
    
        console.log('repos_url ↓↓↓')  
        console.log(this.TutorJson.repos_url)  

        const requestOptions = {  // Simple GET request 
            method: "GET",
            headers: { "Content-Type": "application/json" }      
        };  
 
        fetch(this.TutorJson.repos_url, requestOptions)        
        .then(response => response.json())            
        .then(data => (this.TutorProjects = data))
        .catch(error => console.log( 'error: ' + error ) ) 
 
        fetch(this.TutorJson.followers_url, requestOptions)        
        .then(response => response.json())            
        .then(data => (this.TutorFollowers = data))
        .catch(error => console.log( 'error: ' + error ) ) 
 
        const following=this.TutorJson.url + '/following' 
        fetch(following, requestOptions)        
        .then(response => response.json())            
        .then(data => (this.TutorFollowing = data))
        .catch(error => console.log( 'error: ' + error ) ) 

        console.log('Projects: ' + this.TutorProjects)
        console.log('Followers: ' + this.TutorFollowers)
        console.log('Following: ' + this.TutorFollowing)        
    

    /*
        console.log('Entré al fecth con opción Promise')

        const TutorProjects = ref([])
        const TutorFollowers = ref([])
        const TutorFollowing = ref([])                    

        const fetchData = function () {

          Promise.all([  
              fetch(this.TutorJson.repos_url),
              fetch(this.TutorJson.followers_url),
              fetch(this.TutorJson.following_url)            
          ])

          .then(async ([resProjects, resFollowers, resFollowing]) => {
              TutorProjects.value = await resProjects.json(),
              TutorFollowers.value = await resFollowers.json(),
              TutorFollowing.value = await resFollowing.json()            
              // window.setTimeout(() => Tutor.value = [], 3000) // 3 seconds
          })

        }

        fetchData()

        provide("TutorProjects", TutorProjects)
        provide("TutorFollowers", TutorFollowers)
        provide("TutorFollowing", TutorFollowing)     
*/        
          
    },

/*
    async created() {
        try {
            console.log('Entré al fecth con 'response.ok' TutorJson.repos_url')
            const response = fetch(this.TutorJson.repos_url)
            if (!response.ok) throw new Error("TutorJson repos_url not found")
            const data = await response.json()
            console.log(data)
            this.TutorProjects = data
            } catch(error) {
            this.error = error
            } finally {
            // this.search = null
            }    
    },
*/


    methods: {
        
    }
}

</script>

<style scoped>

    .welcomeP { color:blue; font-size: 10px; text-align: center; }

    .f-sz-20 { font-size:20px; }

    #ppal { 
        width: 95%;
    }
    .ppalDiv { height: 150px; overflow-y: scroll; padding: 10px; margin-top:20px; margin-bottom:20px; border: 1px solid rgb(188, 251, 162); }
    .ppalDiv p { color:blue; font-size:11px; text-align: center; margin: 1px;}

    .disp-row-center {
        /* display properties */
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: baseline;
        align-content: flex-start;
    }
    .div-detail { width: 32%; margin-top:5px; margin-bottom: 5px; border:1px solid rgb(152, 152, 152)}  
    
    .div-detail h3 { font-size: 14px; color: rgb(2, 73, 2); text-align: center; }
    .center { margin-left: auto;  margin-right: auto; }

    #table1-detail, #table2-detail, #table3-detail { width: auto; margin-top:5px; padding-top:2px;}    
    
    /* #table1-detail, #table2-detail, #table3-detail > tr,td { width: auto; border: 1px solid rgb(206, 206, 207); } */
	
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