<template>

<div id="htmlProjectsDiv disp-col-center">  
    
    <div class="grid-container disp-row-center">

        <div class="grid-item1">
            <h3>Proyectos usando solo HTML-CSS-JS</h3>
            <p>Las siguientes páginas web están trabajadas solo con html, css y js.<br> Se subieron al servicio de Github Pages, a los fines de poder visualizarlas (url https).<br> Basta con hacer click en el título y podrás accerder a ellas.<br>No todas las páginas son responsive.<br>En algunas se indica que se active la consola del browser a los efectos de ver el track de la ejecución del javascript asociado.</p>
        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-08-fetch_AlumnosFrontEnd-Data.html" target="_blank">Proyecto Grupo FrontEnd</a></p>
            <p></p>

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-modal_window-w3s_example.html" target="_blank">Proyecto Modal Example</a></p>
            <p></p>
            <p></p>
            
        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/carrusel-w3s/index.html" target="_blank">Proyecto Carrusel w3s (retocado)</a></p>
            <p></p>
            <p></p>
            
        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-01-CarruselFotos-with_arrays.html" target="_blank">Proyecto Carrusel using arrays</a></p>
            <p></p>
            <p></p>

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-02-CarruselFotos-with_tag_properties.html" target="_blank">Proyecto Carrusel using tag's properties</a></p>
            <p></p>
            <p></p>

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-03-CarruselFotos-DragDrop.html" target="_blank">Proyecto Carrusel with drag-drop option</a></p>
            <p></p>           

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-Form-01-Menu-objectForm-ul-li.html" target="_blank">Proyecto Form compra menú comida</a></p><p></p>
            <p></p>
            
        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-05b-TagsPestañas-querySelector.html" target="_blank">Proyecto Pestañas con querySel</a></p>
            <p></p>

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-06-CheckBoxGame.html" target="_blank">Proyecto Catálogo with check box</a></p>
            <p></p>

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-10-graphs-INE-poblacion.html" target="_blank">Proyecto Gráficos INE</a></p>
            <p></p>

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-event-history-CarruselFotos-03-DragDrop.html" target="_blank">Proyecto AddEventListener con Carrusel</a></p>
            <p></p>

        </div>

        <div class="grid-item">
            
            <p><a href="https://iggprojects.github.io/github-page-prueba/igg-aportaciones-proj-final/igg-z-Json-Array-associative-array-example-v4.html" target="_blank">Proyecto Escribir Json</a></p>
            <p></p>

        </div>
    </div> 
</div>

</template>

<script>

    
</script>    

     
<style scoped>

    #htmlProjectsDiv {
        margin:50px; 
        width:90%;
        height:90vh;  
    }

    h1 { margin-top:30px; color:blue; }
    h3 { margin-top:10px; color: rgb(0, 77, 128); }       
    h4 { margin-top:10px; color: green; }       

    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        width:90%;  
        height:500px;
        overflow-y:scroll;                    
        margin:auto;
        margin-top:20px;
        padding:8px;
        border:2px solid rgb(245, 202, 248);                     
      /*  
        background-color: #2196F3; 
      */
    }

    .grid-container p { color:rgb(90, 89, 89); font-size:14px; }
    .grid-container a { font-size:16px; color:#4394fd; }

    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgb(127, 212, 252); 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: rgb(1, 122, 178); 
    }

    .grid-item1 {       
        height:auto;             
        grid-row: 1;
        grid-column: 1 / span 2;
        width:85%;
        margin:auto;
        margin-bottom:15px;
        /* background-color: rgba(225, 218, 253, 0.8); */            
        border:2px solid rgb(210, 209, 209); 
    }

    .grid-item {
        width:97%;
        min-height:auto; 
        overflow-y:scroll;
        margin:auto;
        margin-bottom: 4px;
        padding: 10px;
        font-size: 30px;
        text-align: center;
        /* background-color: rgba(220, 252, 252, 0.8); */
        border: 1px solid rgba(202, 202, 202, 0.8);
    } 

    .dis-row-center {
        /* display properties */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
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

</style>