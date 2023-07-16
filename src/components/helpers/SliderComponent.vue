<script setup>
import {computed, ref} from "vue";
import coch from '@/assets/images/svg/companies/coch.svg'
import honda from '@/assets/images/svg/companies/honda.svg'
import kenny from '@/assets/images/svg/companies/kenny.svg'
import kia from '@/assets/images/svg/companies/kia.svg'
import ohio from '@/assets/images/svg/companies/ohio.svg'


const slider = ref(null);
const sliderItem = ref(null);
const currentTranslate = ref(0);
const items = ref([coch, honda, kenny, kia, ohio,coch, honda, kenny, kia, ohio,coch, honda, kenny, kia, ohio,]);
const itemsPerSlide = 6;
const currentIndex = ref(0);


const slideGroups = computed(() => {
    const groups = [];
    const totalSlides = Math.ceil(items.value.length / itemsPerSlide);
    for (let i = 0; i < totalSlides; i++) {
        groups.push(items.value.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide));
    }
    return groups;
});

const goToSlide = (index) => {
    if (index === 0) {
        currentTranslate.value = -slider.value.offsetWidth * index
    } else {
        currentTranslate.value = -slider.value.offsetWidth * index - 16
    }
    currentIndex.value = index
};


</script>

<template>
    <div class="slider" ref="slider">
        <div class="slider-items" :style="{ transform: `translateX(${currentTranslate}px)` }">
            <div class="slide" v-for="(group, index) in slideGroups" :key="index">
                <div class="slider-item border-radius-16" v-for="(item, itemIndex) in group" ref="sliderItem"
                     :key="itemIndex">
                    <img :src="item" alt="item">
                </div>
            </div>
        </div>
    </div>
    <div class="slider-navigator">
        <div class="slide" v-for="(item, index) in slideGroups" :key="index">
            <div class="navigator-item" :class="{active:currentIndex === index}" @click="goToSlide(index)"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "scss/slider";
</style>