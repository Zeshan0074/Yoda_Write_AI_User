import React, { useState } from 'react';
import { Col, Container, Row, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const Ecommerce = ({ toggle }) => {
  const ecommerceData = [
    {
      id: 0,
      icon: '.',
      heading: 'Amazon Product Description',
      description: 'Create creative clickbait titles for your products',
      btn: 'New',
    },
    {
      id: 1,
      icon: '.',
      heading: 'Product Benefits',
      description: 'Write attention-grabbing ad headlines',
      btn: 'New',
    },
    {
      id: 2,
      icon: '.',
      heading: 'Selling Product Titles',
      description: 'Craft compelling descriptions for your products',
      btn: 'New',
    },
    {
      id: 3,
      icon: '.',
      heading: 'Product Comparisons',
      description: 'Generate catchy and memorable names for your products',
      btn: 'New',
    },
    {
      id: 4,
      icon: '.',
      heading: 'Product Characteristics',
      description: 'Optimize your e-commerce site for better search engine visibility',
      btn: 'New',
    },
    {
      id: 5,
      icon: '.',
      heading: 'Amazon Product Features',
      description: 'Organize your products into clear and effective categories',
      btn: 'New',
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Use slice to show only the first 6 items initially, or all items when showAll is true
  const visibleContent = showAll ? ecommerceData : ecommerceData.slice(0, 6);

  return (
    <Container className={`${toggle ? 'block' : 'hidden'} py-4`}>
      <h1 className="font-semibold">Ecommerce</h1>
      <p>Powerful tools for e-commerce, listings of your products</p>
      <Row xs="1" sm="2" md="2" lg="3">
        {visibleContent.map((ecom) => (
          <Col key={ecom.id} className="mb-4 hover:scale-105 duration-300 hover:cursor-pointer">
            <Card className="px-2">
              <CardBody>
                <div>
                  <FaStar size={30} color="gold" />
                </div>
                <CardTitle className="font-semibold mt-3 mb-2">{ecom.heading}</CardTitle>
                <CardText className="text-gray-500">{ecom.description}</CardText>
                <div className="text-right">
                  <Button className="bg-blue-500 rounded-full px-2 py-1">&#10024; {ecom.btn}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {ecommerceData.length > 5 && (
        <div className="text-center mt-4">
          <Button className="bg-black rounded-full border-0" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Ecommerce;
