import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Upload from '../../Imagens/Upload.png';
import iconTitle from "../../Imagens/iconTitle.png";
import api from "../../services/api";
import NavBar from "../Navbar/Navbar";
import "../Styles/StyleContents/PublicarProjeto.css";
import { UserContext } from "../useContext/UserContext";

const EditProject = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userData, setUserData] = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");
  const [shift, setShift] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [linkEvent, setLinkEvent] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [groupLeaderEmail, setGroupLeaderEmail] = useState("");
  const [classProject, setClassproject] = useState("");
  const [authors, setAuthors] = useState("");
  const [file, setFile] = useState(null);
  const inputFileRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [Evento, setEvento] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `/project/${id}`;
      const data = new FormData();
      data.append("title", title);
      data.append("area", area);
      data.append("shift", shift);
      data.append("type", type);
      const formattedDate = new Date(date);
      const formattedDateString = formattedDate.toISOString().split('T')[0];
      data.append("date", formattedDateString);
      data.append("linkEvent", linkEvent);
      data.append("supervisor", supervisor);
      data.append("groupLeaderEmail", groupLeaderEmail);
      data.append("classProject", classProject);
      data.append("authors", authors);
      data.append("file", file);
      const response = await api.put(url, data);
      alert("Projeto atualizado com Sucesso!");
      navigate('/repositorios');
      console.log(response.data); // Mensagem de sucesso e dados do evento
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Projeto Atualizado com Sucesso.",
      });
      // Faça algo com a resposta, como redirecionar para outra página
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocorreu um erro ao fazer a atualização do projeto. Verifique todos os campos e tente novamente.",
      });
      // Trate o erro aqui
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function getEvents() {
      try {
        const events = await api.get('/event');
        const { data } = events;
        setEvento(data.events);
      } catch (error) {
        console.log(error)
      }
    }
    getEvents();
  }, []);


  async function getForms(){
    try {
      const forms = await api.get(`/project/this/${id}`);
      const {data} = forms;
      setTitle(data.title);
      setArea(data.area);
      setShift(data.shift);
      setType(data.type);
      const formattedDate = new Date(data.date);
      const formattedDateString = formattedDate.toISOString().split('T')[0];
      setDate(formattedDateString);
      setLinkEvent(data.linkEvent);
      setSupervisor(data.supervisor);
      setGroupLeaderEmail(data.groupLeaderEmail);
      setAuthors(data.authors);
      setClassproject(data.classProject);

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getForms();
  },[api])

  return (
    <>
    <NavBar/>
      <div>
        <form onSubmit={handleSubmit}>
          <div id="color-bg">
            <div className="tx-form">
            <img alt="" id="imgicon" src={iconTitle}/>
              <h4>Dados Do Projeto</h4>
            </div>
            <div className="form-edit-section-size">
              <div className="form-edit-section">
                <div>
                  <label className="edit-label">Titulo:</label>
                  <input
                    type="text"
                    name="title"
                    className="input"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="edit-label">Área:</label>
                  <input
                    type="text"
                    name="area"
                    className="input"
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value);
                    }}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Turma:</label>
                  <input
                    type="text"
                    name="classProject"
                    className="input"
                    value={classProject}
                    onChange={(e) => {
                      setClassproject(e.target.value);
                    }}
                  />
                  <label className="edit-label">Turno:</label>
                  <select
                    name="shift"
                    className="input"
                    value={shift}
                    onChange={(e) => {
                      setShift(e.target.value);
                    }}
                  >
                    <option value=""></option>
                    <option value="Matutino">Matutino</option>
                    <option value="Verpertino">Verpertino</option>
                    <option value="Noturno">Noturno</option>
                  </select>
                </div>
                <div className="itens-form```jsx
">
                  <label className="edit-label">Tipo:</label>
                  <select
                    name="type"
                    className="input"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option value=""></option>
                    <option value="Amostra Científica">Amostra Científica</option>
                    <option value="TCC">TCC</option>
                  </select>
                  <label className="edit-label">Data:</label>
                  <input
                    type="date"
                    name="startDate"
                    className="input"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Vincular ao Evento</label>
                  <select
                    name="linkEvent"
                    className="input"
                    value={linkEvent}
                    onChange={(e) => {
                      setLinkEvent(e.target.value);
                    }}
                  >
                    <option value=""></option>
                    {Evento.length > 0 ?
                      Evento.map((events) => (
                        <option value={events.id}>{events.title}</option>
                      )) :
                      <option value='Sem Eventos Postados no momento'>Ainda não Existe Eventos Postados</option>
                    }
                  </select>
                </div>
                <div className="itens-form">
                  <label className="edit-label">Orientador:</label>
                  <input
                    type="text"
                    name="supervisor"
                    className="input"
                    value={supervisor}
                    onChange={(e) => {
                      setSupervisor(e.target.value);
                    }}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Email do Líder do Grupo</label>
                  <input
                    type="text"
                    name="groupLeaderEmail"
                    className="input"
                    value={groupLeaderEmail}
                    onChange={(e) => {
                      setGroupLeaderEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="edit-label">Autores</label>
                  <input
                    type="text"
                    name="authors"
                    className="input"
                    value={authors}
                    onChange={(e) => {
                      setAuthors(e.target.value);
                    }}
                  />
            
                </div>
              </div>
              <div className="img-form-input">
                <div
                  onDrop={handleFileDrop}
                  onDragOver={handleDragOver}
                >
                  {file ? (
                    <div>
                      <span>Arquivo selecionado:</span>
                      <br />
                      <span>{file.name}</span>
                    </div>
                  ) : (
                    <label htmlFor="fileInput" className="fileInputContainer">
                      <span className="labelText">
                        <div><img id="UpIcon" src={Upload} alt="Arraste o arquivo"/></div>
                        <p id="arrest">Arraste e solte o arquivo aqui</p>
                        <p id="or">ou <span id="sele">selecione o arquivo</span></p>
                      </span>
                      <input
                        ref={inputFileRef}
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        name="file"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="upArq">
              <button type="submit">Publicar Projeto</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProject;