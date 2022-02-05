import { FETCH_JOBS, INPUT_CHANGED } from "../action";
import { initialState } from "../store";

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                jobs: action.payload,
                isLoading : false
            }
        case INPUT_CHANGED: 
            return {
                ...state,
                searchQuery: action.payload,
            }
        default: {
            return state
        }
    }
}