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
import Swal from "sweetalert2";
// get signature,
// use it  upload image to cloudinary
// get the image url and insert it in the database

export default {
  name: "Register",
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
      },
      image: null,
      filename: 'Upload User image'
    }
  },
  computed: {},
  methods: {
    changeImage(e) {
      this.image = e.target.files[0]
      this.filename = this.image.name
    },
    async getSignature() {
      return await axios.get('http://localhost:8080/upload/get-sig').catch((err) => console.log(err))
    }
    ,
    async uploadImage() {
      return await this.getSignature().then(async (res) => {
        // after getting signature
        const result = res.data
        const api_key = '571349964156337'
        const data = new FormData()
        data.append('file', this.image)
        data.append('api_key', api_key)
        data.append('signature', result.signature)
        data.append('timestamp', result.timestamp)
        data.append('folder', 'CineHall')
        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://api.cloudinary.com/v1_1/dgmmjsxbf/auto/upload',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          data: data
        };

        return axios(config);
      })
          .catch(function (error) {
            console.log(error)
          })

    }, async saveUser() {
      return await this.uploadImage().then((res) => {
        // after upload
        const image_url = res.data.secure_url
        const params = new URLSearchParams()
        for (const item in this.formData) {
          params.append(item, this.formData[item])
        }
        params.append('image', image_url)
        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: 'http://localhost:8080/users/create',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: params
        };
        return axios(config)

      }).catch((err) => console.log(err))

    }
    ,
    handleRegister() {
      this.saveUser().then((res => {
        const token = res.data.content.token
        navigator.clipboard.writeText(token)
        Swal.fire({
          title: 'Registration Done !',
          icon: 'success',
          text: 'The token is Copied to the clipboard paste it in the login page'
        }).then(() => {
          this.$router.push('/login')
        })

      }));
    }
  }
}
</script>

<style scoped>

.file-field {
  @apply bg-red-500 text-red-50 text-opacity-50 w-full text-center rounded-2xl p-1 py-2
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