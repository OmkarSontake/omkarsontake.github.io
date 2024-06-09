<script setup lang="ts">

</script>

<template>
    <div class="w-full mt-20 border-t border-neutral-200">
        <div
            class="justify-between max-w-7xl px-6 lg:px-8 py-10 w-full mx-auto text-sm text-neutral-600 grid grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-20 ">
            <div class="w-full flex flex-col gap-y-2">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/public-api">Public Api</NuxtLink>
                <NuxtLink to="/lab-two">Lab Two</NuxtLink>
            </div>

            <div class="w-full flex flex-col gap-y-2">
                <a href="#about">Resume</a>
                <a href="#about">Github</a>
                <a href="#work">Newsletter</a>
            </div>

            <div class="w-full flex flex-col gap-y-2">
                <a href="#about">Blog</a>
                <a href="#work">Roadmap</a>
            </div>
        </div>
        <div class="justify-between flex max-w-7xl px-6 lg:px-8 py-10 w-full text-[0.95rem] mx-auto text-neutral-600">
            <p>©2024 Omkar Sontake</p>
            <a href="/privacy-policy" class="text-sm text-neutral-600">
                Privacy Policy
            </a>
        </div>
    </div>
</template>