<template>
    <div id="portfolio-page-content" class="min-h-100vh pt-40px">
        <content-title title="PORTFOLIO" />
        <div class="flex justify-center">
            <div class="max-w-1000px md:px-100px px-20px">
                <p>The photos below present some of my personal work for my clients and I’ve included some samples of my design for references too.</p>
            </div>
        </div>
        <ul class="flex justify-center gap-20px flex-wrap py-30px px-20px">
            <li v-for="category in categories" :key="category.key" class="font-700 text-dark-50 opacity-70 cursor-pointer hover:opacity-100 duration-300">
                {{ category.name }}
            </li>
        </ul>
        <div class="gallery flex justify-center">
            <div class="max-w-1200px md:px-100px px-20px flex flex-wrap gap-20px justify-center">
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
                <div class="portfolio-gallery-item w-250px overflow-hidden">
                    <img class="w-300px" src="https://kateawisan.ml/assets/img/portfolio/others1.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ContentTitle from '../../ContentTitle/ContentTitle.vue';
export default {
    name: 'Portfolio',
    components: { ContentTitle },
    setup() {
        const categories = [
            {
                name: 'ALL',
                key: 'all',
            },
            {
                name: 'ARTS & ILLUSTRATION',
                key: 'arts',
            },
            {
                name: 'LOGOS',
                key: 'logos',
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
        return {
            categories,
        };
    },
};
</script>
