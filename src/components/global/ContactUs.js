import React from 'react'
import { Col, Container, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaBuilding } from "react-icons/fa";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
const ContactUs = () => {
    return (
        <Container className='py-20'>
            <Row>
                <Col xs={12} lg={6}>
                    <h1 className='text-4xl font-semibold'>Contact With Us</h1>
                    <p className='text-gray-500'>
                        Did not find the answers in our dokumentaci  or need help, do not hesitate to contact us. We are here for you and will be happy to provide you with any support. Just send us an e-mail or use the support request section in your user account.
                    </p>

                    <div>


                        <li className='list-none py-3'>
                            <h1 className='text-xl font-semibold'>Email</h1>
                            <p className='py-2  flex gap-x-3 text-gray-500'> <span><HiOutlineMail size={20} /></span>zdravicko@textory.cz</p>
                        </li>



                        <li className='list-none py-3'>
                            <h1 className='text-xl font-semibold'>Social media</h1>
                            <p className='py-2 flex  text-gray-500'>
                                <span className='flex gap-x-3'>
                                    <FaFacebookSquare size={20} className='hover:cursor-pointer hover:text-gray-800' />
                                    <FaSquareInstagram size={20} className='hover:cursor-pointer hover:text-gray-800 ' />
                                    <FaSquareYoutube size={20} className='hover:cursor-pointer hover:text-gray-800 ' />
                                </span>

                            </p>
                        </li>



                        <li className='list-none py-3'>
                            <h1 className='text-xl font-semibold'>Company</h1>
                            <p className='py-2 flex gap-x-3 text-gray-500 '> <span> <FaBuilding size={20} /></span>Klvaň corps s.r.o. IČ: 09350845</p>
                        </li>


                    </div>


                </Col>
                <Col xs={12} lg={6}>

                    <Form className='shadow-lg p-4'>
                        <h1 className='pb-4 text-2xl '>Feel free to contact us using the form</h1>
                        <FormGroup >
                            <Input
                                type="text"
                                name="first name"
                                id="name"
                                placeholder="First Name"
                                className='shadow px-4 '

                            />
                        </FormGroup>

                        <FormGroup>
                            <Input
                                type="text"
                                name="last name"
                                id="name"
                                placeholder="Last Name"
                                className='shadow px-4 '

                            />
                        </FormGroup>

                        <FormGroup>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                className='shadow px-4 '

                            />
                        </FormGroup>

                        <FormGroup>
                            <Input
                                type="Number"
                                name="phone number"
                                id="phone number"
                                placeholder="Phone Number"
                                className='shadow px-4 '

                            />
                        </FormGroup>

                        <FormGroup>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                rows="5"
                                placeholder="Enter your message"
                                className='shadow px-4 '

                            />
                        </FormGroup>

                        <Button type="submit" className='bg-[#ff084a] border-0 hover:bg-gray-900 text-sm font-semibold px-4 py-2'>
                            Send Message
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactUs
