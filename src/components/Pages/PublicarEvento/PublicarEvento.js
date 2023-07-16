import React from "react";
import Autores from "../../../Imagens/autores.png"
import MoreAuto from "../../../Imagens/moreAuto.png"
import upImage from "../../../Imagens/upImage.png"

const PublicarEvento = () => {
  return (
    <div>
      <h1 className="TextStart">Dados do Evento</h1>
      <div className="container upProject">
        <div className=""></div>
        <form className="form">
          <label>Título:</label>
          <input type="text" />
          <label>Data:</label>
          <input type="text" />
          <label>Horário:</label>
          <input type="text" />
          <div className="d-flex">
            <div className="form-label">
              <div>
                <label>Local:</label>
                <select>
                  <option value="Alguma"></option>
                </select>
              </div>
              <div>
                <label>Modalidade:</label>
                <select>
                  <option value="Alguma"></option>
                </select>
              </div>
            </div>
          </div>
          <label>Descrição:</label>
          <textarea rows="4"></textarea>
        </form>
        
       
      </div>
    </div>
  );
};

export default PublicarEvento;
