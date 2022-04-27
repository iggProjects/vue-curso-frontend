
<!--
    https://learnvue.co/2020/01/how-to-add-drag-and-drop-to-your-vuejs-project/#adding-drag-and-drop-functionality
-->

<template>

    <div class="ppal disp-col-center">

        <div class='drop-zone' @drop="onDrop($event,1)" @dragener.prevent @dragover.prevent>
          <div class="drag-el"  v-for="item in listOne" :key="item.title" draggable="true" @dragstart="startDrag($event, item)">
            {{ item.title }}
          </div>
        </div>  

        <div class='drop-zone' @drop="onDrop($event,2)" @dragener.prevent @dragover.prevent>
            <div class='drag-el' v-for='item in listTwo' :key='item.title' draggable="true" @dragstart="startDrag($event, item)">
              {{ item.title }}
            </div>
        </div>
    </div>

</template>


<script>
  export default {
  	data () {
      return {
        items: [{ id: 0, title: 'Item A', list: 1 },{ id: 1, title: 'Item B', list: 1 },{ id: 2, title: 'Item C', list: 2 }]
      }
  	},
    computed: {
      listOne () {
        return this.items.filter(item => item.list === 1)
      },
      listTwo () {
        return this.items.filter(item => item.list === 2)
      }
  	},
    methods: {
        startDrag (evt, item) {
            console.log('startDrag, item: ' + Object.entries(item))
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },
        onDrop (evt, list) {
            console.log('onDrop, list: ' + list)
            const itemID = evt.dataTransfer.getData('itemID')
            const item = this.items.find(item => item.id == itemID)
            item.list = list
        }
  	}
  
  
  }
</script>

<style scoped>

  .ppal { width:500px; border:1px solid black; padding:10px; margin:auto;}
  .disp-col-center{ 
   /* display properties */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .drop-zone {
    background-color: rgb(197, 251, 104);    
    margin-bottom: 10px;
    width:300px;
    min-height: 100px;
    padding: 10px;
    text-align: center;
  }

  .drag-el {    
    background-color: rgb(133, 131, 254);
    margin: 10px;
    margin-left:40px;
    padding: 5px;
    min-height: 100px;
    width:200px;
    text-align: center;
  }
  
</style>





