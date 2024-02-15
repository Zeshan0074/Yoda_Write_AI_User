import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { TfiWorld } from "react-icons/tfi";
import { IoLogoTiktok } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import logo from '../../assets/img/textory-logo.png'
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <Container fluid className='bg-[#070d2b] pt-20 pb-10 text-gray-400 list-none'>
            <Container className='border-b pb-8'>
                <Row>
                    <Col sm={6} md={4} lg={4}>
                        <img src={logo} alt='logo' className='text-white' />
                        <p className='text-gray-400'>
                            Thanks to the use of artificial intelligence and many templates for content creation, you can easily and quickly create texts for your blog, social networks or labels for your products.
                            And all this without unnecessary stress and effort!
                        </p>
                        <p className='text-white py-4'>
                            <TfiWorld />
                        </p>
                    </Col>


                    <Col sm={6} md={4} lg={2}>
                        <h1 className='font-bold text-white py-3'>INFORMATION</h1>
                        <li className='py-1'>Prices</li>
                        <li className='py-1'>FAQs</li>
                        <li className='py-1'>Blogs</li>
                        <li className='py-1'>Nápověda</li>
                    </Col>
                    <Col sm={6} md={4} lg={1}>
                        <h1 className='font-bold text-white py-3'>SITE PAGES</h1>
                        <li className='py-1'>Logins</li>
                        <li className='py-1'>Register</li>
                    </Col>
                    <Col sm={6} md={4} lg={2}>
                        <h1 className='font-bold text-white py-3'>COMPANY</h1>
                        <li className='py-1'>Terminal & Condtions</li>
                        <li className='py-1'>Privacy Policy</li>
                    </Col>
                    <Col lg={3} className=''>
                        <h1 className='font-bold text-white py-3 '>Social Media</h1>
                        <p className='font-bold text-lg text-white'>Follow up on social media to find out the latest updates.</p>
                        <span className='flex gap-x-8 pt-4'>
                            <IoLogoTiktok size={20} className='hover:cursor-pointer hover:text-white ' />
                            <FaYoutube size={20} className='hover:cursor-pointer hover:text-white ' />
                            <FaInstagram size={20} className='hover:cursor-pointer hover:text-white ' />
                            <MdFacebook size={20} className='hover:cursor-pointer hover:text-white' />
                        </span>
                        <p className='text-lg font-bold pt-8 pb-4'>Get Started Today</p>
                        <Link to="/signup">
                        <Button className='mx-1 my-2 flex items-center justify-center bg-[#ff084a] border-0 hover:bg-[#4754c4]'>

                            <p className='mx-1'> SIGN UP NOW</p>
                        </Button>
                        </Link>
                        
                    </Col>

                </Row>
            </Container>


        </Container>
    )
}

export default Footer
