import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

export const Footup = () => {
    return (
        <div className="">

            <section className="footup-bg">
                <div className="card-overlay"></div>
                <Container className="py-50 d-flex">
                    <div className="col-lg-9">
                        <p style={{fontSize: "22px"}}>Tincidunt Aenean Ligula Nisi Bibendum Vitae Ipsum</p>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-primary">FINIBUS CONSECTETUR »</button>
                    </div>
                </Container>
            </section>

        </div>
    );
}