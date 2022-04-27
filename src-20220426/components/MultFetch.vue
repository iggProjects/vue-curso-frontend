<template>
  <div id="ppalMultiFetch" class="disp-col-center">

    <p class="welcomeP">MultFetch.vue ✔</p>  
    <h1>{{ msg }}</h1>
  
    <!-- Tutor Info -->
    <div class="jsonTable">
      <h4>{{ Tutor.value.login }}</h4>
      <table class="center">
          <tr><td class="td-right">github name:&nbsp;&nbsp;</td><td class="td-left">{{ Tutor.value.name  }} - {{ Tutor.value.login }}</td></tr>  
          <tr><td class="td-right">web page:&nbsp;&nbsp;</td><td class="td-left"><a :href="Tutor.value.html_url" target="_blank">{{ Tutor.value.html_url}}</a></td></tr>  
          <tr><td class="td-right">blog:&nbsp;&nbsp;</td><td class="td-left"><a :href="Tutor.value.blog" target="_blank">{{ Tutor.value.blog}}</a></td></tr>  
          <tr><td class="td-right">email:&nbsp;&nbsp;</td><td class="td-left"><a :href="Tutor.value.email" target="_blank">{{ Tutor.value.email}}</a></td></tr>            
          <tr><td class="td-right">github followers:&nbsp;&nbsp;</td><td class="td-left">{{ Tutor.value.followers }}</td></tr>            
          <tr><td class="td-right">github following:&nbsp;&nbsp;</td><td class="td-left">{{ Tutor.value.following }}</td></tr>            
          <tr><td class="td-right">twitter_username:&nbsp;&nbsp;</td><td class="td-left">{{ Tutor.value.twitter_name }}</td></tr>                      
          <tr><td class="td-right">created_at:&nbsp;&nbsp;</td><td class="td-left">{{ dateTime(Tutor.value.created_at) }}</td></tr>  
          <tr><td class="td-right">updated_at:&nbsp;&nbsp;</td><td class="td-left">{{ dateTime(Tutor.value.updated_at) }}</td></tr>  

       <!-- only first 15   
        <tr v-for="(k,v,i) in Tutor.value" :key="k">
          <td v-if="i<15">{{i}}</td><td v-if="i<15" class="td-right">{{v}}: </td><td v-if="i<15" class="td-left">{{k}}</td>  
        </tr>S
      -->  
      </table>

      <MultFetchPFF v-bind:name="Tutor.value.login" v-bind:userRepos="Tutor.value.repos_url" v-bind:userFollowers="Tutor.value.followers_url" v-bind:userFollowing="Tutor.value.url"  />

    </div>  

    <!--  create loop for "alumnos" div's  -->
    <div v-for="k1 in url_json_array.value" :key="k1" class="jsonTable disp-col-center">
      <h4>{{ k1.login }}</h4>        
      <table class="center">
          <tr><td class="td-right">github name:&nbsp;&nbsp;</td><td class="td-left">{{ k1.name}} - {{ k1.login }}</td></tr>  
          <tr><td class="td-right">web page:&nbsp;&nbsp;</td><td class="td-left"><a :href="k1.html_url" target="_blank">{{ k1.html_url}}</a></td></tr>  
          <tr><td class="td-right">blog:&nbsp;&nbsp;</td><td class="td-left"><a :href="k1.blog" target="_blank">{{ k1.blog}}</a></td></tr>  
          <tr><td class="td-right">email:&nbsp;&nbsp;</td><td class="td-left"><a :href="k1.email" target="_blank">{{ k1.email}}</a></td></tr>            
          <tr><td class="td-right">github followers:&nbsp;&nbsp;</td><td class="td-left">{{ k1.followers }}</td></tr>            
          <tr><td class="td-right">github following:&nbsp;&nbsp;</td><td class="td-left">{{ k1.following }}</td></tr>            
          <tr><td class="td-right">twitter_username:&nbsp;&nbsp;</td><td class="td-left">{{ k1.twitter_name }}</td></tr>                      
          <tr><td class="td-right">created_at:&nbsp;&nbsp;</td><td class="td-left">{{ dateTime(k1.created_at) }}</td></tr>  
          <tr><td class="td-right">updated_at:&nbsp;&nbsp;</td><td class="td-left">{{ dateTime(k1.updated_at) }}</td></tr>  

      <!-- only first 15  
        <tr v-for="(k2,v2,i2) in k1" :key="k2">             
          <td v-if="i2<15">{{i2}}</td><td v-if="i2<15" class="td-right">{{v2}}: </td><td v-if="i2<15" class="td-left">{{k2}}</td>  
        </tr>
      -->  
      </table>  

      <MultFetchPFF v-bind:name="k1.login" v-bind:userRepos="k1.repos_url" v-bind:userFollowers="k1.followers_url" v-bind:userFollowing="k1.url"  />          
    </div>

  </div>
</template>

<script>

  import MultFetchPFF from '../components/salon2/MultFetchPFF.vue'

  import moment from 'moment'
  

  export default {
      name: 'MultFetch',
      components: {
            MultFetchPFF
        },
      props: {     
        msg:  String,   
        name: String,
        userRepos: String,
        userFollowers: String,        
        userFollowing: String        
      },

      inject: ['Tutor', 'url_json_array'],
      
      setup() {


          /* MONTAR PROMISE.ALL PARA PROJECTS, FOLLers, FOOLing

          /* 
            OJO -> hay que ordenar url_json_array de acuerdo al orden de github_json_array
                  a los efectos de que en la siguiente tanda de fetch's coincidan...
                  Recomendable poner number en el json inicial del front end !

                  Y crear un nuevo array que tenga la data por persona
                  1.- json github persona
                  2.- json projects name y link persona
                  3.- json followers link persona
                  4.- json following link persona
          */

      },


      methods: {
          dateTime(value) {
            return moment(value).format('DD-MM-YYYY');
          },
      },   
      
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #ppalMultiFetch {     
      width:90%;
      text-align: center;    
      margin-left:10px;    
      margin-bottom:5px;
      margin-top:5px;
      padding:5px;    
    }

  .disp-col-center {
    /* display properties */
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: baseline;
        align-content: stretch;   
  }

  .welcomeP { color:blue; font-size: 10px; text-align:center;}

  h1 { color:rgb(2, 97, 2); font-size:16px;} 
  .jsonTable {
     width:90%; height:auto; margin-top:5px; margin-bottom:5px; font-size:10px; color:blue; padding:2px; border:1px solid gray;
  }

  .jsonTable h4 { width:98%; margin:auto; font-size:15px; color:black; text-align: center; } 

  table.center { margin-left: auto;  margin-right: auto; }

  table { width:90%;  } 
  table tr, th, td { border: 1px solid rgb(207, 207, 206); }
    
  td { font-size: 10px; padding-left:10px; }
  .td-right { text-align: right; }
  .td-left { text-align: left;}

  h3 {
    margin: 40px 0 0;
  }

  a {
    color: #42b983;
  }

</style>
