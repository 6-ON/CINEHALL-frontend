<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const all = ref([])


onMounted(async () => {
    const userResponse = await axios.get('http://localhost:8080/users/get-info');
    const response = await axios.get('http://localhost:8080/user/reservations?id=' + userResponse.data.id);
    all.value = response.data
})

async function cancelReserve(id) {
    const response = await axios.delete('http://localhost:8080/seats/cancel',{
        data:{
            id:id
        }
    });
    if (response) {
        all.value = all.value.filter((re) => re.id != id)
    }
    // console.log(id)

}
</script>

<template>
    <h1 class="text-center text-3xl font-bold text-red-500">My Reservations</h1>

    <div class="container gap-4 grid grid-cols-6 p-7">
        <div v-for="reservation in all" class="p-6 border">
            <h3 class="text-xl">{{ reservation.label }}</h3>
            <h5 class="text-md">{{ reservation.numSeat }}</h5>
            <button @click="cancelReserve(reservation.id)" class="bg-red-600 rounded px-7 text-white">Cancel</button>
        </div>

    </div>
</template>