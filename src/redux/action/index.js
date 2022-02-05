export const FETCH_JOBS = 'FETCH_JOBS'
export const FETCH_COMPANY = 'FETCH_COMPANY'
export const INPUT_CHANGED = 'INPUT_CHANGED'
export const URL = 'https://strive-jobs-api.herokuapp.com/jobs?'

export const fetchJobs = (url) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`${url}limit=20&skip=20`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: FETCH_JOBS,
                    payload: data.data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchCompany = (url, companyName) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`${url}company=${companyName}`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: FETCH_COMPANY,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const inputHandlerAction = (query) => {
    return {
        type: INPUT_CHANGED,
        payload: query
    }
}