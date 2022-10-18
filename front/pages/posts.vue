<script>
  import axios from 'axios'
  
  export default {
    head() {
      return {
        title: 'Posts',
      }
    },
    data() {
      return {
        posts:null
      }
    },
    methods: {
      getPosts() {
        console.log("tout les postes")
        axios.get('http://localhost:3000/api/post/allPosts', {
          }
        )
          .then((res) => {
            this.posts = res.data
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    mounted(){
      this.getPosts()
    }
  }
  </script>
  
  <template>
    <div>
      <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-700">
        <h1 class="text-red-500 text-xl mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow drop-shadow-lg rounded-lg bg-white hover:bg-gray-700 hover:text-red-600">Créer un Post</h1>
        <button @onclick() class="text-red-500 text-xl mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow drop-shadow-lg rounded-lg bg-white hover:bg-gray-700 hover:text-red-600">Nouveau Post</button>
      </div>
    <div class="bg-gray-700">
      <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" v-for="post in posts" v-bind:key="post.id">
        <div class="text-xl mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow drop-shadow-lg rounded-lg bg-white">
          <p class="pt-25">ID de l'utilisateur : {{post.id}}</p>
          <p class="text-red-600">Titre du post : {{post.title}}</p>
          <p>Image : <img :src="post.imageUrl"/></p>
          <p>Description : {{post.content}}</p>
        <div class="text-gray-700">
          <p>Date de post : {{post.createdAt}}</p>
          </div>
      </div>
    </div>
      </div>
    </div>
  </template>
  