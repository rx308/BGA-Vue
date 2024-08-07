import { defineStore } from 'pinia';

export default defineStore('default', {

    state: () => ({

        menu: 0,

    }),

    actions: {

        toggleMenu() {

            this.menu = !this.menu;

        },

    }
});