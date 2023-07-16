import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import iconTitle from "../../Imagens/iconTitle.png";
import "../Styles/StyleContents/Profile.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Profile() {
  const [projects, setProjects] = useState([]);
  async function getEvents() {
    try {
      const project = await api.get("/event");
      const { data } = project;
      setProjects(data.events);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getEvents();
  },[api]);

  function formatarDataBrasileira(data) {
    const dateObj = new Date(data);

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0"); // Os meses são indexados a partir de 0, então é necessário adicionar +1
    const ano = dateObj.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  return (
    <>
      <div>
        <div className="profile-infos">
          <div className="tx-form">
            <img alt="" id="imgicon" src={iconTitle} />
            <h4>Hist</h4>
          </div>
          {projects
            ? projects.map((project) => (
                <div className="profile-itens">
                  <p>{formatarDataBrasileira(project.startDate)}</p>
                  <p>{project.title}</p>
                  <p>{project.type}</p>
                  <a href={`eventos/${project._id}`}>
                    <AiFillEye id="icon-profile" />
                  </a>  
                </div>
              ))
            : "Carregando"}
        </div>
      </div>
    </>
  );
}

export default Profile;
