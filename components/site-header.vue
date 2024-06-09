<script setup lang="ts">

</script>

<template>
    <header class="fixed top-0 w-full backdrop-blur-md z-20">
        <div class="w-full flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-6">
            <NuxtLink to="/">
                <h1 class="text-xl font-bold uppercase">Omkar</h1>
            </NuxtLink>
            <div class="flex gap-x-3">
                <NuxtLink to="/public-api"
                    class="glow w-fit relative inline-block bg-neutral-100 p-2 rounded-md z-index:1;">
                    <!--         <img src="/menu.svg" class="h-5 w-5" alt="" /> -->
                    Public Api
                </NuxtLink>

                <NuxtLink to="/lab-two"
                    class="glow w-fit relative inline-block bg-neutral-100 p-2 rounded-md z-index:1;">
                    <!--         <img src="/menu.svg" class="h-5 w-5" alt="" /> -->
                    Lab Two
                </NuxtLink>
            </div>

        </div>
    </header>
</template>