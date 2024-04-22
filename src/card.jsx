import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import a09 from './img/09.jpg';
import a08 from './img/08.jpg'
import a07 from './img/07.jpg'

export const MyCard = () => {
    return (
        <Container className='py-50'>
            <div className="text-center pb-5">
                <h3>Nulla Pretium Nulla Ligula</h3>
                <p>Placerat ut tincidunt eget varius quis erat quisque euismod</p>
            </div>

           <div className="d-flex justify-content-around">
           <Card style={{ width: '18rem', backgroundColor: "transparent", color: "white", border: "0"}}>
                <Card.Img variant="top" src={a09} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: "transparent", color: "white", border: "0"}}>
                <Card.Img variant="top" src={a08} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', backgroundColor: "transparent", color: "white", border: "0"}}>
                <Card.Img variant="top" src={a07} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

           </div>
            
        </Container>
    );
}

