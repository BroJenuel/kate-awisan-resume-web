<script setup>
import { about, aboutExtend, address, email, degree } from './../../../Details/details';
import Icon from './../../../components/Icon/Icon.vue';
import ContentTitle from './../../../components/ContentTitle/ContentTitle.vue';
</script>
<template>
    <section id="About-Page" class="about-page-section min-h-[100vh] pt-50px flex flex-col justify-center">
        <ContentTitle title="ABOUT" />
        <div class="flex justify-center items-center">
            <div class="max-w-1200px px-20px md:px-80px text-center">
                <p>{{ about }}</p>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <div class="max-w-1000px px-20px flex flex-col md:flex-row items-center gap-30px py-50px md:px-80px">
                <div class="w-250px">
                    <img width="250" class="w-100% max-w-250px" src="./../../../assets/images/profile-img.jpg" alt="" />
                </div>
                <div class="md:max-w-600px">
                    <div class="flex flex-wrap gap-10px <md:justify-center">
                        <ul class="flex flex-col gap-10px w-290px">
                            <li>
                                <div class="flex items-center">
                                    <Icon name="arrowRight" color="var(--primary-color)" />
                                    <span class="whitespace-nowrap"><b>City: </b> {{ address }}</span>
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

                    <div class="py-50px">
                        <p>
                            {{ aboutExtend }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" src="./AboutStyle.scss" />
