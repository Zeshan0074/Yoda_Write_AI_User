import React, { useState } from "react";
import { Row, Col, Card, Collapse, CardHeader, CardBody, Container } from "reactstrap";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
    <Row>
      <Col>
        <Card className="mb-3 border-0 p-2">
          <CardHeader onClick={toggleAccordion} className="cursor-pointer bg-white">
            <div className="flex items-center justify-between text-blue-600">
              <div className="text-lg">
                {question}
              </div>
              <div>{isOpen ? <LuMinus className='mx-2' /> : <GoPlus className='mx-2' />}</div>
              
            </div>
          </CardHeader>
          <Collapse isOpen={isOpen} >
            <CardBody>
              <div className="list-unstyled text-gray-500">{answer}</div>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
    </Row>
    </Container>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "Co je to AI a jak se dá využít při tvorbě textů?",
      answer: "AI je zkratka pro umělou inteligenci a jde o technologii, která se zaměřuje na vytváření počítačových systémů schopných chovat se podobně jako lidé. AI se může využít k vytváření textů, od automatizovaných překladů až po generování textů. Textory je tu pro to, aby vám pomohl vytvořit úžasné texty bez potřeby trávit hodiny psaním.",
    },
    {
        question: "Chceš si vyzkoušet Textory?",
        answer:"Je to snadné! Stačí se zaregistrovat zde a můžeš využít 2000 slov a až 10 obrázků. Žádné poplatky, jen zábava!",
    },
    {
        question:"Kolik to stojí?",
        answer:"Různé balíčky se liší podle toho, kolik slov a obrázků potřebujete generovat. Můžete platit měsíčně nebo ročně, nebo si vybrat jednorázový balíček podle vašich potřeb. Kompletní ceník naleznete v sekci Ceny."
    },
    {
        question: "Pro koho je služba Textory?",
        answer: `- Pro firmy a podnikatele, kteří chtějí zvýšit kvalitu svých textů a zlepšit svůj marketing
                  - Pro e-shopy, které chtějí zvýšit prodeje a zaujmout své zákazníky
                  - Pro jednotlivce, kteří chtějí zlepšit své psaní a získat nové znalosti v oblasti copywritingu a obsahového marketingu
                  - Pro novináře a PR specialisty, kteří potřebují psát kvalitní texty pro média a tiskové zprávy
                  - Pro každého, kdo chce zlepšit své psaní a získat nové nápady a inspiraci.`
      }
      
    
  ];

  return (
    <Container className="">
      <h3 className='text-center text-blue-600 font-bold'>FREQUENTLY ASKED</h3>
          <h1 className='text-center text-2xl md:text-3xl font-bold max-w-[550px] mx-auto my-4'>
          Got questions? We have you covered.
          </h1>
      <Row>
        <Col className="scroll-effect lg:px-40">
          {faqs.map((faq, index) => (
            <Faq key={index} question={faq.question} answer={faq.answer} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FaqSection;
