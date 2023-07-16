import React, { useEffect, useState } from "react";
import "../Styles/TabelaDashboard.css";
import api from "../../services/api";
import { Link } from "react-router-dom";



const TabelaEditProfessor = ({ onProfessorSelect }) => {
  const [Professores, setProfessores] = useState([]);

  async function getProfs(){
    const profs = await api.get('/professores');
    const {data} = profs;
    setProfessores(data.users);
  }

  useEffect(()=>{
    getProfs()
  },[api])

  return (
    <div className="table-wrapper">
      <table>
        <thead id="border">
          <tr>
            <th>Selecione</th>
            <th>Registro</th>
            <th>Nome</th>
            <th>Graduação</th>
          </tr>
        </thead>
        <tbody>
          {Professores.map((professores)=>(
            <tr key={professores._id}>
            <td><input type="radio" onChange={() => onProfessorSelect(professores._id)}/></td>
            <td>{professores.record}</td>
            <td>{professores.nameUser}</td>
            <td>{professores.graduation}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaEditProfessor;
