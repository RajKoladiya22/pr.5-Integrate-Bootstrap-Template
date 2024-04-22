import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const  TopHead = () => {
  return (
    <Container>
      <Navbar expand="lg" className="">
        <Container>
            <div className="col-xxl-6"><h1>Wetwest</h1></div>
            <div className="col-xxl-6 d-flex">
                <div className="">
                    <h5>PLACERAT:</h5>
                    <p>+00 (123) 456 7890</p>
                </div>
                <div className="px-5">
                    <h5>PLACERAT:</h5>
                    <p>+00 (123) 456 7890</p>
                </div>
            </div>
        </Container>
      </Navbar>
    </Container>
  );
}

