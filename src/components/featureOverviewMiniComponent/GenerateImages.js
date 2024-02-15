import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { CiCircleCheck } from 'react-icons/ci';
import img from '../../assets/img/AI-dummy.jpg';

const GenerateImages = () => {
  // Data array of objects
  const features = [
    { id: 1, text: 'Create images in the style of the most famous artists' },
    { id: 2, text: 'Great options for setting the resulting image' },
    
  ];

  return (
    <Container>
      <Row className='py-10'>
        <Col sm={12} lg={6} className='px-2 lg:px-12'>
          <h1 className='text-2xl font-bold  py-2'>Artificial intelligence will generate images for you
 </h1>
          <p className='text-lg text-gray-500'>
          Cannot find the right image for your blog or social media post? We have a solution. Let it be drawn to your liking using artificial intelligence. All you have to do is describe what you want in the image, and artificial intelligence will generate an image for you according to your specifications. The more detailed the entry, the more accurate the result.
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

export default GenerateImages;
