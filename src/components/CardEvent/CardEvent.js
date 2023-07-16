import { format } from "date-fns";
import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import imgCard from "../../Imagens/cardImg.png";
import imgCard2 from "../../Imagens/cardImg2.png";

import "../Styles/CardEvent.css";

function CardEvent({ id, title, local, startDate }) {


  function formatarDataBrasileira(data) {
    const dateObj = new Date(data);
    const formattedDate = format(dateObj, "dd/MM/yyyy");
    return formattedDate;
  }
  return (
    <>
    <div className="container-main">
      <div className="Card-div-1">
        <div className="Card-div-2">
          <div>
            <img alt="" id="img-card" src={imgCard} />
          </div>
        </div>
        <div className="contsCard">
          <div className="Card-div-3">
            <h5>{title}</h5>
            <div className="Card-div-4">
              <BsFillCalendarCheckFill id="icon-cards" />{" "}
              <p className="">25/05/2023</p>
            </div>
            <div className="Card-div-5">
              <HiLocationMarker id="icon-cards" /> <p>{local}</p>
            </div>
            <div className="Card-div-6">
              <Link to={`/eventos/${id}`}>
                <button className="btn-cards">SABER MAIS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Card-div-1">
        <div className="Card-div-2">
          <div>
            <img alt="" id="img-card" src={imgCard2} />
          </div>
        </div>
        <div className="contsCard">
          <div className="Card-div-3-edit">
            <h5 id="embreve">Em Breve...</h5>
            <div className="Card-div-4">
              <BsFillCalendarCheckFill id="icon-cards" />{" "}
              <p className="">Indefinida</p>
            </div>
            <div className="Card-div-5">
              <HiLocationMarker id="icon-cards" /> <p>Senai</p>
            </div>
            <div className="Card-div-6">
              <Link to={`/eventos/${id}`}>
                <button className="btn-cards">SABER MAIS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Card-div-1">
        <div className="Card-div-2">
          <div>
            <img alt="" id="img-card" src={imgCard2} />
          </div>
        </div>
        <div className="contsCard">
          <div className="Card-div-3-edit">
            <h5 id="embreve">Em Breve...</h5>
            <div className="Card-div-4">
              <BsFillCalendarCheckFill id="icon-cards" />{" "}
              <p className="">Indefinida</p>
            </div>
            <div className="Card-div-5">
              <HiLocationMarker id="icon-cards" /> <p>Senai</p>
            </div>
            <div className="Card-div-6">
              <Link to={`/eventos/${id}`}>
                <button className="btn-cards">SABER MAIS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Card-div-1">
        <div className="Card-div-2">
          <div>
            <img alt="" id="img-card" src={imgCard2} />
          </div>
        </div>
        <div className="contsCard">
          <div className="Card-div-3-edit">
            <h5 id="embreve">Em Breve...</h5>
            <div className="Card-div-4">
              <BsFillCalendarCheckFill id="icon-cards" />{" "}
              <p className="">Indefinida</p>
            </div>
            <div className="Card-div-5">
              <HiLocationMarker id="icon-cards" /> <p>Senai</p>
            </div>
            <div className="Card-div-6">
              <Link to={`/eventos/${id}`}>
                <button className="btn-cards">SABER MAIS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default CardEvent;
