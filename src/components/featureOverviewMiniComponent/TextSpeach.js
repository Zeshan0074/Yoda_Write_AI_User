import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { CiCircleCheck } from 'react-icons/ci';
import img from '../../assets/img/AI-dummy.jpg';

const TextSpeach = () => {
  

  return (
    <Container>
      <Row className='py-10'>
        <Col sm={12} lg={6} className='px-2 lg:px-12'>
          <h3 className='text-2xl font-bold  py-2'>Converting the spoken word from the recording to text</h3>
          <p className='text-lg text-gray-500 '>Imagine holding a recording of your last call, meeting or interview in your hand and realizing that you would need to have its contents in printed form. What if we told you that we have a solution for you that can convert it for you in no time? And all this without unnecessary stress and loss of time.</p>

          
          <p className='text-sm text-gray-500 '>Artificial intelligence is able to recognize up to 58 world languages from an audio recording and, as needed, translates the resulting text directly into English.</p>

        </Col>

        <Col sm={12} lg={6} className='py-4'>
          <img src={img} alt='img' className='img-fluid rounded py-4'/>
        </Col>
      </Row>
    </Container>
  );
};

export default TextSpeach;
