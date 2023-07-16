import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Search from "../../../Imagens/search.png";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "../../Styles/Repositorios.css";
import Tabela from "../../Tabela/Tabela";

const Respositorios = () => {
  const [projetoFiltrado, setProjetoFiltrado] = useState('');
  return (
    <div>
      <Navbar />
      <div className="boxModel">
        <div className="search-content">
          <div className="divInput">
            <div className="modelDrop">
            <select id="clients" name="clients" className="modelDrop">
                  <option  value="ada">BUSCA AVANÇADA</option>  
              </select>
            </div>
            <input
              type="text"
              className="repoSearch"
              placeholder="Buscar Trabalhos..."
              onChange={(e)=>{setProjetoFiltrado(e.target.value)}}
            />
            <button className="Search-btn">
              <img src={Search} alt="Busque Trabalhos" />
            </button>
          </div>
          <div className="dropdown-content">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Ordernar por
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Palavras-Chaves</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Orientador</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Autores</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="container table-edit">
      <Tabela projetoFiltrado={projetoFiltrado}/>
     
      </div>
      <Footer/>
    </div>
  );
};

export default Respositorios;
