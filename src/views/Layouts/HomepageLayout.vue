<script setup>
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col w-full">
        <!-- Header -->
        <div class="h-16">
            <Header />
        </div>

        <!-- Main Content -->
        <div class="flex flex-1">
            <div class="w-64 bg-white shadow-md">
                <SideBar />
            </div>

            <div class="flex-1">
                <slot />
            </div>
        </div>
    </div>
</template>

