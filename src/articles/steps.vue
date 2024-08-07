<template>

    <article data-an="steps" id="steps">

        <div class="container fx fx-x-between fx-y-start">

            <div class="headline fx fx-content-between">

                <div class="up fx fx-y-start">

                    <div class="label-page">этапы работы</div>

                    <h2 class="title h2">Как мы работаем</h2>

                    <p class="desc">Мы обеспечиваем прозрачность, регулярную отчетность и индивидуальный подход к каждому клиенту</p>

                </div>

                <div class="down fx fx-y-start">

                    <img src="/images/like.svg" width="50" height="50" alt="icon like" class="like">

                    <p class="text18 text">на любом этапе мы гововы предоставить полный отчет и ответить на все ваши вопросы</p>

                </div>

            </div>

            <div class="list fx fx-content-start relative">

                <div class="line"><span class="line-thumb" :style="`height:${state.proc}%`"></span></div>

                <div class="item" v-for="(item, index) in state.steps" :key="index" :class="{'active':state.proc >= ((index + 1) / state.steps.length * 100) }">

                    <h3 class="h4 title">{{ item.title }}</h3>

                    <p class="text18 text" v-html="item.text"></p>

                </div>

            </div>

        </div>

    </article>

</template>

<script setup>

    import { reactive, onMounted, onUnmounted } from 'vue';

    const state = reactive({

        spaceHeight: 0,
        proc: 0,

        steps: [

            {
                title: 'Первичная бесплатная консультация',
                text: 'выясняем ваши потребности и проблемы, генерация<br/> рыбатекста происходит довольно просто: есть несколько<br/> фиксированных наборов фраз и словочетаний'

            },{
                title: 'Составление коммерческого предложения',
                text: 'выясняем ваши потребности и проблемы, генерация<br/> рыбатекста происходит довольно просто: есть несколько<br/> фиксированных наборов фраз и словочетаний'

            },{
                title: 'Подписание договора',
                text: 'выясняем ваши потребности и проблемы, генерация<br/> рыбатекста происходит довольно просто'

            },{
                title: 'Создание чата в Telegram ',
                text: 'для оперативного общения с бухгалтером<br/> в любое время дня и ночи'

            },{
                title: 'Начало работы',
                text: 'регулярные отчеты и консультации<br/> какие то подробности'

            },

        ],

    });

    const tracker = () => {

        const proc = ((state.spaceHeight - document.querySelector('#steps').getBoundingClientRect().y) / state.spaceHeight - 1) * 100;

        console.log(proc);

        if(proc < (1 / state.steps.length * 100)){

            state.proc = (1 / state.steps.length * 100);

        }else if(proc > 100) {

            state.proc = 100;

        }else{

            state.proc = proc;

        }

        resize();

    };

    const resize = () => {

        state.spaceHeight = document.querySelector('#steps').getBoundingClientRect().height - window.innerHeight;

    };

    onMounted(() => {

        document.querySelector('#app').addEventListener('scroll',tracker);
        window.addEventListener('resize',resize);

        resize();

    });

    onUnmounted(() => {

        document.querySelector('#app').removeEventListener('scroll',tracker);
        window.removeEventListener('resize',resize);

    });

</script>