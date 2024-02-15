// //                     <p className='mx-auto max-w-[1050px]'>
// //                         <ul className='flex justify-between text-sm scroll-container'>
// //                             <li className='text-template-btn' onClick={() => containToggleHandler('All')}>

// //                                 All templates
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Ads')} className='text-template-btn'>
// //                                 Ads
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Blogs')} className='text-template-btn'>
// //                                 Blog Posts
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Content')} className='text-template-btn'>
// //                                 Content
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Ecommerce')} className='text-template-btn'>
// //                                 Ecommerce
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Emails')} className='text-template-btn'>
// //                                 Emails
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Frameworks')} className='text-template-btn'>
// //                                 Frameworks
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Marketing')} className='text-template-btn'>
// //                                 Marketing
// //                             </li>
// //                             <li onClick={() => containToggleHandler('SocialMedia')} className='text-template-btn'>
// //                                 Social Media
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Video')} className='text-template-btn'>
// //                                 Video
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Websites')} className='text-template-btn'>
// //                                 Websites
// //                             </li>
// //                             <li onClick={() => containToggleHandler('Other')} className='text-template-btn'>
// //                                 Other
// //                             </li>
// //                         </ul>
// //                     </p>



import React, { useState } from 'react';
import Ads from '../textTemplateMiniComponent/Ads';
import { Col, Container, Row } from 'reactstrap';
import Blogs from '../textTemplateMiniComponent/Blogs';
import Content from '../textTemplateMiniComponent/Content';
import Ecommerce from '../textTemplateMiniComponent/Ecommerce';
import Emails from '../textTemplateMiniComponent/Emails';
import Frameworks from '../textTemplateMiniComponent/Frameworks';
import Marketing from '../textTemplateMiniComponent/Marketing';
import SocialMedia from '../textTemplateMiniComponent/SocialMedia';
import Video from '../textTemplateMiniComponent/Video';
import Websites from '../textTemplateMiniComponent/Websites';
import Others from '../textTemplateMiniComponent/Others';

const AllTextTemplates = () => {

  const [activeType, setActiveType] = useState('All');

  const [toggleComp, setToggleComp] = useState([
    { id: 0, toggle: true, type: 'Ads' },
    { id: 1, toggle: true, type: 'Blogs' },
    { id: 2, toggle: true, type: 'Content' },
    { id: 3, toggle: true, type: 'Ecommerce' },
    { id: 4, toggle: true, type: 'Emails' },
    { id: 5, toggle: true, type: 'Frameworks' },
    { id: 6, toggle: true, type: 'Marketing' },
    { id: 7, toggle: true, type: 'SocialMedia' },
    { id: 8, toggle: true, type: 'Video' },
    { id: 9, toggle: true, type: 'Websites' },
    { id: 10, toggle: true, type: 'Other' },
  ]);

  const containToggleHandler = (containType) => {
    if (containType !== 'All') {
      // Toggle only the selected type
      setToggleComp((prevState) =>
        prevState.map((item) => ({
          ...item,
          toggle: item.type === containType ? true : false,
        }))
      );
      setActiveType(containType); // Set the active type
    } else {
      // Toggle all types
      setToggleComp((prevState) =>
        prevState.map((item) => ({
          ...item,
          toggle: true, // Toggle based on the first item's state
        }))
      );
      setActiveType(containType); // Set the active type
    }
  };

  return (
    <Container className='py-20'>
      <Row>
        <Col>
          <h3 className='text-center text-blue-600 font-bold'>
            ARTIFICIAL INTELLIGENCE AND TEXT TEMPLATES
          </h3>
          <h1 className='text-center text-4xl font-bold max-w-[550px] mx-auto my-4'>
            Write quality texts in seconds{' '}
            <span className='disabled line-through'>hours</span> seconds
          </h1>

          <p className='mx-auto max-w-[1050px]'>
            <ul className='flex justify-between text-sm scroll-container'>
              <li className={`text-template-btn ${activeType === 'All' ? 'active bg-black text-white rounded-full' : ''}`} onClick={() => containToggleHandler('All')}>
                All templates
              </li>
              {toggleComp.map((comp) => (
                <li key={comp.id} onClick={() => containToggleHandler(comp.type)} className={`text-template-btn ${activeType === comp.type ? 'active bg-black text-white rounded-full' : ''}`}>
                  {comp.type}
                </li>
              ))}
            </ul>
          </p>

          <Ads toggle={toggleComp.find((comp) => comp.type === 'Ads')?.toggle} />
          <Blogs toggle={toggleComp.find((comp) => comp.type === 'Blogs')?.toggle} />
          <Content toggle={toggleComp.find((comp) => comp.type === 'Content')?.toggle} />
          <Ecommerce toggle={toggleComp.find((comp) => comp.type === 'Ecommerce')?.toggle} />
          <Emails toggle={toggleComp.find((comp) => comp.type === 'Emails')?.toggle} />
          <Frameworks toggle={toggleComp.find((comp) => comp.type === 'Frameworks')?.toggle} />
          <Marketing toggle={toggleComp.find((comp) => comp.type === 'Marketing')?.toggle} />
          <SocialMedia toggle={toggleComp.find((comp) => comp.type === 'SocialMedia')?.toggle} />
          <Video toggle={toggleComp.find((comp) => comp.type === 'Video')?.toggle} />
          <Websites toggle={toggleComp.find((comp) => comp.type === 'Websites')?.toggle} />
          <Others toggle={toggleComp.find((comp) => comp.type === 'Other')?.toggle} />
        </Col>
      </Row>
    </Container>
  );
};

export default AllTextTemplates;
