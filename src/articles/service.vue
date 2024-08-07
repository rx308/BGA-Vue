<template>

    <article data-an="service" id="service">

        <div class="container">
            
            <div class="headline fx fx-x-between fx-y-start">

                <div class="label-page">услуги</div>

                <h2 class="headline-title h2">Полный спектр бухгалтерских и консультационных услуг</h2>

            </div>

            <div class="list fx">

                <div class="list-item fx fx-x-between" v-for="(item, index) in state.service" :key="index">

                    <div class="item--title fx fx-nowrap fx-y-start">

                        <span class="number">0{{ index + 1 }}</span>

                        <h3 class="h4 title" v-html="item.title"></h3>

                        <img :src="item.image" width="200" height="200" :alt="`image ${index + 1}`" class="image">

                    </div>

                    <div class="item--content fx fx-y-start fx-content-start">

                        <p class="text text18" v-html="item.text"></p>

                        <a :href="item.link" class="link text15 fx fx-y-center">Получить консультацию <img src="/images/arrow-link.svg" width="5" height="8" alt="icon arrow"></a>

                    </div>

                </div>

            </div>

            <div class="box fx" id="service-opacity">

                <div class="info fx">

                    <h3 class="title h3">
                        Прозрачность для клиента:<br/>
                        <span>мы — всегда на связи, <br/>
                        вы — всегда в курсе</span>
                    </h3>

                    <p class="text text18">
                        Мы обеспечиваем полную прозрачность на каждом этапе работы. Клиенты всегда информированы о стадии выполнения их задач, имеют прямой контакт с бухгалтером через Telegram-чат. Это устраняет разрыв в общении 
                        и гарантирует высокое качество обслуживания
                    </p>

                    <a href="/#steps" class="link text15 fx fx-y-center">Подробнее о наших методах работы <img src="/images/arrow-link-dark.svg" width="5" height="8" alt="icon arrow"></a>

                </div>

                <img src="/images/service/service-art.png" width="660" height="525" alt="service art" class="art">

            </div>

        </div>

    </article>

</template>

<script setup>

    import { reactive } from 'vue';

    const state = reactive({

        service: [

            {
                title: 'Ведение <br/>бухгалтерского учета',
                image: '/images/service/service-1.png',
                text: 'Ведение бухгалтерского учета – это организация сбора информации о состоянии имущества и обязательствах компании, а также непрерывное отражение этой информации в специальных бухгалтерских документах',
                link: '#contact'

            },{
                title: 'Налоговый учет <br/>и отчетность',
                image: '/images/service/service-1.png',
                text: 'Ведение бухгалтерского учета – это организация сбора информации о состоянии имущества и обязательствах компании, а также непрерывное отражение этой информации в специальных бухгалтерских документах',
                link: '#contact'

            },{
                title: 'Финансовые <br/>консультации',
                image: '/images/service/service-1.png',
                text: 'Ведение бухгалтерского учета – это организация сбора информации о состоянии имущества и обязательствах компании, а также непрерывное отражение этой информации в специальных бухгалтерских документах',
                link: '#contact'

            },{
                title: 'Подготовка и сдача <br/>отчетности',
                image: '/images/service/service-1.png',
                text: 'Ведение бухгалтерского учета – это организация сбора информации о состоянии имущества и обязательствах компании, а также непрерывное отражение этой информации в специальных бухгалтерских документах',
                link: '#contact'

            },{
                title: 'Восстановление <br/>бухгалтерского учета',
                image: '/images/service/service-1.png',
                text: 'Ведение бухгалтерского учета – это организация сбора информации о состоянии имущества и обязательствах компании, а также непрерывное отражение этой информации в специальных бухгалтерских документах',
                link: '#contact'

            },{
                title: 'Консультационная <br/>поддержка по ведению бизнеса',
                image: '/images/service/service-1.png',
                text: 'Ведение бухгалтерского учета – это организация сбора информации о состоянии имущества и обязательствах компании, а также непрерывное отражение этой информации в специальных бухгалтерских документах',
                link: '#contact'

            },

        ],

    });

</script>