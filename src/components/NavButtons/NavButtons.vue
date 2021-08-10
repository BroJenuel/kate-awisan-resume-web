<template>
    <div class="nav-buttons fixed h-[100vh] flex flex-col justify-center pl-[10px] z-50">
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
                "
                v-for="menu in menus"
                :key="menu.title"
            >
                <div class="w-[70px] p-[3px]">
                    <Icon :size="20" :name="menu.icon" />
                </div>
                <span class="pr-[10px]">{{ menu.title }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Icon from './../Icon/Icon.vue';
export default {
    name: 'NavButtons',
    components: { Icon },
    setup() {
        const menus = [
            {
                icon: 'home',
                title: 'Home',
            },
            {
                icon: 'user',
                title: 'About',
            },
            {
                icon: 'file',
                title: 'Experience',
            },
            {
                icon: 'book',
                title: 'Portfolio',
            },
            {
                icon: 'envelope',
                title: 'Contact Me',
            },
        ];
        return {
            menus,
        };
    },
};
</script>
<style lang="scss" src="./NavButtons.scss"></style>