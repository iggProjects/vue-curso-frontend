<template>

   <div > 
        
        <!-- Favorites -->        
        <div class="favorites">          
           <!--  <div class="favorite" v-for="favorite in favorites"> -->
            <div class="favorite" v-for="[key,favorite] in favorites" :key="favorite">                
                <div>
                    <a :href="favorite.blog" target="_blank">
                        <img :src="favorite.avatar_url" :alt="favorite.name" class="favorite__avatar">
                    </a>
                </div>
                <div class="fav_buttons">
                    <a :href="favorite.html_url" target="_blank">🐱</a> 
                    <a href="#" @click="removeFavoriteId(key)"> 💣</a> 
                </div>
            </div>
            
        </div>

        <!-- Content -->
        <article class="content">
            <p>GitHubSearch.vue ✔</p>
            <h1 class="content__title">Search GitHub users</h1>

            <!-- Search -->
            <form class="search" v-on:submit.prevent="doSearch">
                <input v-model="search" type="text" class="search__input" required placeholder="Search GitHub users">
                <input type="submit" class="search__submit" value="Search">
            </form>

            <!-- Result -->
             <div class="result" v-if="result">
                <a v-if="isFavorite" href="#" class="result__toggle-favorite" @click="removeFavorite">Remove Favorite ⭐️</a>
                <a v-else href="#" class="result__toggle-favorite" @click="addFavorite">Add Favorite ⭐️</a>
                <h2 class="result__name">👉 {{ result.name }}</h2>
                <img v-bind:src="result.avatar_url" :alt="result.name" class="result__avatar">
                <p class="result__bio">{{ result.bio }} <br>
                    <a v-bind:href="result.blog" target="_blank" class="result__blog">{{ result.blog }}</a>
                </p>
            </div>
            <!-- Error -->
            <div class="result__error" v-if="error">Error found</div>
        </article>
   
   </div>

</template>

<script>

const API = "https://api.github.com/users/";

export default {
   name:"GithubUserSearch",
   data() {
      return {
        search: null,
        result: null,
        error: null,
        favorites: new Map()
      };
    },

    created() {
      if(localStorage.getItem("favorites")){
        const savedFavorites = JSON.parse(window.localStorage.getItem("favorites"))        
        if (savedFavorites.length) {
          const favorites = new Map(savedFavorites.map(favorite => [favorite.id, favorite]))
          this.favorites = favorites
        }
      }
    },

    computed: {
      isFavorite() {
        return this.favorites.has(this.result.id)
      },
      allFavorites() {
        return Array.from(this.favorites.values())
      }
    },
    
    methods: {
      async doSearch() {
        this.result = this.error = null
        try {
          const response = await fetch(API + this.search)
          if (!response.ok) throw new Error("User not found")
          const data = await response.json()
          console.log(data)
          this.result = data
        } catch(error) {
          this.error = error
        } finally {
          this.search = null
        }
      },
  
      addFavorite() {
        this.favorites.set(this.result.id, this.result)
        this.updateStorage()
      },
  
      removeFavorite() {
        this.favorites.delete(this.result.id)
        this.updateStorage()
      },
      removeFavoriteId(valor) {        
        this.favorites.delete(valor)
        this.updateStorage()
      },   
      showFavorite(favorite) {
        this.result = favorite
      },  
      updateStorage() {
        window.localStorage.setItem('favorites', JSON.stringify(this.allFavorites))
      }
    }
}
</script>

<style scoped>

/* Content */
.content {
  background-color: lightgrey;
  width: 95%;
  max-width: 768px;
  padding: 3rem;
  box-shadow: 2px 2px 3px gray;
  border-radius: 1rem;
}

.content p { text-align: center;  color:rgb(29, 4, 254); font-size:11px; } 

.content__title {
  margin: 1rem;
  text-align: center;
}

/* Search */
.search {
  display: flex;
  margin-bottom: 2.5rem;
}

.search__input {
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
}

/* Result */
.result {
  position: relative;
  background-color: purple;
  border-radius: 0.3rem;
  box-shadow: 2px 2px 3px gray;
  color: white;
  padding: 2.5rem;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "name name"
    "avatar bio";
}

.result__toggle-favorite {
  position: absolute;  
  top: 0.3rem;
  right: 0.3rem;
  border: none;
  color: white;
  text-decoration: none;
  padding: 0.4rem;
}

.result__name {
  grid-area: name;
  margin: 0.4rem 0;
}

.result__avatar {
  grid-area: avatar;
  max-width: 6rem;
  height: auto;
  border-radius: 1rem;
}

.result__bio {
  grid-area: bio;
  margin: 0;
}

.result__blog {
  grid-area: blog;
  color: goldenrod;
}

.result__error {
  padding: 0.3rem;
  background-color: tomato;
  color: white;
  text-align: center;
  border: 1px solid red;
}

/* Favorites */
.favorites {
  /*
  position: fixed;
  top: 0;
  left: 0;
  */
  margin-bottom:10px; 
  width: 100%;
  display: flex;
}

.favorite {
  transition: transform 0.3s ease-out;
}

.favorite .fav_buttons {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
  border: 1px solid rgb(216, 215, 215);
}

.favorite__avatar {
  height: 4rem;
  margin: 0.3rem;
}

.favorite--selected {
  transform: scale(1.3);
}

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

</style>

