import React, { useEffect, useState } from "react";
import NavBar from "../../Navbar/Navbar";
import Banner3 from "../../Section-Banner/Banner3";
import Search from "../../../Imagens/search.png";
import "../../Styles/Eventos.css";
import Dropdown from "react-bootstrap/Dropdown";
import CardEvent from "../../CardEvent/CardEvent";
import Footer from "../../Footer/Footer";
import api from "../../../services/api";
import { all } from "axios";

const Eventos = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    async function getAllEvents(){
      try {
        const events = await api.get('/event');
        const {data} = events;
        setAllEvents(data.events);
      } catch (error) {
        console.error(error);
      }
    }
    getAllEvents();
  },[api]);


  return (
    <div>
      <NavBar />
      <Banner3 />
      <div className="content-container">
        <div className="tx-cont container Section_Prosen">
          <h1>Confira Nossos Eventos</h1>
          <div className="search-content">
            <div className="divInput">
              <input
                type="text"
                className="eventsSearch"
                placeholder="Buscar Eventos..."
              />
              <button className="Search-btn"><img src={Search} alt="Busque Eventos"/></button>
            </div>
            <div className="dropdown-content">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Ordernar por
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="container-fluid edit-cont-cards">
            {allEvents.map((events)=>(
            <div className="divEvent"><CardEvent id={events._id} title={events.title} local={events.local} startDate={events.startDate}/></div>
          ) )}
      </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Eventos;
