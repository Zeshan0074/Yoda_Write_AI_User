import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const Blogs = ({ toggle }) => {
  const blogsData = [
    {
      id: 0,
      icon: '.',
      heading: 'Blogs Title',
      description: "Nobody wants to read boring blog titles, generate catchy blog titles with this tool",
    },
    {
      id: 1,
      icon: '.',
      heading: 'Blogs Section',
      description: 'Write a full blog section (few paragraphs) about a subheading of your article',
    },
    {
      id: 2,
      icon: '.',
      heading: 'Blogs Ideas',
      description: 'The perfect tool to start writing great articles. Generate creative ideas for your next post',
    },
    {
      id: 3,
      icon: '.',
      heading: 'Blogs Intros',
      description: 'Write an intro that will entice your visitors to read more about your article',
    },
    {
      id: 4,
      icon: '.',
      heading: 'Blogs Conclusion',
      description: 'The perfect tool to start writing great articles. Generate creative ideas for your next post',
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleContent = showAll ? blogsData : blogsData.slice(0, 5);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4`}>
      <h1 className='font-semibold'>Blogs Posts</h1>
      <p>Content for generating articles, blog posts</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((blog) => (
          <Col key={blog.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className='px-2'>
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">{blog.heading}</CardTitle>
                <CardText className="text-gray-500">{blog.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {blogsData.length > 5 && (
        <div className="text-center mt-4">
          <Button className='bg-black rounded-full border-0' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Blogs;
