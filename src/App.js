import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import JobList from './components/JobList';
import { Container, Col, Row } from "react-bootstrap"
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Container>
      <Row>
        <Col md={12}>
          <Navbar />
        </Col>
        <Col md={4}>
          <Filter />
        </Col>
        <Col md={7}>
          <JobList />
        </Col>
      </Row>
    </Container>
    </BrowserRouter>
  );
}

export default App;
