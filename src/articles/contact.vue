<template>

    <article data-an="contact" id="contact">

        <div class="container fx fx-x-between fx-y-start">

            <div class="headline fx fx-y-start">

                <div class="label-page">свяжитесь с нами </div>
                <h2 class="h2">Мы всегда готовы помочь вашему бизнесу</h2>

            </div>

            <form class="form fx">

                <input 
                
                    name="name" 
                    placeholder="Введите имя" 
                    type="text" 
                    class="input-full" 
                    required 
                    v-model="state.name" 
                    :class="{'err':v$.name?.$errors.length>0}"
                >

                <input 
                
                    name="phone"
                    placeholder="+7" 
                    type="text" 
                    class="input-duo" 
                    required 
                    v-model="state.phone" 
                    :class="{'err':v$.phone?.$errors.length>0}"
                >

                <input 
                    
                    name="email" 
                    placeholder="Электронная почта" 
                    class="input-duo" 
                    type="email" 
                    required 
                    v-model="state.email" 
                    :class="{'err':v$.email?.$errors.length>0}"
                >

                <textarea 

                    name="message" 
                    placeholder="Ваше сообщение" 
                    class="input-full" 
                    required 
                    v-model="state.message" 
                    :class="{'err':v$.message?.$errors.length>0}"

                ></textarea>

                <button class="btn" type="button" @click="submit">Отправить сообщение <img src="/images/arrow.svg" width="32" height="32" alt="icon arrow"></button>

            </form>

        </div>

    </article>

</template>

<script setup>

    import { reactive,computed, onMounted } from 'vue';

    import { useVuelidate } from '@vuelidate/core';
    import { required, email } from '@vuelidate/validators';

    const state = reactive({

        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const rules = computed(() => ({

        name: { required },
        phone: { required },
        email: { required,email },
        message: { required },

    }));

    const v$ = useVuelidate(rules,state, { $lazy: true });

    const submit = async (e) => {

        const isFormCorrect = await v$.value.$validate();

        if (!isFormCorrect){

            return;

        }

        const result = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name: state.name,
                phone: state.phone,
                email: state.email,
                message: state.message,
            })
        });

        if(result?.ok){

            alert('Форма отправлена');

        }else{

            alert('Ошибка отправки формы');

        }

    };

</script>