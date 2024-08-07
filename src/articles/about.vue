<template>

    <article data-an="about" id="about">

        <div class="container fx fx-x-between">
            
            <div class="info fx fx-y-start">

                <div class="label-page">кто мы</div>

                <h2 class="title h2">Профессиональные <br/>бухгалтерские <br/>услуги с гарантией <br/>качества</h2>

                <p class="desc">Мы предлагаем русскоязычным клиентам качественные услуги, избегая проблем с коммуникацией и профессионализмом, характерных для других аутсорсинговых компаний</p>


            </div>

            <img src="/images/about-art.png" width="686" height="521" class="art">

            <div class="stats fx fx-x-between fx-y-start">

                <div class="item" v-for="(item, index) of state.stats" :key="index">

                    <span class="value h2">{{  item.value }}</span>

                    <p class="text">{{  item.text }}</p>

                </div>

            </div>

        </div>

    </article>

</template>

<script setup>

    import { reactive } from 'vue';

    const state = reactive({

        stats: [

            {
                value: '250',
                text: 'компаний работают с нами на аутсорсинге'

            },{
                value: '35',
                text: 'сотрудников в штате'

            },{
                value: '3+',
                text: 'более 3 лет наша компания работает на рынке Дубая'

            },{
                value: '15+',
                text: 'более 15 лет опыта в бухгалтерском учете в Праге '

            }

        ],

    });

</script>