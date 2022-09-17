<script>
  import axios from 'axios'
  
  export default {
    head() {
      return {
        title: 'Mon compte',
      }
    },
    data() {
      return {
        userEmail: null,
        userPassword: null
        id: this.userId
      }
    },
    methods: {
      profilUser() {
        console.log("ici")
        axios.post('http://localhost:3000/api/auth/allPosts', {
            "email": this.userEmail,
            "password": this.userPassword,
          }
        )
          .then((res) => {
            console.log(res)
            return navigateTo('/mon-compte')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
  }
  </script>

<template>
    <div>
        <h1>Je suis mon compte</h1>
    </div>
</template>