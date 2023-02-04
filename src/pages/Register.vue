<template>

  <main class="main-wrapper">
    <div class="form-wrapper">
      <router-link to="/">
        <img src="/logo.png" class="w-16 mb-4" alt="logo">

      </router-link>
      <form class="flex gap-3 flex-col items-center w-full" @submit.prevent="handleRegister">
        <input class="form-field" type="text" placeholder="First Name" v-model="formData.firstName">
        <input class="form-field" type="text" placeholder="Last Name" v-model="formData.lastName">
        <input class="form-field" type="text" placeholder="Email" v-model="formData.email">
        <label class="file-field" for="user-image">{{ filename }}</label>
        <input class="form-field" type="file" id="user-image" hidden="" @change="changeImage">
        <button type="submit" class="form-submit">Register</button>
      </form>
      <router-link to="/login" class="link">Already registered ?</router-link>
    </div>
  </main>


</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        image: null
      },
      filename: 'Upload User image'
    }
  },
  computed: {},
  methods: {
    changeImage(e) {
      this.formData.image = e.target.files[0]
      this.filename = this.formData.image.name
    },
    handleRegister() {
      console.log(this.formData)


      // axios({
      //   method:'PUT',
      //   url: 'http://localhost:8080/users/register',
      //   data:{}
      // })
      //     .then(res => {
      //       console.log(res)
      //     })
      //     .catch(err => {
      //       console.error(err)
      //     })
    }
  }
}
</script>

<style scoped>

.file-field {
  @apply bg-red-500 text-red-50 text-opacity-50 w-full text-center rounded-3xl p-1 py-2
}


.link {
  @apply text-red-50 hover:underline mt-2
}

.main-wrapper {
  @apply h-screen w-full bg-cover bg-[url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
  flex justify-center items-center
}

.form-wrapper {
  @apply backdrop-blur rounded-2xl w-96 flex flex-col items-center p-6
}

.form-field {
  @apply bg-red-500  rounded-2xl w-full p-1 py-2 text-red-200 outline-none text-center placeholder-red-50 placeholder-opacity-30 resize-none
}

.form-submit {
  @apply text-red-200 bg-red-500 mt-5 rounded-2xl py-2 px-4 w-fit hover:bg-red-50 hover:text-red-500
}

::file-selector-button {
  @apply bg-red-50 text-red-500 outline-none shadow-none border-0 rounded-2xl py-2 h-full cursor-pointer
}
</style>