import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCompany } from '../redux/action';
import { URL } from '../redux/action';
import Interweave from 'interweave'
import { Row, Col } from 'react-bootstrap'


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
  }, [])
  return (
    <div>
      <Row>
        <Col md={8} className='mx-auto card my-2'>
        <Interweave content={description} />;
        </Col>
      </Row>
      
    </div>
  );
}

export default JobDetail;
