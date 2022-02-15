export const FETCH_JOBS = 'FETCH_JOBS'
export const FETCH_COMPANY = 'FETCH_COMPANY'
export const INPUT_CHANGED = 'INPUT_CHANGED'
export const FETCH_SAME_JOBS = 'FETCH_SAME_JOBS'
export const FETCH_CATEGORY = 'FETCH_CATEGORY'
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
                console.log(data.data)
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

export const fetchSimilarJobs = (url, category) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`${url}category=${category}&limit=10`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: FETCH_SAME_JOBS,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const fetchCategory = (url, category) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`${url}category=${category}&limit=15`)
            if(response.ok) {
                let data = await response.json()
                console.log(data.data)
                dispatch({
                    type: FETCH_CATEGORY,
                    payload: data.data
                })
        }
    } catch(error) {
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