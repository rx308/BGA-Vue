<template>

    <header>

        <div class="container fx fx-x-between fx-y-center desktop">

            <Logo/>

            <div class="list fx">

                <a href="#about">О нас</a>
                <a href="#service">Услуги</a>
                <a href="#service-opacity">Прозрачность</a>
                <a href="#excellence">Преимущества</a>
                <a href="#steps">Этапы работы</a>
                <a href="#review">Отзывы</a>

            </div>

            <div class="list-phones fx">

                <a href="tel:+971566797475" class="phone">+ 971 (566) 79-74-75</a>

                <a href="tel:+79137631111" class="phone">+7 (913) 763-1111</a>

            </div>

        </div>

        <div class="container fx fx-x-between fx-y-center mobile">

            <Logo/>

            <img src="/images/menu.svg" width="32" height="32" alt="icon menu" class="btn-menu" @click="store.toggleMenu();">

        </div>

    </header>

</template>

<script setup>

    import useStore from '@/store/main.js';

    import Logo from '@/components/logo.vue';

    const store = useStore(); 

</script>