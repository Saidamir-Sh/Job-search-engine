import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchSimilarJobs, URL } from '../redux/action';
import Loader from './Loader';
import SingleJob from './SingleJob';

const SimilarJobs = ({category}) => {
    const jobs = useSelector((state) => state.sameJobs.data)
    const isLoading = useSelector((state) => state.isLoading)
    const params = useParams()
    const companyName = params.company_name
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSimilarJobs(URL, category))
    }, [category])

  return (
    <div>
        {
        isLoading ? <Loader /> : jobs.map((job) => {
          return <SingleJob key={job._id} job={job} />
        })
      }
    </div>
  )
}

export default SimilarJobs