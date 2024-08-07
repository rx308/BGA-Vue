<template>

    <article data-an="utp" id="utp">

        <div class="container fx fx-column fx-y-center">

            <p class="desc">бухгалтерские услуги на аутсорсинге</p>

            <h1 class="title h2">BGA - ваш надежный партнер в бухгалтерском учете и консультациях</h1>

            <div class="teams fx">

                <img :src="item" width="100" height="100" :alt="`team ${index + 1}`" v-for="(item,index) of state.teams" :key="index">

            </div>

            <p class="desc">наши бухгалтеры — русскоязычные профессионалы <br/>с большим опытом работы в Дубае и за его пределами</p>

            <a href="#contact" class="btn">Бесплатная консультация <img src="/images/arrow.svg" width="32" height="32" alt="icon arrow"></a>

            <div class="edge fx fx-x-between">

                <p v-for="(item,index) of state.edge" :key="index"><span class="number">0{{ index + 1 }}</span> <span class="sep">/</span> {{ item }}</p>

            </div>

        </div>

    </article>

</template>

<script setup>

    import { reactive } from 'vue';

    const state = reactive({

        teams: [

            '/images/teams/team-1.png',
            '/images/teams/team-2.png',
            '/images/teams/team-3.png',
            '/images/teams/team-4.png',
            '/images/teams/team-5.png',

        ],

        edge: [

            'прозрачность',
            'регулярная отчетность',
            'индивидуальный подход',
            'профессионализм',

        ]

    });

</script>