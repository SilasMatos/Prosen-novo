import React from "react";
import "../Styles/TabelaDashboard.css";


const TabelaDashboard = ({project, onProjectSelect }) => {

  function formatarDataBrasileira(data) {
    const dateObj = new Date(data);

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses são indexados a partir de 0, então é necessário adicionar +1
    const ano = dateObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead id="border">
          <tr>
            <th>Selecione</th>
            <th>Data</th>
            <th>Área</th>
            <th>Título</th>
            <th>Autores</th>
            <th>Tipo</th>
            <th>Orientador</th>
          </tr>
        </thead>
        <tbody>
          {project.map((project)=>(
            <tr key={project._id}>
            <td><input type="radio" onChange={() => onProjectSelect(project._id)}/></td>
            <td>{formatarDataBrasileira(project.date)}</td>
            <td>{project.area}</td>
            <td>{project.title}</td>
            <td>
              {project.authors}
            </td>
            <td>{project.type}</td>
            <td>{project.supervisor}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDashboard;
