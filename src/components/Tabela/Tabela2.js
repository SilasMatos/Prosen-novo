import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Email from "../../Imagens/email.png";
import pdf from "../../Imagens/pdf.png";
import api from "../../services/api";
import "../Styles/Tabela.css";
import { UserContext } from "../useContext/UserContext";
const Tabela2 = ({ projetoFiltrado }) => {
  const [projetoFilter, setProjetoFilter] = useState([]);
  const [userData] = useContext(UserContext);

  useEffect(() => {
    async function getProjeto() {
      try {
        const projetos = await api.get("project");
        const { data } = projetos;
        setProjetoFilter(data.projects.slice(0, 8));
      } catch (error) {
        console.log(error);
      }
    }
    getProjeto();
  }, []);

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const handlePDFClick = (projeto) => {
    if (userData.logado) {
      window.open(
        `${process.env.REACT_APP_API}temp/uploads/${projeto.src.key}`,
        "_blank"
      );
    } else {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Esse conteúdo está disponível apenas para usuários logados.",
      });
      
    }
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead id="border">
          <tr>
            <th>Área</th>
            <th>Título</th>
            <th>Autores</th>
            <th>Tipo</th>
            <th>Orientador</th>
            <th>Data</th>
            <th>Email do Líder</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {projetoFilter.length > 0 ? (
            projetoFilter.map((projeto) => (
              <tr key={projeto.id}>
                <td>{projeto.area}</td>
                <td>{projeto.title}</td>
                <td>{projeto.authors}</td>
                <td>{projeto.type}</td>
                <td>{projeto.supervisor}</td>
                <td>{formatDate(projeto.date)}</td>
                <td>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://mail.google.com/mail/?view=cm&to=${projeto.groupLeaderEmail}`}
                  >
                    <img src={Email} alt="Email" />
                  </a>
                </td>
                <td>
                  {userData.logado ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${process.env.REACT_APP_API}temp/uploads/${projeto.src.key}`}
                    >
                      <img src={pdf} alt="PDF" />
                    </a>
                  ) : (
                    <img
                      src={pdf}
                      alt="PDF"
                      onClick={() => handlePDFClick(projeto)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8}>Carregando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela2;