import * as actions from './actions';
import { combineReducers } from '@ngrx/store';

export interface State {
    Items: Array<any>;
    Total: number;
}

const initialState: State =  {
    Items: [],
    Total: 0,
};

export function reducer(state = initialState, action: actions.Actions): State {
    console.log(action);
    switch (action.type) {
        case 'SET_ITEMS': {
            return {
                ...state,
                Items: action.payload,
            };
        }
        case 'INCREMENT': {
            const items = state.Items;
            const id = action.payload.id;
            items.filter(x => x.id === action.payload.id).map(x => {
                x.counter = action.payload.counter;
            });
            return {
                ...state,
                Total: state.Total + 1,
                Items: items
            };
        }
        case 'DECREMENT': {
            const items = state.Items;
            state.Items.filter( (item) => item.id === action.payload.id).map(x => {
                x.counter --;
            });
            return {
                ...state,
                Total: state.Total - 1,
                Items: items
            };
        }
        case 'RESET': {
            const items = state.Items;
            items.map(function(item) {
                item.counter = 0;
                return item;
            });
            console.log(state);
            return {
                ...state,
                Total: 0,
                Items: items
            };
        }
        default: {
            return state;
        }

    }
}

