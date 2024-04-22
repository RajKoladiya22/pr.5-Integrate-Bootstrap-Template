import { Container } from "react-bootstrap"

export const Description = () => {
    return (
        <>
            <Container className="py-100">
                <div className="row">
                    <div className="col-lg-3">
                        <p style={{ fontSize: "11px" }}>
                            Aliquet elit vel nisl commodo
                        </p>
                        <h3 style={{ fontSize: "25px" }}>
                            Eget Curabitur Porta Massa Nec Mollis
                        </h3>
                    </div>
                    <div className="col-lg-9">
                        <p style={{ fontSize: "15px" }}>
                            Tincidunt mauris et gravida dui nec consectetur felis vivamus aliquet
                            lectus sit amet augue bibendum ultrices praesent condimentum ultrices justo
                            at commodo vestibulum a hendrerit augue vitae posuere lacus nam placerat congue.
                        </p>
                        <p style={{ fontSize: "15px" }}>
                            Elit quis cursus erat lobortis et ut vehicula velit ante vel ultricies dui porta sit
                            amet morbi at eros suscipit…
                        </p>
                        <button className="btn btn-primary text-uppercase" style={{ fontSize: "15px" }} >
                            Read more  
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}