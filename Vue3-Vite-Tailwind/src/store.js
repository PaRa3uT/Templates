import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        counter: 1,
        name: 'Eduardo',
        isAdmin: true,

        users: [{
            id: 1,
            name: 'qwe'
        }, {
            id: 2,
            name: 'asd'
        }, {
            id: 3,
            name: 'zxc'
        }],

        searchResults: []

    }),

    getters: {
        doubleCount: (state) => state.counter * 2,
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId)
        }
    },

    actions: {
        increment() {
            this.counter++
        },
        async searchUsers(searchText) {
            // this.searchResults = await axios.get('/api/users', { params: { searchText }});
        }
    }
})
