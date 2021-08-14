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
        <div class="portfolio-gallery-item gallery flex justify-center">
            <ul>
                <li v-for="(image, i) in images" :key="i">
                    <img
                        :src="require(`@/assets/images/portfolio/${image.image}`)"
                        alt="A Toyota Previa covered in graffiti"
                        loading="lazy"
                    />
                </li>
                <!--  Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens!  -->
                <li></li>
            </ul>
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
        const images = [
            {
                type: 'ads',
                image: 'ads1.png'
            },
            {
                type: 'ads',
                image: 'ads2.png'
            },
            {
                type: 'ads',
                image: 'ads3.png'
            },
            {
                type: 'art',
                image: 'art1.png'
            },
            {
                type: 'art',
                image: 'art2.png'
            },
            {
                type: 'art',
                image: 'art3.jpg'
            },
            {
                type: 'logo',
                image: 'logo.png'
            },
            {
                type: 'logo',
                image: 'logo2.png'
            },
            {
                type: 'logo',
                image: 'logo3.png'
            },
            {
                type: 'others',
                image: 'others1.png'
            },
            {
                type: 'others',
                image: 'others2.png'
            },
            {
                type: 'others',
                image: 'others3.png'
            },
            // {
            //     type: 'others',
            //     image: 'others4.jfif'
            // },
            {
                type: 'others',
                image: 'others5.png'
            },
        ];
        return {
            categories,
            images
        };
    },
};
</script>
<style lang="scss" src="./style.scss">
</style>
