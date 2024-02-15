import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { CiCircleCheck } from 'react-icons/ci';
import img from '../../assets/img/AI-dummy.jpg';

const AIChat = () => {
  // Data array of objects

  return (
    <Container >
      <Row className='py-10'>
        <Col sm={12} lg={6} className='px-2 lg:px-12'>
          <h3 className='text-2xl font-bold  py-2'>AI Chat Assitants</h3>
          <p className='text-lg text-gray-500 '>Choose your chat assistant and start texting with the most experienced in the industry. Chatting will open up endless possibilities for you and getting information will be a piece of cake. So, will you go for it?</p>

          <h3 className='text-2xl font-bold  py-2'> 1. 40 experts in one place</h3>
          <p className='text-lg text-gray-500 '>There are so many options that you will feel like a kid in a candy store! You can chat with advertising masters, marketing geniuses and copywriting kings, but also with a virtual friend, a madman or an adventurer. In short, you choose according to your taste!</p>

          <h3 className='text-2xl font-bold  py-2'>2. Sophisticated options</h3>
          <p className='text-lg text-gray-500 '>our user interface, you can enjoy chatting with an AI assistant in several different chats. Whatever the topic, you have the option to save chats and continue the conversation later. So feel free to start chatting!</p>
        </Col>

        <Col sm={12} lg={6}>
          <img src={img} alt='img' className='img-fluid rounded md:px-6 py-4' />
        </Col>
      </Row>
    </Container>
  );
};

export default AIChat;
