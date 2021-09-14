const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action',
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// (previousState, action) => newState

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const Cakereducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        
        default: return state
    }
}

const IceCreamreducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1,
        }

        default: return state
    }
}

const rootreducer = combineReducers({
    cake: Cakereducer,
    iceCream: IceCreamreducer
})
const store = createStore(rootreducer) // this is where we create our redux store
console.log('Initial state', store.getState()) // printing the initial state
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
