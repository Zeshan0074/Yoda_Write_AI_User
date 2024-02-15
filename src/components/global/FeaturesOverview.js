import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { IoCreateOutline } from 'react-icons/io5';
import { CiImageOn } from 'react-icons/ci';
import { IoIosChatboxes } from 'react-icons/io';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { CiMusicNote1 } from 'react-icons/ci';
import { IoMdCode } from 'react-icons/io';
import ContenetCreation from '../featureOverviewMiniComponent/ContenetCreation';
import GenerateImages from '../featureOverviewMiniComponent/GenerateImages';
import AIChat from '../featureOverviewMiniComponent/AIChat';
import TextSpeach from '../featureOverviewMiniComponent/TextSpeach';
import AIVoice from '../featureOverviewMiniComponent/AIVoice';
import Programming from '../featureOverviewMiniComponent/Programming';

const FeaturesOverview = () => {
  const [activeComponent, setActiveComponent] = useState('ContenetCreation');

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Container sm={12} md={12} className='w-auto'>
      <Row>
        <Col>
          <h3 className='text-center text-sm text-blue-600 font-bold'>
            FEATURES OVERVIEW
          </h3>
          <h1 className='text-center text-4xl font-bold mx-auto my-4'>
            What can artificial intelligence do?
          </h1>

          <ul className='flex text-center text-lg font-bold text-gray-500 py-4 mb-20 mx-auto scroll-container'>
            <li
              className={`content-creation hover:cursor-pointer ${activeComponent === 'ContenetCreation' ? 'active text-blue-500' : ''}`}
              onClick={() => handleClick('ContenetCreation')}
            >
              <IoCreateOutline className='mx-2' />
              Creation of Content
            </li>
            <li
              className={`content-creation hover:cursor-pointer ${activeComponent === 'GenerateImages' ? 'active text-blue-500' : ''}`}
              onClick={() => handleClick('GenerateImages')}
            >
              <CiImageOn className='mx-2' />
              Generating Images
            </li>
            <li
              className={`content-creation hover:cursor-pointer ${activeComponent === 'AIChat' ? 'active text-blue-500' : ''}`}
              onClick={() => handleClick('AIChat')}
            >
              <IoIosChatboxes className='mx-2' />
              AI Chats
            </li>
            <li
              className={`content-creation hover:cursor-pointer ${activeComponent === 'TextSpeach' ? 'active text-blue-500' : ''}`}
              onClick={() => handleClick('TextSpeach')}
            >
              <MdOutlineKeyboardVoice className='mx-2' />
              Speech to Text
            </li>
            <li
              className={`flex justify-center item-center px-3 hover:cursor-pointer ${activeComponent === 'AIVoice' ? 'active text-blue-500' : ''}`}
              onClick={() => handleClick('AIVoice')}
            >
              <CiMusicNote1 className='mx-2' />
              AI Voice
            </li>
            <li
              className={`flex justify-center item-center px-3 hover:cursor-pointer ${activeComponent === 'Programming' ? 'active text-blue-500' : ''}`}
              onClick={() => handleClick('Programming')}
            >
              <IoMdCode className='mx-1' />
              Programming
            </li>
          </ul>

          {activeComponent === 'ContenetCreation' && <ContenetCreation />}
          {activeComponent === 'GenerateImages' && <GenerateImages />}
          {activeComponent === 'AIChat' && <AIChat />}
          {activeComponent === 'TextSpeach' && <TextSpeach />}
          {activeComponent === 'AIVoice' && <AIVoice />}
          {activeComponent === 'Programming' && <Programming />}
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesOverview;
