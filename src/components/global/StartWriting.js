import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
const StartWriting = () => {
  return (
    <Container className='bg-[#070d2b] py-12 my-12 text-center text-white'>
        <Row>
            <Col className=''>
            <h3 className='text-lg font-semibold text-blue-600 text-center'>INCREASE YOUR WRITING PRODUCTIVITY</h3>
            <h1 className='text-[34px] font-bold py-2'>Artificial Intelligence:</h1>
            <h1 className='text-[34px] font-bold py-2'>Start writing faster today</h1>
            <p className='md:px-[100px] lg:px-[250px] text-lg'>It is like having access to a team of copywriting experts who will write quality sales text for you in one click</p>

            <Link to="/signup">
            <Button className='bg-[#ff084a] mx-auto my-3 font-bold text-lg px-3 py-2 lg:px-5 lg:py-[10px] flex items-center border-0 rounded-lg'> TRY IT FOR FREE &#8594;</Button>
            </Link>
            

            <p> 1- It does not require payment card detals  2- dozen of tool for creation  2- support for +35 languages</p>

            </Col>
        </Row>
    </Container>
  )
}

export default StartWriting
