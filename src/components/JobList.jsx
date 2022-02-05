import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchJobs, URL } from '../redux/action';

const JobList = () => {
  const jobs = useSelector((state) => state.jobs)
  const dispatch = useDispatch()

  console.log(jobs)
  useEffect(() => {
    dispatch(fetchJobs(URL))
   
  }, [])

  return (
    <div>
        {
        jobs.map((job) => <h1>Hello</h1>)
        }
    </div>
  );
}

export default JobList;
