<script setup>
import SliderComponent from "@/components/helpers/SliderComponent.vue";
import blue from '@/assets/images/svg/sponsor/blue.svg'
import cal from '@/assets/images/svg/sponsor/cal.svg'
import drop from '@/assets/images/svg/sponsor/drop.svg'
import fyta from '@/assets/images/svg/sponsor/fyta.svg'
import gira from '@/assets/images/svg/sponsor/gira.svg'
import intelligent from '@/assets/images/svg/sponsor/intelligent.svg'
import m2 from '@/assets/images/svg/sponsor/m2.svg'
import mmm from '@/assets/images/svg/sponsor/mmm.svg'
import {onMounted} from "vue";
import {useUserStore} from "@/stores/user";


const components = [
    {src: blue},
    {src: cal},
    {src: drop},
    {src: fyta},
    {src: gira},
    {src: intelligent},
    {src: m2},
    {src: mmm},
]
const UserStore = useUserStore()


onMounted(() => {
    UserStore.actionGetUser()
})
</script>

<template>
    <section class="home-view">
        <h2 class="first-header">Be the first who <br>
            Find Out Phone NUmber Change_</h2>

        <SliderComponent/>

        <h2 class="second-header">Powerful monitor <br>
            of your dealer
            infestruction</h2>

        <div class="sponsors">
            <div class="small-group">
                <div class="group-item border-radius-16" v-for="n in 7">
                    <img :src="components[n-1].src" :alt="n">
                </div>
            </div>
            <div class="big-group">
                <div class="group-item border-radius-16" v-for="n in 8">
                    <img :src="components[n-1].src" :alt="n">
                </div>
            </div>
            <div class="small-group">
                <div class="group-item border-radius-16" v-for="n in 7">
                    <img :src="components[n-1].src" :alt="n">
                </div>
            </div>
        </div>

        <h2 class="third-header">Start Free <br>
            today</h2>

        <form class="auth-form">
            <fieldset class="username">
                <legend>Username:</legend>
                <input class="border-radius-16" type="text" placeholder="Type your username">
            </fieldset>
            <fieldset class="password">
                <legend>Password:</legend>
                <label for="">
                    <input class="border-radius-16" type="password" placeholder=" ">
                    <span class="placeholder-icon"></span>
                </label>
            </fieldset>

            <button class="submit">
                create account
            </button>
        </form>
    </section>
</template>

<style scoped lang="scss">
@import "scss/home";
</style>
