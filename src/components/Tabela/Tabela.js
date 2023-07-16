import React, { useEffect, useState } from "react";
import "../Styles/Tabela.css";
import Email from "../../Imagens/email.png";
import pdf from "../../Imagens/pdf.png";
import api from "../../services/api";

const Tabela = ({ projetoFiltrado }) => {
  const [Projeto, setProjeto] = useState([]);
  const [projetoInput, setProjetoInput] = useState("");
  const [projetoFilter, setProjetoFilter] = useState("");
  console.log(projetoFiltrado);
  useEffect(() => {
    async function getProjeto() {
      try {
        const projetos = await api.get("project");
        const { data } = projetos;
        setProjeto(data.projects);
        console.log(projetoFilter);
      } catch (error) {
        console.log(error);
      }
    }
    getProjeto();
  }, [projetoFiltrado]);

  useEffect(() => {
    function getSearchProducts() {
      const filteredProjects = Projeto.filter(
        (projeto) =>
          projeto.title.toLowerCase().includes(projetoFiltrado.toLowerCase())
      );
      setProjetoFilter(filteredProjects);
    }
    getSearchProducts();
    console.log(projetoFiltrado);
  }, [Projeto]);

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
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
          {projetoFilter.length < 0 ? (
            Projeto ? (
              Projeto.map((projeto) => (
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
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${process.env.REACT_APP_API}/temp/uploads/${projeto.src.key}`}
                    >
                      <img src={pdf} alt="PDF" />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8}>Carregando...</td>
              </tr>
            )
          ) : projetoFilter ? (
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
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`${process.env.REACT_APP_API}temp/uploads/${projeto.src.key}`}
                  >
                    <img src={pdf} alt="PDF" />
                  </a>
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

export default Tabela;
