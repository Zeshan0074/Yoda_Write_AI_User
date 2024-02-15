import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { CiCircleCheck } from 'react-icons/ci';
import img from '../../assets/img/AI-dummy.jpg';

const Programming = () => {
  

  return (
    <Container>
      <Row className='py-10'>
        <Col sm={12} lg={6} className='px-2 lg:px-12'>
          <h3 className='text-2xl font-bold  py-2'>Programmer in a few clicks</h3>
          <p className='text-lg text-gray-500 '>Well, this is really the bomb! AI is like an expert programmer on steroids. Just describe what you need to program and she will do it for you. Not only that, the code will also explain how it works. That is pretty crazy, is not it? So, do not you want to try it out?</p>

          <p className='text-sm text-gray-500 '> Artificial intelligence handles ten programming languages from HTML, PHP to Python or JavaScript.</p>

        </Col>

        <Col sm={12} lg={6}>
          <img src={img} alt='img' className='img-fluid rounded py-4' />
        </Col>
      </Row>
    </Container>
  );
};

export default Programming;
