export const FETCH_JOBS = 'FETCH_JOBS'
export const URL = 'https://strive-jobs-api.herokuapp.com/jobs?'

export const fetchJobs = (url) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`${url}limit=20&skip=20`)
            if(response.ok) {
                let data = await response.json()
                dispatch({
                    type: FETCH_JOBS,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}