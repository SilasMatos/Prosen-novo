import React, { useState } from "react";
import NavBar from "../../Navbar/Navbar";
import { BiExit, BiMenu } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../../Styles/Dashboard.css";
import Profile from "../../DashboardContents/Profile";
import PublicarEvento from "../../DashboardContents/PublicarEvento";
import PublicarProjeto from "../../DashboardContents/PublicarProjeto";
import EditarProjeto from "../../DashboardContents/EditarProjeto";
import EditarEvento from "../../DashboardContents/EditarEvento";
import Historico from "../../DashboardContents/Historico";
import { FiX, FiXCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { IconContext } from "react-icons";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("perfil");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(true);

  const renderComponent = () => {
    switch (activeComponent) {
      case "perfil":
        return <Profile />;
      case "publicar-projeto":
        return <PublicarProjeto />;
      case "publicar-evento":
        return <PublicarEvento />;
      case "editar-projeto":
        return <EditarProjeto />;
      case "editar-evento":
        return <EditarEvento />;
      case "historico":
        return <Historico />;
        case "historico":
        return <Historico />;
      default:
        return null;
    }
  };

  async function logoutHandler(e) {
    localStorage.setItem("email_Prosen", "");
    localStorage.setItem("name_Prosen", "");
    localStorage.setItem("id_Prosen", "");
    localStorage.removeItem("logado_Prosen");
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

  return (
    <>
      <NavBar />
      <div className="dashboard">
        <div className={`sidebar ${showMenu ? "show" : ""}`}>
          <FiXCircle
            className={`menu-toggle-icon ${showMenu ? "show" : ""}`}
            onClick={toggleMenu}
          />
          <button className="nav-button" onClick={() => setActiveComponent("perfil")}>
            Perfil
          </button>
          <button className="nav-button" onClick={() => setActiveComponent("publicar-projeto")}>
            Publicar Projeto
          </button>
          <button className="nav-button" onClick={() => setActiveComponent("publicar-evento")}>
            Publicar Evento
          </button>
          <button className="nav-button" onClick={() => setActiveComponent("editar-projeto")}>
            Editar Projeto
          </button>
          <button className="nav-button" onClick={() => setActiveComponent("editar-evento")}>
            Editar Evento
          </button>
          <button className="nav-button" onClick={() => setActiveComponent("historico")}>
            Histórico
          </button>
          <button className="nav-button-exit" onClick={logoutHandler}>
            Sair Da Conta <BiExit id="icon-exit" />
          </button>
        </div>
        <div className="content">{renderComponent()}</div>
        <div className={`mobile-menu-toggle ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
          {showMenu ? (
            <FiX size={24} />
          ) : (
            <>
              <CiMenuKebab />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
