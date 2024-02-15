import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const Content = ({ toggle }) => {
  const contentData = [
    {
      id: 0,
      icon: '.',
      heading: 'Article Generator',
      description: "Nobody wants to read boring blog titles, generate catchy blog titles with this tool",
    },
    {
      id: 1,
      icon: '.',
      heading: 'Content Rewriter',
      description: 'Write a full blog section (few paragraphs) about a subheading of your article',
    },
    {
      id: 2,
      icon: '.',
      heading: 'Paragraph Generator',
      description: 'The perfect tool to start writing great articles. Generate creative ideas for your next post',
    },
    {
      id: 3,
      icon: '.',
      heading: 'Talking Points',
      description: 'Write an intro that will entice your visitors to read more about your article',
    },
    {
      id: 4,
      icon: '.',
      heading: 'Pros & Cons',
      description: 'The perfect tool to start writing great articles. Generate creative ideas for your next post',
    },
    {
      id: 5,
      icon: '.',
      heading: 'Summarize Text',
      description: 'Generate unique and engaging content for your blog posts quickly and easily',
    },
    {
      id: 6,
      icon: '.',
      heading: 'Product Description',
      description: 'Style your blog post content effectively with this formatting tool',
    },
    {
      id: 7,
      icon: '.',
      heading: 'Startup Name Generator',
      description: 'Optimize your blog posts for search engines with effective SEO strategies',
    },
    {
      id: 8,
      icon: '.',
      heading: 'Product Name Generator',
      description: 'Enhance your blog posts with high-quality and relevant images',
    },
    {
      id: 9,
      icon: '.',
      heading: 'Acedemic Easy',
      description: 'Increase reader engagement by implementing interactive elements in your blogs',
    },
    {
      id: 10,
      icon: '.',
      heading: 'Creative Stories',
      description: 'Create a well-structured and organized layout for your blog posts',
    },
    {
      id: 11,
      icon: '.',
      heading: 'Grammer Checker',
      description: 'Edit and refine your blog content to make it more impactful and error-free',
    },
    {
      id: 12,
      icon: '.',
      heading: 'Summarize for 2nd Generator',
      description: 'Promote your blog posts effectively to reach a wider audience',
    },
    {
      id: 13,
      icon: '.',
      heading: 'Text Extender',
      description: 'Encourage and manage meaningful comments on your blog posts',
    },
    {
      id: 14,
      icon: '.',
      heading: 'Rewrite With Keywords',
      description: 'Analyze and track the performance of your blog posts using analytics tools',
    },
    {
      id: 15,
      icon: '.',
      heading: 'Business Ideas',
      description: 'Explore ways to monetize your blog and generate revenue',
    },
    {
      id: 16,
      icon: '.',
      heading: 'Tone Changer',
      description: 'Stay updated with the latest blogging trends and incorporate them into your posts',
    },
    {
      id: 17,
      icon: '.',
      heading: 'Dictionary',
      description: 'Understand your target audience and tailor your content to meet their needs',
    },
    
  ];

  const [showAll, setShowAll] = useState(false);

  // Use slice to show only the first 6 items initially, or all items when showAll is true
  const visibleContent = showAll ? contentData : contentData.slice(0, 6);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4 `}>
      <h1 className='font-semibold'>Contents</h1>
      <p>Tools for writing creatives for different moods and tasks</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((content) => (
          <Col key={content.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className='px-2'>
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">
                  {content.heading}
                </CardTitle>
                <CardText className="text-gray-500">{content.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleContent.length > 5 && (
        <div className="text-center mt-4">
          <Button className='bg-black rounded-full border-0' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Content;
