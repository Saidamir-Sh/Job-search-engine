import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchJobs, URL, inputHandlerAction } from '../redux/action';
import Loader from './Loader'

const JobList = () => {
  const jobs = useSelector((state) => state.jobs)
  const isLaoding = useSelector((state) => state.isLoading)
  const searchQuery = useSelector((state) => state.searchQuery)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs(URL)) 
  }, [])

  return (
    <div>
      {
        isLaoding ? <Loader />
      }
    </div>
  );
}

export default JobList;
