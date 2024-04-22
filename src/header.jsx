import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Head = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link  className='text-uppercase active'>Home</Nav.Link>
            <Nav.Link  className='text-uppercase'>Pages</Nav.Link>

            <NavDropdown title="DROPDOWN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className='text-uppercase'>LINK TEXt </Nav.Link>
            <Nav.Link className='text-uppercase'>LINK TEXt </Nav.Link>
            <Nav.Link className='text-uppercase'>LINK TEXt </Nav.Link>
            <Nav.Link className='text-uppercase'>long LINK TEXt </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
