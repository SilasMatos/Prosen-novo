import React, { useContext, useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import api from "../../services/api";
import "../Styles/StyleContents/Profile.css";
import { UserContext } from "../useContext/UserContext";

function Profile() {
  const [userData, setUserData] = useContext(UserContext);
  const [user, setUser] = useState([]);
  const [projects, setProjects] = useState([]);

  async function init() {
    try {
      const user = await api.get(`/user/${userData.id}`);
      const { data } = user;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserProjects() {
    try {
      const projects = await api.get(`/project/${userData.id}`);
      const { data } = projects;
      setProjects(data.projects.slice(0, 3)); // Mostra apenas os 3 primeiros projetos
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    init();
    getUserProjects();
  }, [api]);

  function formatarDataBrasileira(data) {
    const dateObj = new Date(data);

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses são indexados a partir de 0, então é necessário adicionar +1
    const ano = dateObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  return (
    <>
      <div className="content-action">
        <div className="content-avatar">
          <div class="avatar">
            {user && user.file && user.file.key ? (
              <img
                src={`${process.env.REACT_APP_API}temp/uploads/${user.file.key}`}
                alt="Descrição da imagem"
              />
            ) : (
              "carregando"
            )}
          </div>
        </div>
        <div className="content-dados">
          <div>
            <p>
              <span id="title-span">Nome: </span>
              {user.nameUser}{" "}
            </p>
            <p>
              <span id="title-span">Cargo: </span>
              {user.office}
            </p>
            <p>
              <span id="title-span">Email: </span> {user.email}
            </p>
            <p>
              <span id="title-span">Telefone: </span>
              {user.telephone}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="profile-infos">
          <div className="title-profile">
            <h4>Atividade Recente</h4>
          </div>
          {projects.length > 0 ? (
            projects.map((project) => (
              <div className="profile-itens">
                <p>{formatarDataBrasileira(project.date)}</p>
                <p>{project.type}</p>
                <p>{project.linkEvent}</p>
                <a href={`EditarProjeto/${project._id}`}>
                  <BiEdit id="icon-profile" />
                </a>
              </div>
            ))
          ) : (
            <p id="Aviso-edit">Não possui atividades recentes.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
