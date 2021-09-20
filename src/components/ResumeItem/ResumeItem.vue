<template>
    <div class="pb-20px pl-20px mt-[-2px] border-l-2 border-[var(--primary-color)] relative">
        <div class="absolute w-16px h-16px rounded-[50px] left-[-9px] top-0 bg-light-50 border-2 border-[var(--primary-color)]"></div>
        <h4 class="leading-18px font-600 uppercase mb-10px text-[var(--primary-color)]">{{company}}</h4>
        <h5 class="text-size-16px bg-[#f7f8f9] py-5px px-15px inline-block font-600 mb-10px text-[var(--primary-color)]" v-html="year"></h5>
        <p class="py-10px">
            <em>{{jobTitle}}</em>
        </p>
        <ul>
            <li class="flex" v-for="(sum, i) in summary" :key="i">
                <div class="w-50px pr-10px">
                    <Icon name="handRight" :color="`var(--primary-color)`" />
                </div>
                <p>{{sum}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Icon from './../Icon/Icon.vue';
export default {
    name: 'ResumeItem',
    components: { Icon },
    props: ['company', 'year', 'jobTitle', 'summary']
};
</script>