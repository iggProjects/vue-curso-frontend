<template>
	<div class="jsonex disp-col-center">
		<p>JsonComp.vue ✔</p>
		<h2>Read Local Json Example</h2> 
		<h3><b>Tutor: {{ Tutor.Nombre }} | <a v-bind:href="Tutor.github" target="_blank">Github Web<img src="../../assets/icons/github-brands.svg"></a></b></h3>		               
		<div class="divTable">	
			<table>
				<tr v-for="alumno in Alumnos" :key="alumno"><td>{{alumno.Nombre}}</td><td><a v-bind:href="alumno.github" target="_blank">Github Web<img src="../../assets/icons/github-brands.svg"></a></td></tr>
			</table>
		</div>

	</div>
</template>

<script>

	import elementos from '../../assets/json/frontend_20200124'

	export default {
		name: 'jsonex',
		data () {
			return {
				Alumnos: elementos.alumnos,
				Tutor: elementos.tutor
			}
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.jsonex { 
		margin-top:30px;		
		height:auto;
		overflow: hidden;
		border:2px solid rgb(154, 154, 248);
		font-size: 11px;
		width:90%; 
		text-align: center;
	}

	.jsonex p { color:blue; font-size:10px;}

	.jsonex img { width: 20px; height: 20px; margin-left:10px;}

	.w95 { width:auto; margin-left:0px; }

	.disp-col-center {  
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
	}

	.disp-row-center {  
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
	}

	h1, h2 { font-weight: normal; color:blue; font-size:15px;	}

	h3 { margin-top:20px; height: 40px; font-size:15px;}

	a { color: rgb(21, 1, 97);}

	.divTable { width: 80%; margin:auto; margin-bottom: 20px;}

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    table > th, td {
        border: 2px solid #fad158;
        text-align: center;
        padding: 8px;
    }

    table tr:nth-child(even) {
       background-color: #a779fd;
       color:white;
    }

</style>