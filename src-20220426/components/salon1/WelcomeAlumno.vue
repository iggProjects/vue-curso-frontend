<template>
  <div class="item">    
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <p>WelcomeAlumno.vue ✔</p>
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<!-- 
<script>

    export default {  
        name:"alumno-data",
        data() {
        return {        
            json_alumno: null
        };
        },
        created() {
                
            const requestOptions = {  // Simple GET request 
                method: "GET",
                headers: { "Content-Type": "application/json" }      
            };
            fetch("https://api.github.com/users/albertomozo", requestOptions) // "https://jsonplaceholder.typicode.com/posts"
            .then(response => response.json())
            .then(data => (this.myjson = data)); 
        }
    }

</script>
-->

<style scoped>
.item {
  margin:2px;
  margin-top: 2rem;
  padding:3px;
  display: flex;
  /* border: 1px solid rgb(192, 193, 192); */ 
}

.details {
  flex: 1;
  margin-left: 1rem;
  /* border:1px solid green; */
}

.details p { color:blue; font-size: 10px;}
.details h3 { color:blue; font-size: 13px;}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
  color: blue;  
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  /* border:1px solid blue; */
}

@media (min-width: 480px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);    
  }

  i {
    top: calc(50% - 25px);
    left: 10px;
    /* left: -26px; */
    position: absolute;
    border: 1px solid rgb(18, 190, 2);
    /* border: 1px solid var(--color-border); */
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
