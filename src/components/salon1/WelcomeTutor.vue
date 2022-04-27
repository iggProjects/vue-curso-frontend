<template>
  <div class="item disp-col-center">    
    <!--
    <i>
      <slot name="icon"></slot>
    </i>
    -->
    <div class="details disp-col-center">
      <p>WelcomeTutor.vue ✔</p>
      <h3>
        <slot name="heading"></slot>
      </h3>
      <div class="table">
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<!--
<script>

	import elementos from '../assets/json/frontend_20200124'

	export default {
		name: 'alumno-data',
		data () {
			return {
                Tutor: elementos.tutor,
				Alumnos: elementos.alumnos				
			}
		},
        methods:{

        }
	}

</script>
-->

<style scoped>

.disp-col-center {
  /* display properties */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;   
}

.item {
  /* margin:2px;
  margin-top: 2rem;  */
  width:90%; 
  padding:0;  
  /* border: 2px solid gray;  */
  /* display properties */
}


.details {
  width:90%;
  /*  
  flex: 1; 
  margin-left: 1rem; 
  */
  /*  CHEQUEAR EL POR QUÉ DE LA NECESIDAD DE MARGIN-LEFT !   */
  margin-left: -9%;  
  
  padding:0px;
  /* border: 2px solid blue; */ 
}

.details p { color:blue; font-size: 10px; text-align:center}

.details .table { 
  border:1px solid gray;
  margin:5px;
  margin-bottom:15px;
}

/*
i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
  color: blue;  
}
*/
.details h3 {  
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  /* text-align:center; */
  color: var(--color-heading);
  /* border:1px solid blue; */
}

@media (min-width: 480px) {
  .item {
    margin-top: 0;
    margin-left:0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);  
  }

/*
  i {
    top: calc(50% - 25px);
    left: 80px;
    // left: -26px;
    position: absolute;
    border: 1px solid rgb(18, 190, 2);
    // border: 1px solid var(--color-border); 
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
*/
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
