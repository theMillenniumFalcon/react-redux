const BUY_CAKE = 'BUY_CAKE',

function BuyCake() {
    {
    type: BUY_CAKE;
    info: 'First redux action'
}
}


// (previousState, action) => newState

const previousState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}