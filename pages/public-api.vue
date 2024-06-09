<template>
    <section class="pt-40 lg:py-52 2xl:py-40">
        <div class="justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto pr-5">
            <h3 class="text-3xl font-medium pb-10">Jokes</h3>
            <h4 v-if="type === 'twopart'">{{ setupJoke }}</h4>
            <h5 v-if="type === 'twopart'">{{ delivery }}</h5>
            <p v-if="type === 'single'">{{ joke }}</p>

            <div class="weather-container">
                <h3 class="text-3xl font-medium pb-4">Weather</h3>
                <p v-if="weatherLoading">Loading weather...</p>
                <div  v-else>
                    <div v-if="weatherDescription.includes('cloud')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-cloud">
                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                        </svg>
                    </div>
                    <div v-else-if="weatherDescription.includes('rain')">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-cloud-rain">
                            <line x1="16" y1="13" x2="16" y2="21"></line>
                            <line x1="8" y1="13" x2="8" y2="21"></line>
                            <line x1="12" y1="15" x2="12" y2="23"></line>
                            <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
                        </svg>
                    </div>
                    <div v-else-if="weatherDescription.includes('clear')">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-sun">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </div>
                    <div v-else>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-thermometer">
                            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
                        </svg>
                    </div>
                    <p>{{ weatherDescription }}</p>
                    <p>Temperature: {{ temperature }}°C</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const error = ref(false);
const category = ref('');
const type = ref('');
const setupJoke = ref('');
const delivery = ref('');
const joke = ref('');
const flags = ref({});
const safe = ref(false);
const id = ref('');
const lang = ref('');

const weatherLoading = ref(true);
const weatherDescription = ref('');
const temperature = ref('');

onMounted(() => {
    const jokeSettings = {
        async: true,
        crossDomain: true,
        url: 'https://v2.jokeapi.dev/joke/dark',
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhNjZlODc4LWY1OGEtNDM0YS05Nzc0LTc0MTdmNDY0MTI0MSIsInRva2VuVmVyc2lvbiI6MSwiaWF0IjoxNzE3MjIyNTYwLCJleHAiOjE3MTk4MTQ1NjB9.cQsCJpmMABlO816kXmTVApWncEkeA22pr8AqVx-hDo',
            'content-type': 'application/json'
        },
        processData: false,
        data: ''
    };

    const weatherSettings = {
        async: true,
        crossDomain: true,
        url: 'https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=badc806919cf40d48ef837b6d3ad0d93&include=minutely',
        method: 'GET',
        processData: false,
        data: ''
    };

    $.ajax(jokeSettings).done(function (response) {
        console.log(response);
        error.value = response.error;
        category.value = response.category;
        type.value = response.type;
        setupJoke.value = response.setup;
        delivery.value = response.delivery;
        joke.value = response.joke;
        flags.value = response.flags;
        safe.value = response.safe;
        id.value = response.id;
        lang.value = response.lang;
    });

    $.ajax(weatherSettings).done(function (response) {
        console.log(response);
        weatherLoading.value = false;
        weatherDescription.value = response.data[0].weather.description;
        temperature.value = response.data[0].temp;
    });
});
</script>

<style scoped>
.weather-container {
    margin-top: 40px;
}

.weather-icon {
    width: 50px;
    height: 50px;
}
</style>
