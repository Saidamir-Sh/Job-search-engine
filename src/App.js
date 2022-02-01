import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import JobList from './components/JobList';
import SavedJobs from './components/SavedJobs';
import { Container, Col, Row } from "react-bootstrap"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import JobDetail from './components/JobDetail';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Row>
          <Col md={12}>
            <Routes>
                <Route exact path='/' element={<Navbar />} />
            </Routes>
          </Col>
          <Col md={4}>
            <Routes>
              <Route path='/' element={<Filter />}/>
              </Routes>
          </Col>
          <Col md={7}>
            <Routes>
              <Route path='/' element={<JobList />}/>
              </Routes>
          </Col>
        </Row>
        <Routes>
            <Route path='/company/:company_name' element={<JobDetail/>} />
            <Route path='/savedjobs' element={<SavedJobs />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
