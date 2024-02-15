import React from 'react';
import { Container, Col, Row, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import writng from '../../assets/img/template-writing.png';
import topic from '../../assets/img/template-choose-topic.png';
import create from '../../assets/img/template-save-edit.png';

const HowAIwork = () => {
  const data = [
    {
      id: 1,
      img: writng,
      heading: 'Select a template for writing',
      description: 'Simply choose a template from the available list to write content for blog posts, emails or website content.',
    },
    {
      id: 2,
      img: topic,
      heading: 'Describe your topic',
      description: 'Tell the artificial intelligence what your article should be about in a few words and it will start writing it for you.',
    },
    {
      id: 3,
      img: create,
      heading: 'Create, edit and save',
      description: 'Our powerful AI tools generate content in seconds and you can then save or export it.',
    },
  ];

  return (
    <Container className='my-24'>
      <Row>
        <Col>
          <h3 className='text-center text-blue-600 font-bold'>HOW DOES ARTIFICIAL INTELLIGENCE WORK?</h3>
          <h1 className='text-center text-3xl font-bold max-w-[550px] mx-auto my-4'>
            Tell the artificial intelligence what you want to write about, and it will write it
          </h1>
        </Col>
      </Row>

      <Row>
        {data.map((item) => (
          <Col key={item.id} lg={4} md={12} className='my-12'>
            <Card>
              <CardImg className='mx-auto w-full' top width='100%' src={item.img} alt={item.heading} />
              <CardBody>
                <CardTitle className='text-xl font-semibold'>{item.heading}</CardTitle>
                <CardText>{item.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowAIwork;
