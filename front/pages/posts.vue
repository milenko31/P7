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
      <div v-for="post in posts" v-bind:key="post.id">
        <p>Je suis l'id : {{ post.id}}</p>
        <p>Titre du post : {{ post.title }}</p>
        <p>Image : {{ post.imageUrl }}</p>
        {{ post.createdAt }}
      </div>
    </div>
  </template>
  