<script setup>

</script>

<template>
    <nav class="fixed top-0 z-50 w-full">
        <div class="border-b border-gray-100 bg-white h-16">
            <!-- Primary Navigation Menu -->
            <div class="px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="flex shrink-0 items-center">
                            <img src="data:image/jpeg;base64,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" alt="" class="w-10 h-10">
                        </div>                       
                    </div>

                    <div class="hidden sm:ms-6 sm:flex sm:items-center md:inline-flex">
                        <!-- Settings Dropdown -->
                        <div class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 50 50"
                                preserveAspectRatio="none">
                                <path
                                    d="M 25 0 C 22.800781 0 21 1.800781 21 4 C 21 4.515625 21.101563 5.015625 21.28125 5.46875 C 15.65625 6.929688 12 11.816406 12 18 C 12 25.832031 10.078125 29.398438 8.25 31.40625 C 7.335938 32.410156 6.433594 33.019531 5.65625 33.59375 C 5.265625 33.878906 4.910156 34.164063 4.59375 34.53125 C 4.277344 34.898438 4 35.421875 4 36 C 4 37.375 4.84375 38.542969 6.03125 39.3125 C 7.21875 40.082031 8.777344 40.578125 10.65625 40.96875 C 13.09375 41.472656 16.101563 41.738281 19.40625 41.875 C 19.15625 42.539063 19 43.253906 19 44 C 19 47.300781 21.699219 50 25 50 C 28.300781 50 31 47.300781 31 44 C 31 43.25 30.847656 42.535156 30.59375 41.875 C 33.898438 41.738281 36.90625 41.472656 39.34375 40.96875 C 41.222656 40.578125 42.78125 40.082031 43.96875 39.3125 C 45.15625 38.542969 46 37.375 46 36 C 46 35.421875 45.722656 34.898438 45.40625 34.53125 C 45.089844 34.164063 44.734375 33.878906 44.34375 33.59375 C 43.566406 33.019531 42.664063 32.410156 41.75 31.40625 C 39.921875 29.398438 38 25.832031 38 18 C 38 11.820313 34.335938 6.9375 28.71875 5.46875 C 28.898438 5.015625 29 4.515625 29 4 C 29 1.800781 27.199219 0 25 0 Z M 25 2 C 26.117188 2 27 2.882813 27 4 C 27 5.117188 26.117188 6 25 6 C 23.882813 6 23 5.117188 23 4 C 23 2.882813 23.882813 2 25 2 Z M 27.34375 7.1875 C 32.675781 8.136719 36 12.257813 36 18 C 36 26.167969 38.078125 30.363281 40.25 32.75 C 41.335938 33.941406 42.433594 34.6875 43.15625 35.21875 C 43.515625 35.484375 43.785156 35.707031 43.90625 35.84375 C 44.027344 35.980469 44 35.96875 44 36 C 44 36.625 43.710938 37.082031 42.875 37.625 C 42.039063 38.167969 40.679688 38.671875 38.9375 39.03125 C 35.453125 39.753906 30.492188 40 25 40 C 19.507813 40 14.546875 39.753906 11.0625 39.03125 C 9.320313 38.671875 7.960938 38.167969 7.125 37.625 C 6.289063 37.082031 6 36.625 6 36 C 6 35.96875 5.972656 35.980469 6.09375 35.84375 C 6.214844 35.707031 6.484375 35.484375 6.84375 35.21875 C 7.566406 34.6875 8.664063 33.941406 9.75 32.75 C 11.921875 30.363281 14 26.167969 14 18 C 14 12.261719 17.328125 8.171875 22.65625 7.21875 C 23.320313 7.707031 24.121094 8 25 8 C 25.886719 8 26.679688 7.683594 27.34375 7.1875 Z M 21.5625 41.9375 C 22.683594 41.960938 23.824219 42 25 42 C 26.175781 42 27.316406 41.960938 28.4375 41.9375 C 28.792969 42.539063 29 43.25 29 44 C 29 46.222656 27.222656 48 25 48 C 22.777344 48 21 46.222656 21 44 C 21 43.242188 21.199219 42.539063 21.5625 41.9375 Z">
                                </path>
                            </svg>
                        </div>

                        <div class="relative ms-3">
                            <Dropdown align="right" width="48">
                                <template #trigger>
                                    <span class="inline-flex rounded-md">
                                        <button type="button"
                                            class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none">
                                            <img src="" alt="" class="ml-2 h-10 w-10 rounded-full">
                                        </button>
                                    </span>
                                </template>

                                <template #content>
                                    <a href="">
                                        Profile
                                    </a>
                                    <a>
                                        Log Out
                                    </a>
                                </template>
                            </Dropdown>
                        </div>
                    </div>

                    <!-- Hamburger -->
                    <div class="-me-2 flex items-center sm:hidden">
                        <button @click="
                            showingNavigationDropdown =
                            !showingNavigationDropdown
                            "
                            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{
                                    hidden: showingNavigationDropdown,
                                    'inline-flex':
                                        !showingNavigationDropdown,
                                }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{
                                    hidden: !showingNavigationDropdown,
                                    'inline-flex':
                                        showingNavigationDropdown,
                                }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
