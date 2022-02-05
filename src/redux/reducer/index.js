import { FETCH_JOBS } from "../action";
import { fetchJobs } from "../action";
import { initialState } from "../store";

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                jobs: action.payload
            }
    }
}