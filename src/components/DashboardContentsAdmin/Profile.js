import React, { useContext, useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import imgEquipe2 from "../../Imagens/Imagens Equipe/welber 1.png";
import iconTitle from "../../Imagens/iconTitle.png";
import api from "../../services/api";
import "../Styles/StyleContents/Profile.css";
import { UserContext } from "../useContext/UserContext";
function Profile() {
  const [userData, setUserData] = useContext(UserContext);
  const [user, setUser] = useState([]);
  async function init(){

    try {
      const user = await api.get(`/user/${userData.id}`);
      const {data} = user;
      setUser(data);

    } catch (error) {
      console.log(error);
    }
  }
   
  useEffect(()=>{
    init()

  },[api])
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
              <span id="title-span">Nome: </span>Welber Lima de Brito Guimarães{" "}
            </p>
            <p>
              <span id="title-span">Cargo: </span>Coordenador
            </p>
            <p>
              <span id="title-span">Email: </span> welber.guimaraes@gmail.com
            </p>
            <p>
              <span id="title-span">Telefone: </span>(75) 9 9999 - 9999
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="profile-infos">
          <div className="title-profile">
          <div className="icon-size-edit-1">
        <img alt="" id="imgicon" src={iconTitle}/>
          <h4>Atividade Recente<br/></h4>
          </div>
          </div>
          <div className="profile-itens">
            <p>17/06/2023</p>
            <p>Projeto</p>
            <p>Trabalho de Conclusão de Curso</p>
            <BiEdit id="icon-profile" />
          </div>
          <div className="profile-itens">
            <p>17/06/2023</p>
            <p>Projeto</p>
            <p>Trabalho de Conclusão de Curso</p>
            <BiEdit id="icon-profile" />
          </div>
          <div className="profile-itens">
            <p>17/06/2023</p>
            <p>Projeto</p>
            <p>Trabalho de Conclusão de Curso</p>
            <BiEdit id="icon-profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
