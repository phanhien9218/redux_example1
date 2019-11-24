const { createStore } = require('redux');
const defaultState = {value: 0 };

const reducer =(state = defaultState, action) =>{
    if(action.type == 'UP') return {value: state.value + 1};
    if(action.type =='DOWN') return {value: state.value - 1};
    return state; 
};

const store = createStore(reducer);
store.dispatch({type:'UP'});
const myState = store.getState();

console.log('Sau khi dispatch:' + myState.value);

/**
 * UP, DOWN
 * lam sao de tiep can gia tri cua state
 * lam sao thay doi duoc gia tri cua state
 */