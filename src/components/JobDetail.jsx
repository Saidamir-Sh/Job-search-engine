import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCompany } from '../redux/action';
import { URL } from '../redux/action';
import Interweave from 'interweave';
import { Row, Col } from 'react-bootstrap';
import SimilarJobs from './SimilarJobs';


const JobDetail = () => {

  const params = useParams()
  const dispatch = useDispatch()

  const title = useSelector((state) => state.companyDetails.data[0].title)
  const company = useSelector((state) => state.companyDetails.data[0].company_name)
  const category = useSelector((state) => state.companyDetails.data[0].category)
  const location  = useSelector((state) => state.companyDetails.data[0].candidate_required_location)
  const jobUrl = useSelector((state) => state.companyDetails.data[0].url)
  const salary = useSelector((state) => state.companyDetails.data[0].salary)
  const jobType = useSelector((state) => state.companyDetails.data[0].job_type)
  const description = useSelector((state) => state.companyDetails.data[0].description)

  const companyName = params.company_name

  useEffect(() => {
    dispatch(fetchCompany(URL, companyName))
  }, [companyName])
  return (
    <div>
      <Row className='d-flex flex-row'>
        <Col md={5} className='mx-auto card my-2'>
          <div className='d-flex align-items-center justify-content-between'>
            <div>
              <h3>{title}</h3>
              <p className='text-success'>{!salary ? <p>Undisclosed salary</p> : salary}</p>
              <small className='text-muted'>{category}</small>
            </div>
            <a href={jobUrl} className='btn btn-primary'>
              Apply
            </a>  
          </div> 
          <div></div>
        </Col>
        <Col md={6} className='mx-auto my-2'>
          <SimilarJobs category={category} />
        </Col>
      </Row>
      
    </div>
  );
}
{/* <Interweave content={description} />  */}

export default JobDetail;
