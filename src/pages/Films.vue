<template>
  <h1 class="text-center font-extrabold text-5xl text-red-600">Films</h1>
  <div class="mt-5 flex gap-2 flex-col items-center">
    <label for="date" class="text-2xl font-semibold">Select Date</label>
    <input id="date" class="rounded-3xl p-1 outline-none outline-red-200 " type="date" :min="today"
           @change="handleDate">
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-3">
    <film-card v-for="x in [1,1,1]"></film-card>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard.vue";
import moment from "moment";

export default {
  name: "Films",
  computed: {
    today() {
      return moment().format('YYYY-MM-DD')
    }
  },
  data() {
    return {}
  },
  components: {FilmCard},
  methods: {
    handleDate(e) {
      const input = e.target
      const day = moment(input.value).isoWeekday();
      console.log('day index :' + day)
      if ([6, 7].includes(day)) {
        e.preventDefault();
        input.value = '';
      }
    }
  }

}
</script>

<style scoped>
::-webkit-calendar-picker-indicator {
  @apply bg-amber-500
}
</style>