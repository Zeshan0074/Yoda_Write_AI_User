import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const PreparedPlans = () => {
    const prepaidPlans = [
        {
            id: 0,
            price: '199',
            wordLimit: '10,000',
            imgLimit: '50',
            mintLimit: '30',
            btn: 'Select Package'
        },
        {
            id: 1,
            price: '499',
            wordLimit: '30,000',
            imgLimit: '100',
            mintLimit: '60',
            btn: 'Select Package'
        },
        {
            id: 2,
            price: '999',
            wordLimit: '100,000',
            imgLimit: '200',
            mintLimit: '120',
            btn: 'Select Package'
        }
    ];

    return (
        <Container className='mx-auto'>
            <Row>
                {prepaidPlans.map((plan) => (
                    <Col sm={12} md={6} lg={4} key={plan.id} className='py-2'>
                        <Card className='hover:scale-105 duration-300 hover:shadow-lg '>
                            <CardBody>
                                <CardTitle className='text-3xl font-bold'>Mini Kč {plan.price}</CardTitle>
                                <CardText className='py-1 text-gray-400'>Words included: <span className='text-blue-600 font-semibold'> {plan.wordLimit}</span></CardText>
                                <CardText className='py-1 text-gray-400'>Image included: <span className='text-blue-600 font-semibold'> {plan.imgLimit}</span></CardText>
                                <CardText className='py-1 text-gray-400'>Minutes included: <span className='text-blue-600 font-semibold'> {plan.mintLimit}</span></CardText>
                                <Button className='bg-[#ff084a] py-3 border-0 rounded-lg px-2'>{plan.btn}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PreparedPlans;
