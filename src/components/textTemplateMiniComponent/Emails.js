import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const Emails = ({ toggle }) => {
  const EmailData = [
    {
      id: 0,
      icon: '.',
      heading: 'Welcome Email',
      description: 'Create a creative clickbait title for your products',
      btn: 'New',
    },
    {
      id: 1,
      icon: '.',
      heading: 'Cold Emails',
      description: 'Write an attention-grabbing ad headline',
      btn: 'New',
    },
    {
      id: 2,
      icon: '.',
      heading: 'Follow-Up Email',
      description: 'Write an attention-grabbing ad headline',
      btn: 'New',
    },
    {
      id: 3,
      icon: '.',
      heading: 'Email Subject Lines',
      description: 'Write an attention-grabbing ad headline',
      btn: 'New',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Use slice to show only the first 6 items initially, or all items when showAll is true
  const visibleContent = showAll ? EmailData : EmailData.slice(0, 6);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4 `}>
      <h1 className='font-semibold'>Emails</h1>
      <p>Creative templates for email creation</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((mail) => (
          <Col key={mail.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className='px-2'>
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">{mail.heading}</CardTitle>
                <CardText className="text-gray-500">{mail.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {EmailData.length > 5 && (
        <div className="text-center mt-4">
          <Button className='bg-black rounded-full border-0' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Emails;
