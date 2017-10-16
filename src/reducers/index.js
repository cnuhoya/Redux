import { OKAY, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    random: Math.round(Math.random()*100),
    input_value: 0,
    okay: '숫자를 맞춰주세요.'
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case OKAY:

            if(state.random == state.input_value){
                return Object.assign({}, state, {
                    okay: 'Success'
                });
            }
            else{
                return Object.assign({}, state, {
                    okay: 'Give you one more chance'
                });
            }

        case SET_DIFF:
            return Object.assign({}, state, {
                input_value: action.diff
            });
        default:
            return state;
    }
};

const counterApp = combineReducers({
    counter
});

export default counterApp;
