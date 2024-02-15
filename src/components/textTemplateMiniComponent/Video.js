import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const Video = ({ toggle }) => {
  const VideoData = [
    {
      id: 0,
      icon: '.',
      heading: 'Facebook Ads',
      description: 'Create creative clickbait titles for your products',
    },
    {
      id: 1,
      icon: '.',
      heading: 'Instagram Captions',
      description: 'Write attention-grabbing ad headlines',
    },
    {
      id: 2,
      icon: '.',
      heading: 'Instagram Hashtag Generator',
      description: 'Create creative clickbait titles for your products',
    },
    {
      id: 3,
      icon: '.',
      heading: 'Social Media Post (Personal)',
      description: 'Design engaging visuals for your social media campaigns',
    },
    {
      id: 4,
      icon: '.',
      heading: 'Social Media Post (Business)',
      description: 'Connect with influencers to promote your brand',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Use slice to show only the first 6 items initially, or all items when showAll is true
  const visibleContent = showAll ? VideoData : VideoData.slice(0, 6);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4`}>
      <h1 className='font-semibold'>Video</h1>
      <p>Professional PR tools for brand and business</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((vid) => (
          <Col key={vid.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className='px-2'>
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">{vid.heading}</CardTitle>
                <CardText className="text-gray-500">{vid.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {VideoData.length > 5 && (
        <div className="text-center mt-4">
          <Button className='bg-black rounded-full border-0' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Video;
