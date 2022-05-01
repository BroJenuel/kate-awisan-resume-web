<template>
    <section id="hero">
        <div class="w-[100%] h-[100%] flex justify-center items-center absolute">
            <div class="w-[100%] min-w-[300px] max-w-[600px] font-semibold p-[30px] flex flex-col gap-[15px]">
                <h1 class="m-0 text-size-[64px] text-[var(--light-dark)]">Kate Awisan</h1>
                <h2 class="typewriting">
                    I'm
                    <span id="typewriter" class="typewrite"> </span>
                </h2>
                <ul class="flex gap-[15px]">
                    <li v-for="link in links" :key="link.icon">
                        <a target="_blank" :href="link.link">
                            <Icon :name="link.icon" :color="`var(--light-dark)`" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
import Icon from './../../Icon/Icon.vue';
import Typewriter from 'typewriter-effect/dist/core';
import { onMounted } from '@vue/runtime-core';
import { links } from '../../../Details/details';
export default {
    name: 'HomePage',
    components: { Icon },
    setup() {
        // mounted
        onMounted(() => {
            const first = 'Customer Service Associate';
            const second = 'Social Media Assistant';
            const third = 'Data Entry Freelancer';

            let typewriter = new Typewriter('#typewriter', {
                loop: true,
                delay: 30,
                deleteSpeed: 10,
            });

            typewriter
                .pauseFor(500)
                .typeString(first)
                .pauseFor(2500)
                .deleteChars(first.length)
                .pauseFor(500)
                .typeString(second)
                .pauseFor(2500)
                .deleteChars(second.length)
                .pauseFor(500)
                .typeString(third)
                .pauseFor(2500)
                .deleteChars(third.length)
                .start();
        });

        return {
            links: links,
        };
    },
};
</script>
<style lang="scss" src="./HomeStyle.scss" />
