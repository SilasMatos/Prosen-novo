import React, { useContext, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation
} from "react-router-dom";
import EventEdit from "../components/Atualizações/EventEdit";
import ProfessoresEdit from "../components/Atualizações/ProfessoresEdit";
import EditProject from "../components/Atualizações/ProjectEdit";
import CadastrarProfessor from "../components/DashboardContentsAdmin/CadastrarProfessor";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import DashboardAdmin from "../components/Pages/DashboardAdmin/DashboardAdmin";
import DashboardAluno from "../components/Pages/DashboardAluno/DashboardAluno";
import Equipe from "../components/Pages/Equipe/Equipe";
import EventoById from "../components/Pages/EventoByID/EventoById";
import Eventos from "../components/Pages/Eventos/Eventos";
import { Home } from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Respositorios from "../components/Pages/Respositorios/Respositorios";
import { UserContext } from "../components/useContext/UserContext";

function ToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Rotas = () => {
  const [userData, setUserData] = useContext(UserContext);
  

  return (
    <Router>
      <ToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/eventos" Component={Eventos} />
        <Route exact path="/eventos/:id" Component={EventoById} />
        <Route
          path="/repositorios"
          element={userData.logado ? <Respositorios /> : <Login />}
        />
        <Route exact path="/repositorios" Component={Respositorios} />
        <Route exact path="/equipe" Component={Equipe} />
        <Route exact path="/login" Component={Login} />

        <Route
  path="/Dashboard"
  element={
    userData.logado ? (
      userData.authAdmin === "true" && userData.authStudent === "false" ? (
        <DashboardAdmin />
      ) : userData.authAdmin === "false" && userData.authStudent === "true" ? (
        <DashboardAluno />
      ) : (
        <Dashboard />
      )
    ) : (
      <Login />
    )
  }
/>

      <Route exact path="/EditarProjeto/:id" Component={EditProject} />
      <Route exact path="/EditarEvento/:id" Component={EventEdit} />
      <Route exact path="/EditarProfessor/:id" Component={ProfessoresEdit} />

        <Route path="/CadastrarProfessor" element={userData.logado ? <CadastrarProfessor/> : <Login/>}/>
      </Routes>
    </Router>
  );
};

export default Rotas;
