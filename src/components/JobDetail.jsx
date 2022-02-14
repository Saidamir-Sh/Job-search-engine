import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCompany } from '../redux/action';
import { URL } from '../redux/action';
import Interweave from 'interweave';
import { Row, Col } from 'react-bootstrap';
import SimilarJobs from './SimilarJobs';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';


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
        <Col md={5} className='mx-auto card my-2 py-3'>
          <div className='d-flex align-items-center justify-content-between'>
            <div>
              <h3>{title}</h3>
              <p className='text-success'>{!salary ? <p>Undisclosed salary</p> : salary}</p>
              <small className='text-muted'>Category : {category}</small>
            </div>
            <a href={jobUrl} className='btn btn-primary'>
              Apply
            </a>  
          </div> 
          <div className='row d-flex justify-content-around my-4'>
            <div className='col-md-3 card d-flex align-items-center flex-column py-3'>
              <BusinessIcon />
              <small>{company}</small>
            </div>
            <div className='col-md-3 card d-flex align-items-center flex-column py-3'>
              <AccessTimeIcon />
              <small>{jobType}</small>
            </div>
            <div className='col-md-3 card d-flex align-items-center flex-column py-3'>
              <PlaceIcon />
              <small>{location}</small>
            </div>
          </div>
          <div className='mt-0' style={{fontSize: '14px'}}>
            <Interweave content={description} />
          </div>
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
