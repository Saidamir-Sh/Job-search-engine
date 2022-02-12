import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import {Card} from 'react-bootstrap'
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const SingleJob = ({job}) => {
  
  const [isSelected, setIsSelected] = useState(false)
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(`/company/${job.company_name}`)}  key={job._id} className='job__card mx-auto my-2' style={{ width: '100%', cursor: 'pointer' }}>
      <Card.Body className='py-2 d-flex justify-content-between'>
       <div>
          <div>
            <h6 style={{fontWeight: '600'}}>{job.title}</h6>
            <small className='text-success'>{!job.salary ? <p>Undisclosed salary</p> : job.salary}</small>
          </div>
          <div>
            <BusinessIcon color="disabled"/>
            <small className='text-muted mr-2'> {job.company_name}</small>
            <PlaceIcon color="disabled"/>
            <small className='text-muted'>{!job.candidate_required_location ? <p className='d-inline'>Remote</p> : job.candidate_required_location}</small>
          </div>
       </div>
       <div onClick={() => setIsSelected(!isSelected)}>
          {
          !isSelected ? <BookmarkBorderIcon /> : <BookmarkIcon />
          }
       </div>
      </Card.Body>
    </Card>
  )
}

export default SingleJob;
