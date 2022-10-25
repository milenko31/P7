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
      posts: null,
      showModal: false

    }
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    getPosts() {
      console.log("tout les postes")
      axios.get('http://localhost:3000/api/post/allPosts', {}
      )
        .then((res) => {
          this.posts = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getPosts()
  },


}
</script>
  <template>
    <div>
      <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-700">
        <h1 class="text-red-500 text-xl mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow drop-shadow-lg rounded-lg bg-white hover:text-red-600">Créer un Post</h1>
        <div>
          <button class="text-red-500 text-xl mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow drop-shadow-lg rounded-lg bg-white hover:bg-gray-700 hover:text-red-600" type="button" v-on:click="toggleModal()">
            Nouveau
        </button>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-3xl">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <!--header-->
              <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 class="text-3xl font-semibold">
                  Titre du post
                </h3>
                <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
                  <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto">
                <input class="my-4 text-slate-500 text-lg overflow-auto h-25 w-25 border-solid border-red-500">
              </div>
              <!--footer-->
              <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                  Annuler
                </button>
                <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                  Poster votre nouveau post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
    <div class="bg-gray-700">
      <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" v-for="post in posts" v-bind:key="post.id">
        <div class="text-xl mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow drop-shadow-lg rounded-lg bg-white">
          <p class="text-red-600">ID de l'utilisateur : {{post.id}}</p>
          <p>Titre du post : {{post.title}}</p>
          <p>Image : <img :src="post.imageUrl"/></p>
          <p>Description : {{post.content}}</p>
        <div class="text-gray-700">
          <p class="italic">Date de post : {{post.createdAt}}</p>
          </div>
      </div>
    </div>
      </div>
    </div>
  </template>
  