import React, { useContext } from "react";
import Search from "../../Imagens/search.png";
import { Dropdown } from "react-bootstrap";
import TabelaEditEvent from "../Tabela/TabelaEditEvent";
import api from "../../services/api";
import { UserContext } from "../useContext/UserContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EditarEvento(){

  const [userData, setUserData] = useContext(UserContext);
  const [eventsUser, setEventsUser] = useState([]);
  const [EventId, setEvent] = useState('');
  console.log(EventId);



  async function getEventByUserId(){
    try {
      const event = await api.get(`/event/user/${userData.id}`);
      const {data} = event;
      setEventsUser(data.events);

    } catch (error) {
      console.log('Erro ao obter Eventos')
    }
  }

  useEffect(()=>{
    getEventByUserId();
  },[api]);
  
  console.log(eventsUser);

  const handleEventSelection = (eventId) => {
    setEvent(eventId);
  };

    return(
    <>
   <div className="content-action editProj">
        <div className="">
          <h1>Editar Evento</h1>
          <div className="search-content">
            <div className="divInput">
              <input
                type="text"
                className="eventsSearch"
                placeholder="Editar Evento..."
              />
              <button className="Search-btn"><img src={Search} alt="Edite Eventos"/></button>
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
          </div>
       </div>
       <div>
        <TabelaEditEvent eventsUser={eventsUser} onSelectEvent={handleEventSelection} />
        <div className="upArq">
          <Link to={`/EditarEvento/${EventId}`}>
            <button>Editar Evento</button>
          </Link>
        </div>
       </div>
       
    </>
    )
}

export default EditarEvento