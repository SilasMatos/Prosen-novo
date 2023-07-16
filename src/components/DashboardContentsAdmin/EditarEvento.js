import React from "react";
import Search from "../../Imagens/search.png";
import { Dropdown } from "react-bootstrap";
import TabelaEditEvent from "../Tabela/TabelaEditEvent";
import iconTitle from "../../Imagens/iconTitle.png";


function EditarEvento(){
  

    return(
    <>
   <div className="content-action editProj">
        <div className="">
        <div className="icon-size-edit-1">
        <img alt="" id="imgicon" src={iconTitle}/>
          <h4>Editar Evento<br/></h4>
          </div>
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
        <TabelaEditEvent/>
        <div className="upArq">
          <button>Editar Evento</button>
        </div>
       </div>
       
    </>
    )
}

export default EditarEvento