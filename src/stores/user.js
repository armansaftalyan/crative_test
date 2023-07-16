import {defineStore} from "pinia";
import {User} from "@/config/api";

export const useUserStore = defineStore('user', {
    state: () => ({
        users: {}
    }),
    getters: {
        getUsers: (state) => state.users,
    },
    actions: {
        async actionGetUser() {
            try {
                const {data} = await this.$axios.get(User.getUsers)
                this.users = data
            } catch (error) {
                return error.response.data
            }
        },
    }
})