<template>

    <div>

      <h2>Modal Example</h2>  

      <section class="container">
          
          <!-- The Modal -->
          <div id="myModal" class="modal disp-col-center ">

              <!-- Modal content -->
              <div class="modal-content disp-col-center">
                  <span class="close" @click="modalOut1">&otimes;</span>
                  <p>Para salir de la ventana, haga click en la zona gris o en el símbolo</p>
                  <img id="img-Amp" class="disp-hide" src="" alt="" width="300" height="300">
              </div>

          </div>

          <div class="galeria disp-row-center">

              <article id="art-car01" class="disp-col-center" data-columns="3" data-indexnumber="123" data-parent="cars">
                  <!-- Trigger/Open The Modal -->
                  <img src="../../assets/img/foto01.jpg" alt="foto01" width="100" height="100">
                  <button id="myBtn-car01" @click="modal1">Open Modal</button>                
                <!--  <button id="myBtn-car01">Open Modal</button>  -->                
              </article>
              
              <article id="art-hall01" class="disp-col-center" data-columns="3" data-indexnumber="124" data-parent="houses">
                  <!-- Trigger/Open The Modal -->                
                  <img src="../../assets/img/foto02.jpg" alt="foto02" width="100" height="100">
                  <button id="myBtn-hall01" @click="modal2">Open Modal</button>
                <!--  <button id="myBtn-hall01">Open Modal</button>  -->
              </article>

          </div>
      
      </section>

    </div>  

</template>

<script>

    export default {
        name:"HtmlExample01",    

        created() {

        /*    

            VER: 
                https://www.vuescript.com/click-outside-away/
                https://www.youtube.com/watch?v=tevotcV6D2E 
                https://www.npmjs.com/package/click-outside-vue3
                https://stackoverflow.com/questions/63869859/migrating-detect-click-outside-custom-directive-from-vue-2-to-vue-3

            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn01 = document.getElementById("myBtn-car01");
            var btn02 = document.getElementById("myBtn-hall01");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
                
            // When the user clicks the button, open the modal 
            btn01.onclick = function() {
                modal.style.display = "block";
                document.getElementById("img-Amp").src="/imagenes-curso/foto01.jpg";
            }
    
            btn02.onclick = function() {
                modal.style.display = "block";
                document.getElementById("img-Amp").src="/imagenes-curso/foto02.jpg";
            }
     
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        */
        },
    /*    
        created() {
            document.addEventListener.call(window, "click", event => {
                console.log('event click' + Object.entries(event.target))
                // document.getElementById("myModal").style.display = "nove";    
            });
        },
    */    
        methods: {
            modal1(){
                // Get the modal1
                const modal = document.getElementById("myModal");
                modal.style.display = "block";
                document.getElementById("img-Amp").src="/src/assets/img/foto01.jpg";
            },
            modal2(){
                // Get the modal1
                const modal = document.getElementById("myModal");
                modal.style.display = "block";
                document.getElementById("img-Amp").src="/src/assets/img/foto02.jpg";
            },
            modalOut1(){
                const modal = document.getElementById("myModal");
                modal.style.display = "none";
            }
        }

    }
    
</script>    

     
<style scoped>

    h2 { text-align: center; margin-top:100px;}

    .mt200 { margin-top: 100px; }  
    .bord-1-sol-blk { border: 5px solid black; }

    section { border: 5px solid rgb(124, 124, 252); }    

    .container { 
        width:60%;
        height: auto;
        margin: auto;
        border: 10px solid rgb(253, 203, 64); ;
    }

    .disp-col-center { 
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
    }

    .disp-row-center {  
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
    }

    button { margin-bottom: 20px;}

    /* The Modal (background) */
    .modal {

        width: auto; /*  width */
        /* 
            OJO: para calcular margin-left, comparar el 50% ancho de la pantalla (position fixed), 
            versus el 60% ancho pantalla del parent (en este caso section versus ancho pantalla).
            El cálculo se hace más detallado en modalidad responsive

        */
        
        height: auto; /* height */

        padding: 20px; /* Location of the box */

        display: none;  /* Hidden by default */
        position: fixed; /* Stay in place */        
        z-index: 1; /* Sit on top */
        /* left:2.6%; */
        top:100px;
        
        overflow: auto; /* Enable scroll if needed */
        /* background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        border: 5px solid rgb(252, 212, 212);

    }

    /* Modal Content */
    .modal-content {        
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 10px solid rgb(202, 198, 198);
        width: 90%;
    }

    .modal-content p { font-size: 10px; color: blue;}

    .modal-content img { width:70%; margin: auto; border: 5px solid rgb(53, 53, 53);}

    .galeria img { margin: 10px;}

    /* The Close Button */
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover, .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

</style>