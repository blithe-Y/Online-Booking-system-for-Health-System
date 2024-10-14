import {defineStore} from "pinia";

const useUserStore = defineStore("user", {
    state:() => {
        return{
            visiable:false,
        }
    },
    actions:{

    },
    getters:{

    }
});

export default useUserStore;
