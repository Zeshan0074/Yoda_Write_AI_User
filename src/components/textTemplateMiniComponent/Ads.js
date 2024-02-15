import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const Ads = ({ toggle }) => {
  const adsData = [
    {
      id: 0,
      icon: '.',
      heading: 'Clickbait Titles',
      description: 'Create creative clickbait titles for your products',
      btn: 'New',
    },
    {
      id: 1,
      icon: '.',
      heading: 'Ad Headlines',
      description: 'Write attention-grabbing ad headlines',
      btn: 'New',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Use slice to show only the first 6 items initially, or all items when showAll is true
  const visibleContent = showAll ? adsData : adsData.slice(0, 6);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4`}>
      <h1 className="font-semibold">Ads</h1>
      <p>Create ads much faster and be more creative</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((ad) => (
          <Col key={ad.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className="px-2">
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">{ad.heading}</CardTitle>
                <CardText className="text-gray-500">{ad.description}</CardText>
                <div className="text-right">
                  <Button className="bg-blue-500 rounded-full px-2 py-1">&#10024; {ad.btn}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {visibleContent.length > 5 && (
        <div className="text-center mt-4">
          <Button className="bg-black rounded-full border-0" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Ads;
