<template>
  <div class="carousel disp-col-center">
    <p>CarouselUno.vue ✔</p>
    <div class="inner disp-row-center" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        <img v-bind:src="card"/>
        <!-- <img v-bind:src="require('../assets/img/' + card)"/> -->       
      </div>
    </div>
  </div>
  <div class="disp-row-center">
    <button @click="prev">prev</button>
    <button @click="next">next</button>
  </div>
</template>

<script>

// <img v-bind:src="'/media/avatars/' + joke.avatar" /> 
// https://www.codegrepper.com/code-examples/html/how+to+pass+image+src+in+vue+js

export default {

  data () {
    return {
      cards: [
        'foto01.jpg', 
        'foto02.jpg',
        'foto03.jpg',
        'foto04.jpg',
        'foto05.jpg',
        'foto06.jpg'
      ],
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },

  mounted () {
    this.setStep()
    this.resetTranslate()
  },

  methods: {

    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth      
      const totalCards = this.cards.length
      this.step = `${innerWidth / totalCards}px`
      // console.log('innerWidth: ' + innerWidth + ' totalCards : ' + totalCards + ' division: ' + this.step);
    },

    next () {

      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })

    },

    prev () {

      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })

    },
    
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step}) translateX(-${this.step})`
      }
    },

    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step}) translateX(-${this.step})`
      }
    },

    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },

    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        /* transform: `translateX(-${this.step})` */
      }

    }

  }
}

</script>

<style scoped>

.disp-row-center {  
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}

.disp-col-center {  
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}

.carousel {
  margin-top:30px;
  width: 95%;
  height:200px;
  overflow: hidden;
  border:2px solid rgb(154, 154, 248)
}
.carousel p { color:blue; font-size:11px; } 
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
  /* border: 2px solid gray; */
  margin:auto;
}

.card {
  margin-right: 10px;
  width: 80px;  
  display: inline-flex;
  padding:5px;

  /* optional */
  height: 120px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;  
}

.card img { width:80%; height: 60%;}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}

</style>
