<template>
    <div class="nav-buttons fixed h-[100vh] flex flex-col justify-center pl-[15px] z-50">
        <ul class="flex flex-col flex-nowrap gap-[10px]">
            <li
                class="
                    nav-button
                    flex flex-row
                    align-middle
                    gap-[10px]
                    whitespace-nowrap
                    rounded-[50px]
                    cursor-pointer
                    overflow-hidden
                    p-[10px]
                    w-[45px]
                    h-[45px]
                    hover:w-[100%]
                    max-w-[140px]
                    shadow-md
                    text-center
                    active:bg-blue-800
                "
                v-for="(menu, i) in menus"
                :key="menu.title"
                @click="
                    changePage(menu.id);
                "
                :class="{ 'bg-blue-700': selectedNavButton === i }"
            >
                <div class="w-[70px] p-[3px]">
                    <Icon :size="20" :name="menu.icon" :style="selectedNavButton === i ? `fill: #fff !important;` : ``" />
                </div>
                <span class="pr-[10px]">{{ menu.title }}</span>
            </li>
        </ul>
    </div>
    <div class="mobile-button-toggle fixed top-10px right-10px z-50">
        <div class="bg-blue-700 bg-opacity-0 duration-300 rounded-[50%]" :class="{ 'bg-opacity-100': showMobile }" @click="showMobile = !showMobile">
            <Icon v-show="!showMobile" :size="30" name="menu" />
            <Icon v-show="showMobile" :size="30" name="x" color="#fff" />
        </div>
    </div>
    <div
        class="mobile-drawer fixed h-[100%] top-0 left-0 z-50 flex flex-col gap-[10px] justify-center items-center w-240px bg-gray-100 border-r-gray-300 border-width-1px"
        :class="{ 'mobile-drawer-show': showMobile }"
    >
        <ul class="flex flex-col gap-10px">
            <li
                class="flex flex-row align-middle gap-[10px] whitespace-nowrap rounded-[50px] cursor-pointer overflow-hidden p-[10px] h-[45px] hover:w-[100%] max-w-[140px] shadow-md text-center"
                v-for="(menu, i) in menus"
                :key="menu.title"
                @click="
                    changePage(menu.id);
                "
                :class="{ 'bg-blue-700 text-light-50': selectedNavButton === i }"
            >
                <div class="w-[70px] p-[3px]">
                    <Icon :size="20" :name="menu.icon" :style="selectedNavButton === i ? `fill: #fff !important;` : ``" />
                </div>
                <span class="pr-[10px]">{{ menu.title }}</span>
            </li>
        </ul>
    </div>
    <div
        @click="showMobile = !showMobile"
        class="fixed top-0 left-0 w-[100%] h-[100%] z-20 bg-dark-50 bg-opacity-60 duration-300"
        :class="{ 'visible opacity-100': showMobile, 'invisible opacity-0': !showMobile }"
    ></div>
</template>
<script>
import { ref } from '@vue/reactivity';
import Icon from './../Icon/Icon.vue';
import { onMounted } from '@vue/runtime-core';
export default {
    name: 'NavButtons',
    components: { Icon },
    setup() {
        const showMobile = ref(false);
        const selectedNavButton = ref(0);
        const menus = [
            {
                icon: 'home',
                title: 'Home',
                id: 'hero',
            },
            {
                icon: 'user',
                title: 'About',
                id: 'About-Page',
            },
            {
                icon: 'file',
                title: 'Experience',
                id: 'experience-content',
            },
            {
                icon: 'book',
                title: 'Portfolio',
                id: 'portfolio-page-content',
            },
            {
                icon: 'envelope',
                title: 'Contact Me',
                id: 'contact-page-content',
            },
        ];

        const isScrolledIntoView = (elemID) => {
            return elemID.offsetTop <= ( window.scrollY + (window.innerHeight - (window.innerHeight * 0.50)) );
        };

        const setNavButtonOnScroll = (elementID) => {
            let menuKey = menus.findIndex((x) => x.id === elementID);
            selectedNavButton.value = menuKey;
        };

        onMounted(() => {
            window.addEventListener('resize', () => {
                if (window.innerWidth > 683 && showMobile.value === true) {
                    showMobile.value = false;
                }
            });

            window.addEventListener('scroll', () => {
                if (isScrolledIntoView(document.getElementById('contact-page-content'))) {
                    setNavButtonOnScroll('contact-page-content');
                } else
                if (isScrolledIntoView(document.getElementById('portfolio-page-content'))) {
                    setNavButtonOnScroll('portfolio-page-content');
                } else if (isScrolledIntoView(document.getElementById('experience-content'))) {
                    setNavButtonOnScroll('experience-content');
                } else
                if (isScrolledIntoView(document.getElementById('About-Page'))) {
                    setNavButtonOnScroll('About-Page');
                } else if (isScrolledIntoView(document.getElementById('hero'))) {
                    setNavButtonOnScroll('hero');
                }
            });
        });

        return {
            menus,
            showMobile,
            selectedNavButton,
            changePage: (id) => {
                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            },
        };
    },
};
</script>
<style lang="scss" src="./NavButtons.scss"></style>