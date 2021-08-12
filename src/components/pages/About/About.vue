<template>
    <section id="About-Page" class="about-page-section min-h-[100vh] pt-50px flex flex-col justify-center">
        <ContentTitle title="ABOUT" />
        <div class="flex justify-center items-center">
            <div class="max-w-1000px px-20px md:px-80px text-center">
                <p>{{ details }}</p>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <div class="max-w-1000px px-20px flex flex-col md:flex-row items-center gap-30px py-50px md:px-80px">
                <div class="w-200px">
                    <img width="200" class="w-100% max-w-200px" src="./../../../assets/images/profile-img.jpg" alt="" />
                </div>
                <div class="md:max-w-600px">
                    <div class="flex flex-wrap gap-10px <md:justify-center">
                        <ul class="flex flex-col gap-10px w-290px">
                            <li>
                                <div class="flex items-center">
                                    <Icon name="arrowRight" color="var(--primary-color)" />
                                    <span class="whitespace-nowrap"><b>Phone:</b> {{ phone }}</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <Icon name="arrowRight" color="var(--primary-color)" />
                                    <span class="whitespace-nowrap"><b>City: </b> {{ city }}</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="flex flex-col gap-10px w-290px">
                            <li>
                                <div class="flex items-center">
                                    <Icon name="arrowRight" color="var(--primary-color)" />
                                    <span class="whitespace-nowrap"><b>Degree:</b> {{ degree }}</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <Icon name="arrowRight" color="var(--primary-color)" />
                                    <span class="whitespace-nowrap"><b>Email: </b> {{ email }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="py-10px">
                        <p>
                            I have completed my Bachelors degree in Information and Technology at King’s College of the Philippines. I’m from the mountainous region of Cordillera, Luzon-part of the
                            Philippines called the province of Benguet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { about } from './../../../Details/details';
import Icon from './../../../components/Icon/Icon.vue';
import ContentTitle from './../../../components/ContentTitle/ContentTitle.vue'
export default {
    name: 'AboutPage',
    components: { Icon, ContentTitle },
    setup() {
        return {
            details: about,
            phone: '+639496284352',
            city: 'La Trinidad, Benguet, Philippines',
            degree: 'Bachelor’s',
            email: 'kateawisan@gmail.com',
        };
    },
};
</script>
<style lang="scss" src="./AboutStyle.scss" />