import axios from "axios"
import { createStore } from "vuex"

const store = createStore({
    state:{
        commands: [],
        command: null,
        cart: []
    },
    getters:
    {
        commandPassed: state =>  
        {
            return state.command
        }
    },
    mutations:
    {
        ADD_TO_CART: (state, {product, quantity}) => 
        {
            state.cart.push({
                product,
                quantity
            })
        }
    },

    actions:
    {
        addProductToCart: ({commit}, {product, quantity}) => {
            commit('ADD_TO_CART', {product, quantity})
        }
    },

    modules:{},

})

export default store