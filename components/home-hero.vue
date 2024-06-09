<template>
    <section class="pt-40 lg:py-52 2xl:py-40">
        <div class="justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto pr-5">
            <h2 class="text-3xl sm:text-5xl lg:text-5xl max-w-4xl">
                Hi there! I'm Omkar, a student and lead frontend engineer interning at
                hola, and currently collaborating on projects involving
                <br class="sm:hidden" />
                <VueWriter :eraseSpeed="50" :typeSpeed="100" 
                    :array="['React.', 'Typescript.', 'Node.', 'Electron.', 'Next.', 'Vue.', 'Nuxt.', 'Python.']" />
            </h2>

            <div class="flex items-center justify-between">
                <div class="flex items-center gap-x-6 mt-10">
                    <button
                        class="glow w-fit relative min-w-fit inline-block px-4  bg-indigo-400 bg-opacity-20 text-indigo-600 font-medium  backdrop-blur-sm p-2  rounded-md  z-index: 1;">
                        About Me
                    </button>

                    <button
                        class="glow w-fit relative inline-block px-4  bg-indigo-400 bg-opacity-20 text-indigo-600 font-medium  backdrop-blur-sm p-2  rounded-md  z-index: 1;">
                        Work
                    </button>
                </div>

                <div class="w-full"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { VueWriter } from 'vue-writer'

</script>

<style scoped></style>