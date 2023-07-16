import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import "../Styles/CarouselCard.css"
import img1 from "../../Imagens/Automacao.png"
import img2 from "../../Imagens/administracao.png"
import img3 from "../../Imagens/desenvolvimento.png"
import img4 from "../../Imagens/edificacao.png"
import img5 from "../../Imagens/eletecnica.png"
import img6 from "../../Imagens/eletrotecnica.png"
import img7 from "../../Imagens/logistica.png"
import img8 from "../../Imagens/manutencaoauto.png"
import img9 from "../../Imagens/mecanica.png"
import img10 from "../../Imagens/mecatonica.png"
import img11 from "../../Imagens/petro.png"
import img12 from "../../Imagens/qualidade.png"
import img13 from "../../Imagens/quimica.png"
import img14 from "../../Imagens/seguraca.png"
import img15 from "../../Imagens/redeCom.png"
import img16 from "../../Imagens/refri.png"
import { FcPrevious, FcNext } from "react-icons/fc";
const CardCarousel = () => {
 
  const cardsData = [
    { id: 1, title: 'Automação', image: img1 },
    { id: 2, title: 'Administração', image: img2 },
    { id: 3, title: 'Desenvolvimento de Sistemas', image: img3 },
    { id: 4, title: 'Edificações', image: img4 },
    { id: 5, title: 'Eletromecânica', image: img5 },
    { id: 6, title: 'Eletrotécnica', image: img6 },
    { id: 7, title: 'Logística', image: img7 },
    { id: 8, title: 'Manutenção Automotiva', image: img8 },
    { id: 9, title: 'Mecânica', image: img9 },
    { id: 10, title: 'Mecatrônica', image: img10 },
    { id: 11, title: 'Petroquímica', image: img11 },
    { id: 12, title: 'Qualidade', image: img12 },
    { id: 13, title: 'Química', image: img13 },
    { id: 14, title: 'Segurança do Trabalho', image: img14 },
    { id: 15, title: 'Redes de Computadores', image: img15 },
    { id: 16, title: 'Refrigeração e Climatização', image: img16 },
   
  ];


  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };


  const cardGroups = chunkArray(cardsData, 4);

  return (
    <Carousel className='container-fluid' id='corousel' prevIcon={<FcPrevious id='icon-carousel'/>} nextIcon={<FcNext id='icon-carousel' />} >
    {cardGroups.map((cards, index) => (
      <Carousel.Item key={index}>
        <div className='container'>
        <Row>
          {cards.map((card) => (
            <Col key={card.id}>
              <Card>
                <div className='containerCard'>
                  <div>
                    <img src={card.image} alt={card.title} />
                  </div > 
                  <h6>{card.title}</h6>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>

  );
};

export default CardCarousel;