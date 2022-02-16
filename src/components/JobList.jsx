import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchJobs, URL, inputHandlerAction } from '../redux/action';
import Loader from './Loader'
import SingleJob from './SingleJob'

const JobList = () => {
  const jobs = useSelector((state) => state.jobs)
  const isLaoding = useSelector((state) => state.isLoading)
  //const searchQuery = useSelector((state) => state.searchQuery)
  const params = useParams()
  const companyName = params.company_name;


  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchJobs(URL)) 
  //   dispatch(inputHandlerAction('developer'))
  // }, [companyName])

  return (
    <div>
      {
        isLaoding ? <Loader /> : jobs.map((job) => {
          return <SingleJob key={job._id} job={job} />
        })
      }
    </div>
  );
}

export default JobList;
