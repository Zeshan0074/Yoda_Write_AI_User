import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { IoIosCheckmark } from "react-icons/io";
const LifetimePlan = () => {
    const prepaidPlans = [
        {
            id: 0,
            heading:'START',
            desc:'Startovací balíček pro uživatele generující malé obsahy',
            price: '84,900',
            duration:'CZK / Month',
            btn: 'Subscribe Now'
        },
    ]

    const additionalInfo = [
         
        [
            
                '150000 words / month',
                'Pro práci s textem',
                '2500 images / month',
                'Pro práci s obrázky',
                '320 minutes / month',
                'Pro přepis nahrávek',
                '5000 characters / month',
                'Pro vytváření Ai hlasů',
                '5 team members',
                'AI Chats Feature',
                'AI Images Feature',
                'AI Voiceover Feature',
                'AI Speech to Text Feature',
                'AI Code Feature',
                'Team Members Option',
                'Přístup ke všem šablonám',
                'Zákaznická podpora'
            
        ],
        
    ];

    return (
        <Container fluid className='mx-auto text-center'>
            <Row>
                {prepaidPlans.map((plan, index) => (
                    <Col sm={6} key={plan.id} className='py-2 mx-auto'>
                        <Card className='hover:scale-105 duration-300 hover:shadow-lg rounded-[50px]  '>
                            <CardBody className='py-20'>
                                <CardTitle className='text-2xl font-bold text-blue-600 py-2'> {plan.heading}</CardTitle>
                                <CardText className='py-1 text-gray-400 '>{plan.desc}</CardText>
                                <CardText className='py-1 text-black text-3xl font-bold hover:text-blue-600'>Kč{plan.price}</CardText>
                                <CardText className='py-1 text-gray-400'>{plan.duration}</CardText>
                                <Button className='bg-[#ff084a] py-3 border-0 rounded-lg px-2'>{plan.btn}</Button>
                                <p className='text-center py-2 rounded-sm text-sm my-2 bg-[#eaf7ef]'>2 měsíce ZDARMA</p>
                                <ul className="list-unstyled mt-3">
                                    {additionalInfo[index].map((item, i) => (
                                        <li key={i} className='flex py-2 text-sm text-gray-400'> <IoIosCheckmark size={20} className='text-green-400'/> {item}</li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default LifetimePlan;
