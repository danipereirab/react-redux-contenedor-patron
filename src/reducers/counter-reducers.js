import * as types from '../actions/action-types';

const initialState = {
    count: 10 //Valor por defecto que se asignara en la primera ejecución 
};
  
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.INC:
            return {
                ...state,
                count: state.count + 1
            };
        case types.DEC:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state
    }
}