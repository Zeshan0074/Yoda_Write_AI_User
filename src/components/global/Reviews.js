import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReactStars from 'react-rating-stars-component';
import user1 from '../../assets/img/lukas spurney.jpg';
import user2 from '../../assets/img/lubmor kulvan.jpg';

const Reviews = () => {
  const imagePaths = [
    {
      id: 1,
      profilePhoto: user1,
      rating: 5,
      name: 'Lukáš Spurný',
      description: 'MOBILY SPURNÝ s.r.o.',
      feedback:
        'Textory je skvělý nástroj pro každého, kdo potřebuje psát texty, ale nemá na to dostatek času a zkušeností. Chat je taky pecka! Odpověď je obsáhlejší a rychlejší než to hledat na Googlu.',
    },
    {
      id: 2,
      profilePhoto: user2,
      rating: 5,
      name: 'Klubomír Klvaň',
      description: 'ktherm.cz',
      feedback:
        'Kdo by si pomyslel, že umělá inteligence může psát tak skvěle?! Díky synu! Konečně mám čas na to, abych se věnoval tomu, co mě baví nejvíc - sledování vtipných videí na YouTube! 😄',
    },
  ];

  return (
    <Container className='text-white py-24'>
      <Row>
        <Col>
          <h3 className='text-center text-blue-600 font-bold'>CUSTOMER REVIEWS</h3>
          <h1 className='text-center text-3xl font-bold max-w-[550px] mx-auto my-4 text-black'>
            We guarantee that you will be one of our happy customers as well
          </h1>
        </Col>
      </Row>

      <Row className='flex justify-center text-gray-500'>
        {imagePaths.map((item) => (
          <Col lg={6} md={12} className='py-14 px-10' key={item.id}>
            <p>
              <ReactStars
                count={5}
                value={item.rating}
                size={30}
                activeColor='#FFD700'
                isHalf={false}
                edit={false}
              />
            </p>
            <p>{item.feedback}</p>

            <div className='flex'>
              <img src={item.profilePhoto} alt='profilephote' className='w-[50px] rounded-full' />
              <div className='mx-3'>
                <h1 className='font-bold text-black text-lg'>{item.name}</h1>
                <p className=''>{item.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
