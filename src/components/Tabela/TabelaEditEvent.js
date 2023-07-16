import React from "react";
import "../Styles/TabelaDashboard.css";



const TabelaEditEvent = ({eventsUser, onSelectEvent}) => {

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
            <th>Título</th>
            <th>Local</th>
          </tr>
        </thead>
        <tbody>
          {eventsUser.map((event) =>(
            <tr>
            <td><input type="radio" onChange={() => onSelectEvent(event._id)}/></td>
            <td>{formatarDataBrasileira(event.startDate)}</td>
            <td>{event.title}</td>
            <td>{event.local}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaEditEvent;
