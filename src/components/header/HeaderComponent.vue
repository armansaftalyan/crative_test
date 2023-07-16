<script setup>

import HamburgerIcon from "@/components/icons/HamburgerIcon.vue";
</script>

<template>
    <nav>
        <div class="logo">
            Uptify
        </div>
        <div class="menu">
            <div class="menu-item">
                <hamburger-icon/>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@import "scss/header";
</style>