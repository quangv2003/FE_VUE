<script setup>
import { ref } from 'vue';
import { User, School, Reading, Document, Setting } from '@element-plus/icons-vue';

// const isCollapsed = ref(false);

// const toggleMenu = () => {
//     isCollapsed.value = !isCollapsed.value;
// };
</script>

<template>
    <aside class="fixed" :class="{ 'w-20': isCollapsed, 'w-64': !isCollapsed }">
        <el-menu :collapse="isCollapsed" class="bg-white h-screen">

            <!-- <el-button @click="toggleMenu" class="w-full flex items-center justify-center">
                {{ isCollapsed ? '→' : '←' }}
            </el-button> -->

            <a href="">
                <el-menu-item index="">
                    <el-icon>
                        <User />
                    </el-icon>
                    <span v-if="!isCollapsed">Cá nhân</span>
                </el-menu-item>
            </a>

            <a href="">
                <el-menu-item index="">
                    <el-icon>
                        <Reading />
                    </el-icon>
                    <span v-if="!isCollapsed">Khóa học</span>
                </el-menu-item>
            </a>
        </el-menu>
    </aside>
</template>
