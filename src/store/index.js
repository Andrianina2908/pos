import { createStore } from "vuex"

const store = createStore({
    state:{
        command: [
            {
                name: 'Merlot - Vin Rouge',
                prix: 35000
            }
        ]
    },
    getters:
    {
        commandPassed: state =>  
        {
            return state.command
        }
    },
    mutations:{},
    actions:{},
    modules:{},
})

export default store