<script>
    import axios from 'axios'
    
    export default {
      head() {
        return {
          title: 'Connexion',
        }
      },
      data() {
        return {
          userEmail: null,
          userPassword: null
        }
      },
      methods: {
        connexionUser() {
          console.log("ici")
          axios.post('http://localhost:3000/api/auth/login', {
              "email": this.userEmail,
              "password": this.userPassword,
            }
          )
            .then((res) => {
              console.log(res)
              return navigateTo('/posts')
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
    }
    </script>
<template>

    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"> Adresse Mail </label>
            <div class="mt-1">
              <input v-model="userEmail" id="email" name="email" type="email" autocomplete="email" required=""
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700"> Mot de passe </label>
            <div class="mt-1">
              <input v-model="userPassword" id="password" name="password" type="password" autocomplete="current-password"
                     required=""
                     class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>
      
          <div>
            <button @click="connexionUser()"
                    class="mt-3 w-full flex justify-center py-2 px-4 border  rounded-md  text-sm font-medium text-red-500 bg-gray-700 hover:bg-red-500">
             Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  

