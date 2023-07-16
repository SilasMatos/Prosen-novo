import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Upload from '../../Imagens/Upload.png';
import iconTitle from "../../Imagens/iconTitle.png";
import api from "../../services/api";
import "../Styles/StyleContents/PublicarProjeto.css";
import { UserContext } from "../useContext/UserContext";
const CadastrarProfessor = () => {
  const [nameUser, setName] = useState("");
  const [record, setRecord] = useState("");
  const [graduation, setGraduation] = useState("");
  const [LevelofEducation, setLevelofEducation] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [office, setOffice] = useState("Professor");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [file, setFile] = useState(null);
  const [authAdmin, setAuthAdmin] = useState(false);
  const [authStudent, setAuthStudent] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Crie um objeto FormData para enviar os dados e o arquivo
      const formData = new FormData();
      formData.append("nameUser", nameUser);
      formData.append("record", record);
      formData.append("graduation", graduation);
      formData.append("LevelofEducation", LevelofEducation);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("telephone", telephone);
      formData.append("confirmPassword", confirmPassword);
      formData.append("authAdmin", authAdmin);
      formData.append("authStudent", authStudent);
      formData.append("office", office);
      formData.append("file", file);


    


      // Faça a requisição POST para cadastrar o professor
      const response = await api.post("/auth/register", formData);
      const { message, user } = response.data;

    
      console.log(message);
      // Redirecione para a página desejada
      alert("cadastro feito")
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error)
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <div>
        <form  enctype="multipart/form-data" onSubmit={handleFormSubmit}>
          <div id="color-bg">
            <div className="tx-form">
            <img alt="" id="imgicon" src={iconTitle}/>
              <h4>Dados Do Professor</h4>
            </div>
            <div className="form-edit-section-size">
              <div className="form-edit-section">
                <div>
                  <label className="edit-label">Nome:</label>
                  <input
                    type="text"
                    name="nameUser"
                    className="input"
                    value={nameUser}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div>
                  <label className="edit-label">Registro</label>
                  <input
                    type="text"
                    name="record"
                    className="input"
                    value={record}
                    onChange={(event) => setRecord(event.target.value)}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Graduação:</label>
                  <input
                    type="text"
                    name="graduation"
                    className="input"
                    value={graduation}
                    onChange={(event) => setGraduation(event.target.value)}
                  />
                </div>
             
                <div className="itens-form">
                  <label className="edit-label">Grau de Escolalidade:</label>
                  <input
                    type="text"
                    name="LevelofEducation"
                    className="input"
                    value={LevelofEducation}
                    onChange={(event) => setLevelofEducation(event.target.value)}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Email :</label>
                  <input
                    type="text"
                    name="email"
                    className="input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Senha:</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                     <label className="edit-label">Confirmar Senha:</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="input"
                  
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
                <div className="itens-form">
                 
                     <label className="edit-label">Telefone:</label>
                  <input
                    type="text"
                    name="telephone"
                    className="input"
                    value={telephone}
                    onChange={(event) => setTelephone(event.target.value)}
                  />
                </div>
               
              </div>
              <div className="img-form-input">
              <div>
                
                <div>
               
                  <span>Arquivo selecionado:</span>
                  <br />
                  <span>{file ? file.name : ""}</span>
                </div>
            
                <label htmlFor="fileInput" className="fileInputContainer">
                  <span className="labelText">
                    <div>
                      <img id="UpIcon" src={Upload} alt="Arraste o arquivo" />
                    </div>
                    <p id="arrest">Arraste e solte o arquivo aqui</p>
                    <p id="or">
                      ou <span id="sele">selecione o arquivo</span>
                    </p>
                  </span>
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    name="file"
                    onChange={handleFileChange}
                  />
                </label>
                    
              </div>
           
            </div>
           
            </div>
            <div className="upArq">
              <button type="submit">CadastrarProfessor</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CadastrarProfessor;