import React from "react";
import "../../Styles/PublicarProjeto.css";
import Autores from "../../../Imagens/autores.png"
import MoreAuto from "../../../Imagens/moreAuto.png"
import upImage from "../../../Imagens/upImage.png"

const PublicarProjeto = () => {
  return (
    <div>
    <h1 className="TextStart">Dados do Projeto</h1>
      <div className="container upProject">
        <div className="">
        </div>
        <form className="form">
          <label>Titulo:</label>
          <input type="text" />
          <label>Área:</label>
          <select>
            <option value="Alguma"></option>
          </select>
          <div className="d-flex">
            <div className="form-label">
              <div>
                <label>Turma:</label>
                <select>
                  <option value="Alguma"></option>
                </select>
              </div>
              <div>
                <label>Turno: </label>
                <select>
                  <option value="Alguma"></option>
                </select>
              </div>
            </div>
          </div>
          <label>Orientador:</label>
          <input type="text" />
          <label>Email do Líder do Grupo:</label>
          <input type="text" />
          <label>Autores:</label>
          <div className="autores">
            <input type="text" />
            <img src={Autores} alt="Adicionar Autores" />
          </div>
          <div className="autores">
            <input type="text" />
          <img src={MoreAuto} alt="Adicionar Autores" />
          </div>
        </form>
        
        <div className="upArq">
            <img src={upImage} alt="Arraste o aquivo aqui ou selecione o arquivo" />
            <button>Editar Evento</button>
        </div>


      </div>
    </div>
  );
};

export default PublicarProjeto;