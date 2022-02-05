import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import JobList from './components/JobList';
import SavedJobs from './components/SavedJobs';
import { Container, Col, Row } from "react-bootstrap"
import JobDetail from './components/JobDetail';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { configureStore, persistor } from './redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
        <Container fluid>
          <BrowserRouter>
            <Row className='justify-content-around'>
              <Col md={12}>
                <Routes>
                    <Route exact path='/' element={<Navbar />} />
                </Routes>
              </Col>
              <Col md={3} style={{border: '1px solid green'}}>
                <Routes>
                  <Route path='/' element={<Filter />}/>
                  </Routes>
              </Col>
              <Col md={8}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
