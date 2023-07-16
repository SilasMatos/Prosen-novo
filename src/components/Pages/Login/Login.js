import React, { useContext, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logoForm from "../../../Imagens/logo-form.png";
import imglogologin from "../../../Imagens/logo-login.png";
import api from "../../../services/api";
import NavBar from "../../Navbar/Navbar";
import BannerLogin from "../../Section-Banner/BannerLogin";
import "../../Styles/Login.css";
import { UserContext } from "../../useContext/UserContext";

function Login() {
  const [UserData, setUserData] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nes, setNes] = useState([]);
  const navigate = useNavigate();

  const logar = async (e) => {
    e.preventDefault();
    try {
      const Data = await api.post("auth/login", {
        email,
        password,
      });
      console.log(Data.data);
      const tokenGuard = JSON.stringify(Data.data.token).replace(/["]/g, "");
      const id = JSON.stringify(Data.data.usuario._id).replace(/["]/g, "");
      const nomeUser = JSON.stringify(Data.data.usuario.nameUser).replace(
        /["]/g,
        ""
      );
      const emailProsen = JSON.stringify(Data.data.usuario.email).replace(
        /["]/g,
        ""
      );
      const authAdmin = JSON.stringify(Data.data.usuario.authAdmin).replace(
        /["]/g,
        ""
      );
      const authStudent = JSON.stringify(Data.data.usuario.authStudent).replace(
        /["]/g,
        ""
      );

      localStorage.setItem("token_Prosen", tokenGuard);
      localStorage.setItem("id_Prosen", id);
      localStorage.setItem("name_Prosen", nomeUser);
      localStorage.setItem("email_Prosen", emailProsen);
      localStorage.setItem("logado_Prosen", true);
      localStorage.setItem("authAdmin_Prosen", authAdmin);
      localStorage.setItem("authStudent_Prosen", authStudent);

      await navigate("/");
      window.location.reload(true);

    } catch {
      console.log("Não funcionou");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocorreu um erro ao fazer login. Verifique suas credenciais e tente novamente.",
      });
    }
  };

  return (
    <>
      <NavBar />
      <BannerLogin />
      <div className="login-sec">
        <div className="div-img-form">
          <img alt="" src={imglogologin} />
        </div>
        <div>
          <div class="center-edit">
            <div className="div-form-text">
              <h3>Conta ProSen</h3>
              <img alt="" id="logo-form" src={logoForm} />
            </div>
            <form>
              <div class="inputbox-2">
                <input
                  type="text"
                  id="form-edit-input"
                  placeholder="Email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <i class="icon">
                  <FaUserAlt id="icon-form-user" />
                </i>
              </div>
              <div class="inputbox-2">
                <input
                  type="password"
                  placeholder="Senha"
                  required="required"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <i class="icon">
                  <AiFillLock id="icon-form" />
                </i>
              </div>

              <div class="div-button" onClick={logar}>
                <button class="btn-form">ACESSAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
