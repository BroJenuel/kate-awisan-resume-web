<template>
    <NavButtons />
    <HomePage />
</template>

<script>
import NavButtons from './components/NavButtons/NavButtons.vue';
import HomePage from './components/pages/Home/Home.vue'
export default {
    name: 'App',
    components: { NavButtons, HomePage },
};
</script>
<style lang="scss">
body {
    padding: 0;
}
</style>