<template>

    <Header></Header>
    <Menu></Menu>
    <HomePage></HomePage>
    <Footer></Footer>

</template>

<style>

    @import './styles/main.scss';

</style>

<script setup>

    import { onMounted } from 'vue';

    import Header from './components/header.vue';
    import Menu from './components/menu.vue';
    import Footer from './components/footer.vue';

    import HomePage from './pages/homepage.vue';

    const autoScale = () => {

        document.body.classList.add('resize');

        let width;

        if(window.innerWidth>996){

            width = window.innerWidth/1920;

        } else {

            width = window.innerWidth/320;

        }

        document.documentElement.style.setProperty('--sw', width);

        requestAnimationFrame(() => {

            document.body.classList.add('loaded');

            requestAnimationFrame(() => {

                document.body.classList.remove('resize');

            });
    

        });

    }

    onMounted(() => {

        window.addEventListener('resize', autoScale);
        autoScale();

    });

</script>