<!--
   json del código original "https://jsonplaceholder.typicode.com/posts"   
 --> 
<script setup>
    import TutorGhProjects from '../salon1/WelcomeTutorGhubProjects.vue'
</script>

<template>

    <div class="disp-col-center">
        <div class="ppalDiv">
            <p>WelcomeTutor GitHub Json ✔</p>    
            <div class="divTutor-detail">
                <p>git hub json</p>                
                <table id="detail" class="center">
                    <tr v-for="(key,value) in TutorJson" :key="key"><td class="td-right">{{value}}: </td><td class="td-left">{{key}}</td></tr>
                </table>        
            </div>        
        </div>

        <TutorGhProjects v-bind:Tutor="Tutor" v-bind:TutorJson="TutorJson"/>    
    </div>

   
<!-- 
    <Tutorfollowers />
    <Tutorfollowing />
-->

</template>

<script>

// import { ref, provide } from 'vue'

export default {
    name: 'TutorGhjson',
    components: {
      TutorGhProjects      
    },

    data() {
        return {        
            TutorJson: null       
        };
    },

    props: {
        Tutor: { type: Array }        
    },

    /* https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch */
    async created() {           
        const requestOptions = {  // Simple GET request 
            method: "GET",
            headers: { "Content-Type": "application/json" }      
        };
 
        await fetch(this.Tutor.github_json, requestOptions)
        .then(response => response.json())
        .then(data => (this.TutorJson = data)); 
    }

/*
        const TutorJson = ref([]) 

        Promise.all([  
            fetch(this.Tutor.github_json, requestOptions)
        ])
        .then(async ([resTutorJson]) => {             
            TutorJson.value = await resTutorJson.json()
            // window.setTimeout(() => Tutor.value = [], 3000) // 3 seconds
        })


        provide("TutorJson", TutorJson)

        console.log('TutorJson: ' + typeof TutorJson )
        console.log(TutorJson) 
        console.log('TutorJson values ')              
        console.log(Object.entries(TutorJson))  
*/

        
    
}

</script>

<style scoped>

    .f-sz-20 { font-size:20px; }
    .disp-col-center {
    /* display properties */
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;   
    }


    .ppalDiv { width:90%; height: 150px; overflow-y: scroll;  margin:auto; margin-top:20px; margin-bottom:20px; border: 1px solid rgb(193, 249, 169); padding: 5px;}
    .ppalDiv p { color:blue; font-size:11px; text-align: center; margin: 1px;}

    .divTutor-detail { min-width: 70%; margin-top:5px; margin-bottom: 5px; padding:3px; }    
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