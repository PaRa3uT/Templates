import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => {
        return {
            counter: 0,
            name: 'Eduardo',
            isAdmin: true
        }
    }
})
