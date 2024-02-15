import React from 'react'
import { Container, Col, Row } from 'reactstrap'

const Partners = () => {
    

    return (

        <Container>
            <h3 className='text-center text-blue-600 font-bold'>CUSTOMER REVIEWS</h3>
            <h1 className='text-center text-3xl font-bold max-w-[550px] mx-auto my-4 text-black'>
                
            </h1>
            <Row>
                <Col>
                    <div className="picture-gallery rounded">


                        <div className="column">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="picture"></div>
                            ))}
                        </div>
                        <div className="column reverse">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="picture"></div>
                            ))}
                        </div>
                        <div className="column">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="picture"></div>
                            ))}
                        </div>
                        <div className="column reverse">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="picture"></div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>


    );
}

export default Partners;
