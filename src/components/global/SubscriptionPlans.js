import React, { useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import PreparedPlans from '../subscriptionPlansMiniComponent/PreparedPlans';
import MonthlyPlans from '../subscriptionPlansMiniComponent/MonthlyPlans';
import YearlyPlans from '../subscriptionPlansMiniComponent/YearlyPlan';
import LifetimePlan from '../subscriptionPlansMiniComponent/LifetimePlan';

const SubscriptionPlans = () => {
    const [activePlan, setActivePlan] = useState('monthly'); // Default to 'monthly'

    const handlePlanClick = (plan) => {
        setActivePlan(plan);
    };

    return (
        <Container fluid className='lg:px-8 mx-auto'>
            <Row>
                <Col>
                    <h3 className='text-center text-blue-600 font-bold py-2'>
                        VARIOUS SUBSCRIPTION PLANS
                    </h3>
                    <h1 className='text-center text-4xl font-bold max-w-[550px] mx-auto my-4'>
                        Most Competitive Prices are guaranteed
                    </h1> 
                    <p className='text-center font-semibold pt-2 pb-20'>
                        Do you need a customized plan? Do not hesitate to contact us.
                    </p>
                    <ul className='bg-[#e2f1f8] lg:flex max-w-fit text-center gap-x-4 py-8 mb-20 lg:rounded-full px-4 mx-auto text-blue-700'>
                        <li
                            className={`px-2 hover:bg-blue-600 hover:text-white rounded-full py-1 hover:cursor-pointer ${
                                activePlan === 'prepared' ? 'bg-blue-600 text-white' : ''
                            }`}
                            onClick={() => handlePlanClick('prepared')}
                        >
                            Prepared Plans
                        </li>
                        <li
                            className={`px-2 hover:bg-blue-600 hover:text-white rounded-full py-1 hover:cursor-pointer ${
                                activePlan === 'monthly' ? 'bg-blue-600 text-white' : ''
                            }`}
                            onClick={() => handlePlanClick('monthly')}
                        >
                            Monthly Plans
                        </li>
                        <li
                            className={`px-2 hover:bg-blue-600 hover:text-white rounded-full py-1 hover:cursor-pointer ${
                                activePlan === 'yearly' ? 'bg-blue-600 text-white' : ''
                            }`}
                            onClick={() => handlePlanClick('yearly')}
                        >
                            Yearly Plans
                        </li>
                        <li
                            className={`px-2 hover:bg-blue-600 hover:text-white rounded-full py-1 hover:cursor-pointer ${
                                activePlan === 'lifetime' ? 'bg-blue-600 text-white' : ''
                            }`}
                            onClick={() => handlePlanClick('lifetime')}
                        >
                            Lifetime Plans
                        </li>
                    </ul>

                    {/* Render the active plan based on state */}
                    {activePlan === 'prepared' && <PreparedPlans />}
                    {activePlan === 'monthly' && <MonthlyPlans />}
                    {activePlan === 'yearly' && <YearlyPlans />}
                    {activePlan === 'lifetime' && <LifetimePlan />}

                    <p className='text-center text-xl font-semibold pt-10 pb-6'>
                        Top up your subscription with more credits or start with prepaid Plans credit only
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default SubscriptionPlans;
