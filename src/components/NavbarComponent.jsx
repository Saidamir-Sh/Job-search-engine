import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar className='px-0 mx-0' expand="lg" variant="light" bg="light">
      <Container fluid={true}>
        <Navbar.Brand href="#">CareerIT</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
