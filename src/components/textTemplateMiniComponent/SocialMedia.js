import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const SocialMedia = ({ toggle }) => {
  const SocialMediaData = [
    {
      id: 0,
      icon: '.',
      heading: 'Facebook Ads',
      description: 'Create creative clickbait titles for your products',
      btn: 'New',
    },
    {
      id: 1,
      icon: '.',
      heading: 'Instagram Captions',
      description: 'Write attention-grabbing ad headlines',
      btn: 'New',
    },
    {
      id: 2,
      icon: '.',
      heading: 'Instagram Hashtag Generator',
      description: 'Create a creative clickbait titles for your products',
      btn: 'New',
    },
    {
      id: 3,
      icon: '.',
      heading: 'Social Media Post (Personal)',
      description: 'Design engaging visuals for your social media campaigns',
      btn: 'New',
    },
    {
      id: 4,
      icon: '.',
      heading: 'Social Media Post (Business)',
      description: 'Connect with influencers to promote your brand',
      btn: 'New',
    },
    {
      id: 5,
      icon: '.',
      heading: 'LinkedIn Ads Description',
      description: 'Craft compelling email campaigns to reach your audience',
      btn: 'New',
    },
    {
      id: 6,
      icon: '.',
      heading: 'Facebook Headlines',
      description: 'Develop a strategy for creating engaging video content',
      btn: 'New',
    },
    {
      id: 7,
      icon: '.',
      heading: 'Google Ads Headlines',
      description: 'Explore opportunities for sponsoring relevant events',
      btn: 'New',
    },
    {
      id: 8,
      icon: '.',
      heading: 'Google Ads Description',
      description: 'Collect and showcase testimonials from satisfied customers',
      btn: 'New',
    },
    {
      id: 9,
      icon: '.',
      heading: 'LinkedIn Posts',
      description: 'Create interactive content to boost user engagement',
      btn: 'New',
    },
    {
      id: 10,
      icon: '.',
      heading: 'Twitter Tweets',
      description: 'Launch a hashtag campaign to increase brand visibility',
      btn: 'New',
    },
    {
      id: 11,
      icon: '.',
      heading: 'LinkedIn Ads Headlines',
      description: 'Monitor and analyze the performance of your marketing efforts',
      btn: 'New',
    },
  ];
  const [showAll, setShowAll] = useState(false);

  // Use slice to show only the first 6 items initially, or all items when showAll is true
  const visibleContent = showAll ? SocialMediaData : SocialMediaData.slice(0, 6);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4`}>
      <h1 className='font-semibold'>Social Media</h1>
      <p>Professional PR tools for brand and business</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((media) => (
          <Col key={media.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className='px-2'>
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">{media.heading}</CardTitle>
                <CardText className="text-gray-500">{media.description}</CardText>
                <div className="text-right">
                  <Button className='bg-blue-500 rounded-full px-2 py-1'>&#10024; {media.btn}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {SocialMediaData.length > 6 && (
        <div className="text-center mt-4">
          <Button className='bg-black rounded-full border-0' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default SocialMedia;
