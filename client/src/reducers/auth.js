import { FETCH_USER_NAME, FETCH_TOKEN } from '../actions/types';
export default (state = {name:'',token:''}, action) => {
    switch (action.type) {
        case FETCH_USER_NAME:
            return { ...state, name: action.name };
        case FETCH_TOKEN:
            return { ...state, token: action.token };
        default:
            return state;
    }
}

