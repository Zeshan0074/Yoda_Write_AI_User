import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { CiCircleCheck } from 'react-icons/ci';
import img from '../../assets/img/AI-dummy.jpg';

const AIVoice = () => {
  

  return (
    <Container>
      <Row className='py-10'>
        <Col sm={12} lg={6} className='px-2 lg:px-12'>
          <h3 className='text-2xl font-bold  py-2'>Create voices using artificial intelligence</h3>
          <p className='text-lg text-gray-500'>Imagine being able to create voices. But not just any voices, but those created with the help of artificial intelligence. You can combine up to 20 voices together to create a completely unique sound experience. It is like painting, but instead of paint and brushes, you use voices and technology. So what do you say? Try it out and immerse yourself in a world of sounds and tones that you have created yourself.</p>

        </Col>

        <Col sm={12} lg={6}>
          <img src={img} alt='img' className='img-fluid rounded py-4' />
        </Col>
      </Row>
    </Container>
  );
};

export default AIVoice;
