<template>

  <main class="main-wrapper">
    <div class="form-wrapper">
      <router-link to="/">
        <img src="/logo.png" class="w-16 mb-4" alt="logo">

      </router-link>
      <form class="flex flex-col items-center w-full" @submit.prevent="handleLogin">
        <textarea class="form-field" type="text" placeholder="Token" v-model="token"></textarea>
        <button type="submit" class="form-submit">Login</button>
      </form>
      <router-link to="/register" class="link">You don't have a token ?</router-link>
    </div>
  </main>

</template>

<script>
import axios from 'axios'
import Swal from "sweetalert2";

export default {
  name: "Login",
  data() {
    return {
      token: ''
    }
  },
  methods: {
    handleLogin() {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
        axios.defaults.headers.common['Authorization'] =
            `Bearer ${this.token}`;
        axios.post('http://localhost:8080/users/login')
            .then(res => {
              const data = res.data
              Toast.fire({
                icon: data.type,
                title: data.content.message
              })
              this.$router.push('/')

            })
            .catch(err => {
              const data = err.response.data
              Toast.fire({
                icon: data.type,
                title: data.content.message
              })
            })
    }
  }
}
</script>

<style scoped>
.main-wrapper {
  @apply h-screen w-full bg-cover bg-[url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
  flex justify-center items-center
}

.form-wrapper {
  @apply backdrop-blur rounded-2xl w-96 flex flex-col items-center p-6
}

.form-field {
  @apply bg-red-500 h-32 rounded-2xl w-full p-1 text-red-200 outline-none text-center placeholder-red-50 placeholder-opacity-30 resize-none
}

.form-submit {
  @apply text-red-200 bg-red-500 mt-5 rounded-2xl py-2 px-4 w-fit hover:bg-red-50 hover:text-red-500
}

.link {
  @apply text-red-50 hover:underline mt-2
}
</style>