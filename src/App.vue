<template>
    <NavButtons />
    <HomePage />
    <AboutPage />
    <experience />
    <portfolio />
    <contact />
</template>

<script>
import NavButtons from './components/NavButtons/NavButtons.vue';
import HomePage from './components/pages/Home/Home.vue'
import AboutPage from './components/pages/About/About.vue'
import Experience from './components/pages/Experience/Experience.vue';
import Contact from './components/pages/Contact/Contact.vue';
import Portfolio from './components/pages/Portfolio/Portfolio.vue';
export default {
    name: 'App',
    components: { NavButtons, HomePage, AboutPage, Experience, Contact, Portfolio },
};
</script>
<style lang="scss">
body {
    padding: 0;
}
</style>