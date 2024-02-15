import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { CiCircleCheck } from 'react-icons/ci';
import img from '../../assets/img/AI-dummy.jpg';

const ContenetCreation = () => {
  // Data array of objects
  const features = [
    { id: 1, text: 'Choose from dozens of templates for easy writing.' },
    { id: 2, text: 'The resulting text can be generated in +35 languages.' },
    { id: 3, text: 'Generation of several variants at once incl.' },
    { id: 4, text: 'Easy editing of the generated text thanks to the built-in text editor.' },
    { id: 5, text: 'Export to a .pdf, .doc (Word), .txt file, etc.' },
  ];

  return (
    <Container>
      <Row className='py-10'>
        <Col sm={12} lg={6} className='px-2 lg:px-12'>
          <h1 className='text-2xl font-bold  py-2'>Artificial Intelligence can help create texts </h1>
          <p className='text-lg text-gray-500 '>
            Describe what you want to write about, and artificial intelligence will generate a text for you based on the specified criteria.
          </p>
          <ul>
            {/* Using two map functions for icons and list items */}
            {features.map((feature) => (
              <li key={feature.id} className='flex '>
                <CiCircleCheck size={20} className='text-green-400' />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </Col>

        <Col sm={12} lg={6}>
          <img src={img} alt='img' className='img-fluid rounded py-4' />
        </Col>
      </Row>
    </Container>
  );
};

export default ContenetCreation;
