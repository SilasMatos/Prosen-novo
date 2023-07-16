import React, { useContext, useEffect, useState } from "react";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import Profile from "../../DashboardContentsAluno/Profile";
import NavBar from "../../Navbar/Navbar";
import "../../Styles/StyleContents/DashboardAluno.css";
import { UserContext } from "../../useContext/UserContext";

const DashboardAluno = () => {
  const [activeComponent, setActiveComponent] = useState("perfil");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(true);
  const [userData, setUserData] = useContext(UserContext);

  const renderComponent = () => {
    switch (activeComponent) {
      case "perfil":
        return <Profile />;
      default:
        return null;
    }
  };

  async function logoutHandler(e) {
    localStorage.setItem("email_Prosen", "");
    localStorage.setItem("name_Prosen", "");
    localStorage.setItem("id_Prosen", "");
    localStorage.setItem("logado_Prosen", "");
    localStorage.setItem("authAdmin_Prosen", "");
    localStorage.setItem("authStudent_Prosen", "");
    await navigate("/");
    window.location.reload(true);
    e.preventDefault();
  }


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isButtonActive = (componentName) => {
    return activeComponent === componentName ? "nav-button active" : "nav-button";
  };

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
      <NavBar />
      <div className="container">
      <div className="dashboard-opa">
        <div className="">
          <div className="content-avatar-center edit-aluno-container">
          <div class="avatar-w">
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
              <span id="title-span">Nome: </span>{user.nameUser}{" "}
            </p>
            <p>
              <span id="title-span">Cargo: </span>{user.office}
            </p>
            <p>
              <span id="title-span">Email: </span> {user.email}
            </p>
            <p>
              <span id="title-span">Telefone: </span>{user.telephone}
            </p>
          </div>
        </div>
        <div className="nav-button-position-side">
          <button className="nav-button-exit" onClick={logoutHandler}>
            Sair Da Conta <BiExit id="icon-exit" />
          </button>
          </div>
        </div>
        <div className="content">{renderComponent()}</div>
        
      </div>
      </div>
    </>
  );
};

export default DashboardAluno;
