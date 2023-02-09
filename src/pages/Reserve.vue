<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "Reserve",
  data() {
    return {
      film: {},
      reserved: []
    }
  }, beforeMount() {
    const idFilm = this.$route.query.film
    axios.get('http://localhost:8080/films?id=' + idFilm)
        .then(res => {
          this.film = res.data;
        })
    axios.get('http://localhost:8080/seats/reserved?idFilm=' + idFilm)
        .then(res => {
          this.reserved= res.data
        })

  },
  methods: {
    reserveConfirm(numSeat) {
      Swal.fire({
        icon: 'question',
        color: '#e8dbdb',
        background: 'url(https://images.pexels.com/photos/1493226/pexels-photo-1493226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        title: 'Are You Sure ?',
        confirmButtonText: 'Yes!',
        confirmButtonColor: '#dc2626',
        cancelButtonColor: '#676161',
        cancelButtonText: 'Cancel!',
        showCancelButton: true,
        showConfirmButton: true
      }).then(result => {
        if (result.isConfirmed) {
          const data = new URLSearchParams()
          data.append('numSeat', numSeat)
          data.append('idFilm', this.$route.query.film)
          data.append('idUser', 5)
          axios({
            method: 'put',
            url: 'http://localhost:8080/seats/reserve',
            data: data
          }).then(res => {
            this.reserved.push(numSeat)
            Swal.fire({
              icon: res.data.type,
              title: res.data.content.message ?? 'error'
            })
          }).catch(err => {
            console.log(err)
          })
        }
      })
    }
  }
}
</script>

<template>
  <main class="wrapper">
    <div class="pt-20">
      <h1 class="text-2xl mx-auto rounded bg-opacity-50 p-3 bg-white w-fit font-bold text-center text-red-500 mb-4">
        {{ film.label }} Reservations</h1>
    </div>
    <div
        class="grid lg:grid-cols-10 md:grid-cols-7 grid-cols-5 gap-6 p-6 place-items-center backdrop-blur rounded-3xl mx-2">

      <img src="/chair.png" v-for="n in 50" :class="{'chair-disabled':reserved.includes(n)}" class="chair-icon"
           alt="chair" @click="!reserved.includes(n) && reserveConfirm(n)">
    </div>

  </main>
</template>


<style scoped>
.chair-icon {
  @apply w-16 h-16 object-contain filter hover:contrast-200 cursor-pointer
}

.chair-disabled {
  @apply sepia
}

.wrapper {
  @apply lg:h-screen bg-cover bg-[url(https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]
}
</style>