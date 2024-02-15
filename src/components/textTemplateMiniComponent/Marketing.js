import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const Marketing = ({ toggle }) => {
  const MarketingData = [
    {
      id: 0,
      icon: '.',
      heading: 'Company Press Release',
      description: 'Create creative clickbait titles for your products',
      btn: 'New',
    },
    {
      id: 1,
      icon: '.',
      heading: 'Brand Product/Press Release',
      description: 'Write attention-grabbing ad headlines',
      btn: 'New',
    },
    {
      id: 2,
      icon: '.',
      heading: 'Brand Name',
      description: 'Create creative clickbait titles for your products',
      btn: 'New',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Use slice to show only the first 6 items initially, or all items when showAll is true
  const visibleContent = showAll ? MarketingData : MarketingData.slice(0, 6);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4`}>
      <h1 className='font-semibold'>Marketing</h1>
      <p>Professional PR tools for brand and business</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((mark) => (
          <Col key={mark.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className='px-2'>
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">{mark.heading}</CardTitle>
                <CardText className="text-gray-500">{mark.description}</CardText>
                <div className="text-right">
                  <Button className='bg-blue-500 rounded-full px-2 py-1'>&#10024; {mark.btn}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {MarketingData.length > 5 && (
        <div className="text-center mt-4">
          <Button className='bg-black rounded-full border-0' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Marketing;
