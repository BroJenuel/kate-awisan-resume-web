<template>
    <NavButtons />
    <HomePage />
    <AboutPage />
</template>

<script>
import NavButtons from './components/NavButtons/NavButtons.vue';
import HomePage from './components/pages/Home/Home.vue'
import AboutPage from './components/pages/About/About.vue'
export default {
    name: 'App',
    components: { NavButtons, HomePage, AboutPage },
};
</script>
<style lang="scss">
body {
    padding: 0;
}
</style>