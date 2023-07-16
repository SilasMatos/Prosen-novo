import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import loc from "../../Imagens/localização-senai.png";
import logoFooter from "../../Imagens/logo-footer.png";
import '../Styles/Footer.css';
function Footer(){
    return(
        <>
     <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-column">
              <img src={logoFooter} alt="Logo" className="footer-logo" />
              <h1 id='logo-name'>ProSen</h1>
              <p className="footer-text">Os projetos do SENAI abrangem<br/> diversas áreas e setores industriais,<br/> com o objetivo de fornecer soluções customizadas e de alto<br/> impacto para as empresas.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-column">
              <h5 className="footer-heading">O ProSen</h5>
              <ul className="info-list">
               
                <li><a href="#SobreProSen">Sobre o ProSen</a></li>
                <li><a href="#Sobre">Unidade Senai Feira de Santana</a></li>

                <li><a href="#Repositorio">Repositório</a></li>
     
              </ul>
              <h5 className="footer-heading">Faça parte do Senai</h5>
              <ul className="info-list">
                <li><a href="https://www.tecnicosenai.com.br/cursos/">Cursos</a></li>
                <li><a href="https://www.tecnicosenai.com.br/matriculas-mensalidades/">Matrícula</a></li>
                <li><a href="https://www.portaldaindustria.com.br/senai/">Site Senai</a></li>
              </ul>
            </div>
            <div className="row">
          <div className="col-md-12">
            <div className="footer-column">
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/SENAIBahia/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/SENAInacional" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/senaibahia/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/school/senaicimatec/"  target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          </div>
          <div className="col-md-4">
            <div className="footer-column">
              <h5 className="footer-heading">Senai Feira de Santana</h5>
              <ul className="location-info">
              <a target='blank' href='https://www.google.com.br/maps/place/SENAI+Feira+de+Santana/@-12.2338121,-38.9694048,16z/data=!4m6!3m5!1s0x71438165404b7db:0x82474a6ddb9068c0!8m2!3d-12.2310166!4d-38.9693035!16s%2Fg%2F11b7cbghvd?entry=ttu'>
                <img  alt='' src={loc}/>
                </a>
                <li>
                  <FiMapPin id='icon-locarion-info-size' />
                  <span>Av. Eduardo Fróes da Mota, 5000
                    Campo Limpo, Feira de Santana - BA</span>
                </li>
                <li>
                  <BiTimeFive id='icon-locarion-info-timer'/>
                  <span>Segunda a Sexta: 08h - 20h
                    Sábado: 08h - 12h   </span>
                </li>
                <li>
                  <BsTelephone id='icon-locarion-info'/>
                  <span>(75) 3229 - 9100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
        <div class="text-center p-3 footer-button">
    
    <a class="text-white" href="https://mdbootstrap.com/">Copyright © 2023     SENAI - Feira de Santana. Todos os direitos reservados</a>
  </div>
        </>
    )
}
export default Footer;