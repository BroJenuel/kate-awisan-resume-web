<template>
    <transition name="fade">
        <div v-show="reactiveData.modalShow" class="modal-show-image flex justify-center items-center" :class="{ 'modal-show': reactiveData.modalShow }">
            <div @click="closeModal()" class="fixed top-[10px] right-[10px] cursor-pointer">
                <icon :color="`#fff`" :name="`x`" :size="50" />
            </div>
            <img :src="reactiveData.selectedImage" class="max-w-700px w-[100vw]" alt="" />
        </div>
    </transition>
    <div id="portfolio-page-content" class="min-h-100vh pt-40px">
        <content-title title="PORTFOLIO" />
        <div class="flex justify-center">
            <div class="max-w-1000px md:px-100px px-20px">
                <p>The photos below present some of my personal work for my clients and I’ve included some samples of my design for references too.</p>
            </div>
        </div>
        <ul class="flex justify-center gap-20px flex-wrap py-30px px-20px">
            <li v-for="category in categories" :key="category.key" class="font-700 text-dark-50 opacity-70 cursor-pointer hover:opacity-100 duration-300" @click="selectCategory(category.key)">
                {{ category.name }}
            </li>
        </ul>
        <div class="portfolio-gallery-item gallery flex justify-center">
            <ul>
                <template v-for="(image, i) in images" :key="i">
                    <li @click="selectImage(image)" v-show="reactiveData.selected === 'all' || reactiveData.selected === image.type">
                        <img :src="image.imageThumbnail" alt="A Toyota Previa covered in graffiti" loading="lazy" />
                        <div class="portfolio-info">
                            <div class="portfolio-links">
                                <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                                    <path
                                        d="M.5 7.5l-.464-.186a.5.5 0 000 .372L.5 7.5zm14 0l.464.186a.5.5 0 000-.372L14.5 7.5zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.368 9.368 0 01-1.449-2.164 5.065 5.065 0 01-.08-.18l-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004a2.107 2.107 0 00.026.063l.078.173a10.368 10.368 0 001.61 2.406C2.94 11.652 4.814 13 7.5 13v-1zm-7-4.5l.464.186.004-.008a2.62 2.62 0 01.08-.18 9.368 9.368 0 011.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.367 10.367 0 00-1.61 2.406 6.05 6.05 0 00-.104.236l-.002.004v.001H.035L.5 7.5zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.37 9.37 0 011.449 2.164 4.705 4.705 0 01.08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004a.656.656 0 00-.026-.063 9.094 9.094 0 00-.39-.773 10.365 10.365 0 00-1.298-1.806C12.06 3.348 10.186 2 7.5 2v1zm7 4.5a68.887 68.887 0 01-.464-.186l-.003.008-.015.035-.066.145a9.37 9.37 0 01-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.366 10.366 0 001.61-2.407 6.164 6.164 0 00.104-.236l.002-.004v-.001h.001L14.5 7.5zM7.5 9A1.5 1.5 0 016 7.5H5A2.5 2.5 0 007.5 10V9zM9 7.5A1.5 1.5 0 017.5 9v1A2.5 2.5 0 0010 7.5H9zM7.5 6A1.5 1.5 0 019 7.5h1A2.5 2.5 0 007.5 5v1zm0-1A2.5 2.5 0 005 7.5h1A1.5 1.5 0 017.5 6V5z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </li>
                </template>

                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import ContentTitle from '../../ContentTitle/ContentTitle.vue';
import Icon from '../../Icon/Icon.vue';
export default {
    name: 'Portfolio',
    components: { ContentTitle, Icon },
    setup: () => {
        const reactiveData = reactive({
            selected: 'all',
            selectedImage: '',
            modalShow: false,
        });
        const categories = [
            {
                name: 'ALL',
                key: 'all',
            },
            {
                name: 'RECENT WORKS',
                key: 'recent_works',
            },
            {
                name: 'ARTS & ILLUSTRATION',
                key: 'art',
            },
            {
                name: 'LOGOS',
                key: 'logo',
            },
            {
                name: 'MARKETING ADS',
                key: 'ads',
            },
            {
                name: 'OTHERS',
                key: 'others',
            },
        ];

        const images = [
            {
                type: 'ads',
                imageThumbnail: 'https://i.imgur.com/t3TOJ3Xl.png',
                image: 'https://i.imgur.com/t3TOJ3X.png',
            },
            {
                type: 'ads',
                imageThumbnail: 'https://i.imgur.com/ID24p25l.png',
                image: 'https://i.imgur.com/ID24p25.png',
            },
            {
                type: 'ads',
                imageThumbnail: 'https://i.imgur.com/lrdm1gVl.jpg',
                image: 'https://i.imgur.com/lrdm1gV.jpg',
            },
            {
                type: 'art',
                imageThumbnail: 'https://i.imgur.com/meqLfz8l.png',
                image: 'https://i.imgur.com/meqLfz8.png',
            },
            {
                type: 'art',
                imageThumbnail: 'https://i.imgur.com/3eetTIIl.png',
                image: 'https://i.imgur.com/3eetTII.png',
            },
            {
                type: 'art',
                imageThumbnail: 'https://i.imgur.com/r6SRAiGl.jpg',
                image: 'https://i.imgur.com/r6SRAiG.jpg',
            },
            {
                type: 'logo',
                imageThumbnail: 'https://i.imgur.com/p8zeuE6.png',
                image: 'https://i.imgur.com/p8zeuE6.png',
            },
            {
                type: 'logo',
                imageThumbnail: 'https://i.imgur.com/06WyyPzl.png',
                image: 'https://i.imgur.com/06WyyPz.png',
            },
            {
                type: 'logo',
                image: 'https://i.imgur.com/czirpTW.png',
                imageThumbnail: 'https://i.imgur.com/czirpTWl.png',
            },
            {
                type: 'others',
                image: 'https://i.imgur.com/CgHYvNt.pngg',
                imageThumbnail: 'https://i.imgur.com/CgHYvNtl.png',
            },
            {
                type: 'others',
                image: 'https://i.imgur.com/ioMPvAN.png',
                imageThumbnail: 'https://i.imgur.com/ioMPvANl.png',
            },
            {
                type: 'others',
                image: 'https://i.imgur.com/ZXh0CKx.png',
                imageThumbnail: 'https://i.imgur.com/ZXh0CKxl.png',
            },
            {
                type: 'others',
                image: 'https://i.imgur.com/iATplDQ.png',
                imageThumbnail: 'https://i.imgur.com/iATplDQl.png',
            },
            {
                type: 'others',
                image: 'https://i.imgur.com/6xIAYMn.jpg',
                imageThumbnail: 'https://i.imgur.com/6xIAYMnl.jpg',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/CEcQA08.png',
                imageThumbnail: 'https://i.imgur.com/CEcQA08m.png',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/Xm7rbkV.png',
                imageThumbnail: 'https://i.imgur.com/Xm7rbkVm.png',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/orGFZw3.png',
                imageThumbnail: 'https://i.imgur.com/orGFZw3m.png',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/x9QX7sG.png',
                imageThumbnail: 'https://i.imgur.com/x9QX7sGm.png',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/Ntxfc19.png',
                imageThumbnail: 'https://i.imgur.com/Ntxfc19m.png',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/ZNrhWFW.png',
                imageThumbnail: 'https://i.imgur.com/ZNrhWFWm.png',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/65sJb1J.png',
                imageThumbnail: 'https://i.imgur.com/65sJb1Jm.png',
            },
            {
                type: 'recent_works',
                image: 'https://i.imgur.com/mthbAMp.png',
                imageThumbnail: 'https://i.imgur.com/mthbAMpm.png',
            },
        ];

        return {
            categories,
            images,
            reactiveData,
            selectCategory: (categorySelected) => {
                reactiveData.selected = categorySelected;
                console.log(reactiveData.selected);
            },
            selectImage: (image) => {
                (reactiveData.selectedImage = image.image), (reactiveData.modalShow = true);
                document.body.style.overflow = 'hidden';
            },
            closeModal: () => {
                reactiveData.modalShow = false;
                document.body.style.overflow = 'auto';
            },
        };
    },
};
</script>
<style lang="scss" src="./style.scss"></style>
