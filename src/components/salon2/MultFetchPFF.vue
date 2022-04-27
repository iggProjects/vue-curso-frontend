<template>
    <div class="ppal">
        <p class="welcomeP">MultFetchPFF.vue ✔</p>  
        <!-- <h1 style="font-size:14px;">{{ name }}</h1>  -->
        <div class="pff disp-row-center">

            <div class="projectsDiv" >
               <!--  <p>{{ name }}</p>  -->
                <button @click="fetchUrl('Proj',userRepos)" :key="userRepos">Projects</button> 
                <!-- <button @click="fetchUrl(Tutor.value.repos_url)">Projects</button> -->
                <div id="projects" v-if="projects_json">
                    <table class="center">
                        <tr v-for="(key,value) in projects_json" :key="key">
                            <td class="td-right" >{{value}}:</td>
                            <td class="td-left"><a :href="key.html_url" target="_blank">{{key.name}}</a></td>                            
                        </tr> 
                    </table>              
                </div>               
            </div>

            <div class="followersDiv" >
                <button @click="fetchUrl('Fers',userFollowers)" :key="userFollowers">Followers</button>
                <div id="projects" v-if="followers_json">
                    <table class="center">
                        <tr v-for="(key,value) in followers_json" :key="key">
                            <td class="td-right" >{{value}}:</td>
                            <td class="td-left"><a :href="key.html_url" target="_blank">{{key.login}}</a></td>
                        </tr> 
                    </table>              
                </div>               
            </div>

            <div class="followingDiv" >
                <button @click="fetchUrl('Fwing',userFollowing)" :key="user">Following</button> 
                <div id="projects" v-if="following_json">
                    <table class="center">
                        <tr v-for="(key,value) in following_json" :key="key">
                            <td class="td-right" >{{value}}:</td>
                            <td class="td-left"><a :href="key.html_url" target="_blank">{{key.login}}</a></td>
                        </tr> 
                    </table>              
                </div>               
            </div>


        <!--    
            <div class="followers"></div>
            <div class="following"></div>
        -->    
        </div>
    </div>
</template>

<script>

    export default ({
        name: 'MultFetchPFF',
        data() {
            return {        
                projects_json: null,
                followers_json: null,
                following_json: null
            };
        },
        props: { name: String, userRepos: String, userFollowers: String, userFollowing: String  },

        inject: ['Tutor', 'url_json_array'],

        methods: {
            fetchUrl(l,url_js) {                 
                console.log('type: ' + l + ', json url: ' + url_js)

                const requestOptions = {  // Simple GET request 
                    method: "GET",
                    headers: { "Content-Type": "application/json" }      
                };

                if ( l == 'Proj' ) { 

                    fetch(url_js, requestOptions)
                    .then(response => response.json())
                    .then(data => ( this.projects_json = data ));

                } else if ( l == 'Fers' ) {

                    fetch(url_js, requestOptions)
                    .then(response => response.json())
                    .then(data => ( this.followers_json = data ));

                } else {

                    url_js = url_js+'/following'    
                    fetch(url_js, requestOptions)
                    .then(response => response.json())
                    .then(data => ( this.following_json = data ));

                }
                
            }

        }      
    })


</script>


<style scoped>

    .ppal { margin:auto; margin-top:5px; width:98%;   }

    .welcomeP { font-size:10px; color:blue;} 

    .pff { width:98%; margin:5px;  padding:5px;}

    .disp-row-center {
        /* display properties */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
        align-content: center;
    }

    .projectsDiv, .followersDiv, .followingDiv { width:32%; min-height: 50px;    }

    .projectsDiv, .followersDiv, .followingDiv  p { color:blueviolet; font-size: 15px; margin-bottom:5px;}

    button { margin-top:10px; margin-bottom:5px;}

    /*.followers, .following { height: 200px; overflow-y:scroll; width:32%; border: 1px solid green; } */

    table { width: 90%;}
    table tr, th, td { border: 1px solid rgb(207, 207, 206); }

    table.center { margin-left: auto;  margin-right: auto; }
	
	td { font-size: 10px; }
    .td-right { text-align: right;}
    .td-left { text-align: left;}


    
</style>

