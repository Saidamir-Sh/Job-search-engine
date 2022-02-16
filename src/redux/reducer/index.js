import { FETCH_COMPANY, FETCH_JOBS, INPUT_CHANGED, FETCH_SAME_JOBS, FETCH_CATEGORY } from "../action";
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
        case FETCH_COMPANY:
            return {
                ...state,
                companyDetails: action.payload,
                isLoading: false,
            }
        case FETCH_SAME_JOBS: 
            return {
                ...state,
                sameJobs: action.payload,
                isLoading: false,
            }
        case FETCH_CATEGORY: 
            return {
                ...state,
                jobs: action.payload,
                isLoading: false,
            }
        default: {
            return state
        }
    }
}