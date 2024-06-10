<template>
    <section class="pt-40 lg:py-52 2xl:py-40">
        <div class="justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto pr-5">
            <h2 class="text-3xl sm:text-5xl lg:text-5xl max-w-4xl">
                Hi there! I'm Omkar, a student who previously interned at
                (PECO), and working on project including:
                <br class="sm:hidden" />
                <VueWriter :eraseSpeed="50" :typeSpeed="100" 
                    :array="['React.', 'Typescript.', 'Node.', 'Electron.', 'Next.', 'Vue.', 'Nuxt.', 'Python.']" />
            </h2>
            <div>
                <img src="/headshot.jpg" class="h-40" alt="">
                <h1>Sontakor@mail.uc.edu</h1>
            </div>
            
           
        </div>
    </section>
</template>

<script setup>
import { VueWriter } from 'vue-writer'

</script>

<style scoped></style>