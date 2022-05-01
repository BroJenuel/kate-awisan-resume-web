<script setup>
import ContentTitle from './../../../components/ContentTitle/ContentTitle.vue';
import ResumeItem from './../../ResumeItem/ResumeItem.vue';
import { experiences } from './../../../Details/details';
</script>
<template>
    <div id="experience-content" class="experience-content py-50px min-h-100vh">
        <content-title :title="`EXPERIENCE`" />
        <div class="flex flex-row justify-center pt-30px">
            <div class="flex max-w-1200px gap-50px px-80px <md:px-40px <md:flex-col <md:gap-0">
                <div v-for="(experience, i) in experiences" :key="i">
                    <template v-for="xp in experience" :key="xp.company">
                        <ResumeItem :company="xp.company" :year="xp.year" :jobTitle="xp.jobTitle" :summary="xp.summaries" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
