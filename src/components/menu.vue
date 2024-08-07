<template>

    <div id="menu" :class="{'active':store.menu}">

        <div class="container fx">

            <div class="list fx">

                <a href="#about" @click="store.toggleMenu();">О нас</a>
                <a href="#service" @click="store.toggleMenu();">Услуги</a>
                <a href="#service-opacity" @click="store.toggleMenu();">Прозрачность</a>
                <a href="#excellence" @click="store.toggleMenu();">Преимущества</a>
                <a href="#steps" @click="store.toggleMenu();">Этапы работы</a>
                <a href="#review" @click="store.toggleMenu();">Отзывы</a>

            </div>

            <div class="list-phones fx">

                <a href="tel:+971566797475" class="phone">+ 971 (566) 79-74-75</a>

                <a href="tel:+79137631111" class="phone">+7 (913) 763-1111</a>

            </div>

        </div>

    </div>

</template>

<script setup>

    import useStore from '@/store/main.js';

    const store = useStore(); 

</script>