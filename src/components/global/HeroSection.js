import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import hero from '../../assets/img/hero-section-img.png';
import fb from '../../assets/img/facebook review.png';
import firmy from '../../assets/img/firmy-review.png';
import google from '../../assets/img/google-review.png';
import Typed from 'react-typed';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <Container fluid className='bg-[#070d2b]'>
            <Container className='py-12  text-white'>
                <Row>
                    <Col lg={6} className=' p-4'>
                        <p className='sm:text-center text-5xl py-5 px-2 font-bold'>Artificial Intelligence that will do it for you  <br />

                            <Typed
                                className='text-[#3a7db4] text-5xl'
                                strings={[' ze slov umění,', ' z obrázků příběh,', 'a z chatu zábavu!']}
                                typeSpeed={100}
                                loop={true}
                                backSpeed={10}
                            />
                        </p>
                        <p>Enter a new era of content creation! Thanks to artificial intelligence, you can look forward to excellent blog posts, articles and social media posts effortlessly.</p>

                        <Row className='pt-12 pb-8 sm:mx-auto'>
                            <Link to="/signup">
                            <Button className='bg-[#ff084a] mx-1 my-3 font-bold text-lg px-2 py-1 lg:px-5 lg:py-[10px] flex items-center'> < BsFillLightningChargeFill className='mx-2' /> TRY IT FOR FREE</Button>
                            </Link>
                            <Button className='bg-white text-black mx-1 my-3 font-bold text-lg px-2 py-1 lg:px-5 lg:py-[10px] flex items-center'> <CiCircleQuestion className='mx-2' /> Example of use</Button>
                            <p className='py-3 '> It does not require payment card details</p>
                        </Row>

                        <Row>
                            <p> <span className='text-yellow-500'>&#9733; &#9733; &#9733; &#9733; &#9733;</span>  based on user reviews</p>
                        </Row>

                        <Row className=''>
                            <Col className='my-4'><img src={fb} alt="" className='w-[120px]' /></Col>
                            <Col className='my-4'><img src={google} alt="" className='w-[120px]' /></Col>
                            < Col className='my-4'><img src={firmy} alt="" className='w-[120px]' /></Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <img src={hero} alt="hero section image" className='img-img-fluid w-[570px] h-auto mx-auto' />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HeroSection;

