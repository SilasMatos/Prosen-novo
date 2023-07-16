import React, { useEffect, useRef, useState } from "react";
import imgForm from "../../Imagens/imageForm.png";
import "../Styles/StyleContents/PublicarEvento.css";
import { useDropzone } from "react-dropzone";
import "../Styles/InputFile.css";
import { AiOutlinePlus } from "react-icons/ai";
import api from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../useContext/UserContext";
import Upload from "../../Imagens/Upload.png";
import AddImageEvent from "../../Imagens/AddImageEvent.png";
import { useNavigate } from "react-router-dom";
import iconTitle from "../../Imagens/iconTitle.png";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { Navbar } from "react-bootstrap";

const PublicarEvento = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [startDate, setStateDate] = useState("");
  const [hour, setHour] = useState("");
  const [local, setLocal] = useState("");
  const [type, setType] = useState("");
  const [descricao, setDescricao] = useState("");
  const [file, setFile] = useState(null);
  const inputFileRef = useRef(null);
  const navigate = useNavigate();
  const [previews, setPreviews] = useState([]);
  const inputFileRefs = useRef([]);
  const [videos, setVideos] = useState([]);
  const videoInputRef = useRef(null);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [infs, setInfs] = useState([]);

  const {id} = useParams();

  async function getInfs(){
    try {
      const infs = await api.get(`event/${id}`);
      const {data} = infs;
      setTitle(data.title)
      setStateDate(formatDate(data.startDate));
      setHour(formatarHora(data.hour));
      setLocal(data.local);
      setType(data.type);
      setDescricao(data.descricao)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getInfs();
  },[api])

  function formatarHora(hora) {
    const horaFormatada = hora.substring(0, 2) + ":" + hora.substring(2);
    return horaFormatada;
  }

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const formattedDateString = formattedDate.toISOString().split("T")[0];
    return formattedDateString;
  };

  const formatTime = (time) => {
    return time.replace(/\D/g, "");
  };

  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0];
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles[index] = selectedFile;
      return newFiles;
    });

    const reader = new FileReader();
    reader.onload = () => {
      setPreviews((prevPreviews) => {
        const newPreviews = [...prevPreviews];
        newPreviews[index] = reader.result;
        return newPreviews;
      });
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `/event/${id}`; // Sua rota /event aqui
      const data = new FormData();
      data.append("local", local);
      data.append("title", title);
      data.append("hour", formatTime(hour));
      data.append("type", type);
      data.append("descricao", descricao);
      data.append("startDate", formatDate(startDate));
      files.forEach((file, index) => {
        data.append("src", file);
      });
      videos.forEach((videos, index) => {
        data.append("video", videos);
      });

      const response = await api.put(url, data);
      alert("Sucesso, Evento atualizado!");
      navigate("/eventos");
      console.log(response.data); // Mensagem de sucesso e dados do evento

      // Faça algo com a resposta, como redirecionar para outra página
    } catch (error) {
      console.error(error);
      alert(
        "Publicação do Evento falhou, verifique se todos os campos estão preenchidos corretamente"
      );
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
  const handleFileSelect = (index) => {
    inputFileRefs.current[index].click();
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
    setPreviews((prevPreviews) => {
      const newPreviews = [...prevPreviews];
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop: (acceptedFiles) => {
      const remainingSlots = 8 - files.length;
      const filesToBeAdded = acceptedFiles.slice(0, remainingSlots);
      setFiles((prevFiles) => [...prevFiles, ...filesToBeAdded]);

      const newPreviews = [...previews];
      acceptedFiles.slice(0, remainingSlots).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          newPreviews.push(reader.result);
          setPreviews(newPreviews);
        };
        reader.readAsDataURL(file);
      });
    },
  });

  const {
    getRootProps: getVideoRootProps,
    getInputProps: getVideoInputProps,
    isDragActive: isVideoDragActive,
  } = useDropzone({
    accept: "video/*",
    multiple: true,
    onDrop: (acceptedFiles) => {
      const remainingSlots = 8 - videos.length;
      const filesToBeAdded = acceptedFiles.slice(0, remainingSlots);
      setVideos((prevVideos) => [...prevVideos, ...filesToBeAdded]);

      const newVideoPreviews = [...videoPreviews];
      acceptedFiles.slice(0, remainingSlots).forEach((video) => {
        const reader = new FileReader();
        reader.onload = () => {
          newVideoPreviews.push(reader.result);
          setVideoPreviews(newVideoPreviews);
        };
        reader.readAsDataURL(video);
      });
    },
  });

  const handleVideoChange = (event) => {
    const selectedVideos = event.target.files;
    setVideos((prevVideos) => [...prevVideos, ...selectedVideos]);

    const newVideoPreviews = [...videoPreviews];
    Array.from(selectedVideos).forEach((video) => {
      const reader = new FileReader();
      reader.onload = () => {
        newVideoPreviews.push(reader.result);
        setVideoPreviews(newVideoPreviews);
      };
      reader.readAsDataURL(video);
    });
  };
  const removeVideo = (index) => {
    setVideos((prevVideos) => {
      const newVideos = [...prevVideos];
      newVideos.splice(index, 1);
      return newVideos;
    });
    setVideoPreviews((prevPreviews) => {
      const newPreviews = [...prevPreviews];
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  return (
    <>
    <Navbar/>
      <div>
        <form>
          <div id="color-bg">
            <div className="tx-form">
              <img alt="" id="imgicon" src={iconTitle} />
              <h4>Dados Do Evento</h4>
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
                <div className="itens-form">
                  <label className="edit-label">Data:</label>
                  <input
                    type="date"
                    name="startDate"
                    className="input"
                    value={startDate}
                    onChange={(e) => {
                      setStateDate(e.target.value);
                    }}
                  />
                  <label className="edit-label">Horário:</label>
                  <input
                    type="time"
                    name="hour"
                    className="input"
                    value={hour}
                    onChange={(e) => {
                      setHour(e.target.value);
                    }}
                  />
                </div>
                <div className="itens-form">
                  <label className="edit-label">Local:</label>
                  <select
                    name="local"
                    className="input"
                    value={local}
                    onChange={(e) => {
                      setLocal(e.target.value);
                    }}
                  >
                    <option value="">Selecione o Local do Evento</option>
                    <option value="Senai - Feira de Santana">
                      Senai - Feira de Santana
                    </option>
                    <option value="Senai - Salvador">Senai - Salvador</option>
                  </select>
                  <label className="edit-label">Modalidade:</label>
                  <select
                    name="type"
                    className="input"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option value="">Selecione o tipo do evento</option>
                    <option value="Evento Presencial">Evento Presencial</option>
                    <option value="Evento a distância">
                      Evento A Distância
                    </option>
                  </select>
                </div>
                <div className="itens-form-text">
                  <label className="edit-label" htmlFor="formDescricao">
                    Descrição
                  </label>
                  <textarea
                    className="form-control"
                    name="descricao"
                    id="formDescricao"
                    rows="3"
                    placeholder="Digite a descrição"
                    value={descricao}
                    onChange={(e) => {
                      setDescricao(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div>
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
                    ref={inputFileRef}
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    name="file"
                  />
                </label>
              </div>
            </div>
            <div className="ftn-file">
              <h5>Fotos do Evento</h5>
              <div className="img-form-input">
                <div
                  {...getRootProps()}
                  className={`dropzone ${isDragActive ? "active" : ""}`}
                >
                  <input {...getInputProps()} />
                  <p>
                    Arraste e solte as imagens aqui ou clique para selecionar.
                  </p>
                </div>
                <div className="selected-files">
                  {previews.map((preview, index) => (
                    <div key={index} className="file-item">
                      <img src={preview} alt={`Preview ${index}`} />
                      <button class="btn-event-remove" onClick={() => removeFile(index)}>Remover</button>
                    </div>
                  ))}
                  {files.length < 8 && (
                    <label
                      className="file-input-label"
                      onClick={() => handleFileSelect(files.length)}
                    >
                      <span>+</span>
                      <input
                        ref={inputFileRefs.current[files.length]}
                        type="file"
                        style={{ display: "none" }}
                        name="src" // Altere o nome do campo de formulário para 'src'
                        onChange={(e) => handleFileChange(e, files.length)}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div>
            <h5>Vídeos do Evento</h5>
              <div
                {...getVideoRootProps()}
                className={`dropzone ${isVideoDragActive ? "active" : ""}`}
              >
                <input {...getVideoInputProps()} />
                <p>Arraste e solte os vídeos aqui ou clique para selecionar.</p>
              </div>
              <div className="selected-files">
                {videoPreviews.map((preview, index) => (
                  <div key={index} className="file-item">
                    <video className="vidInt" src={preview} controls />
                    <button class="btn-event-remove" onClick={() => removeVideo(index)}>Remover</button>
                  </div>
                ))}
                {videos.length < 8 && (
                  <label
                    className="file-input-label"
                    onClick={handleVideoChange}
                  >
                    <span>+</span>
                    <input
                      ref={videoInputRef}
                      type="file"
                      style={{ display: "none" }}
                      name="video"
                      accept="video/*"
                      onChange={handleVideoChange}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="upArq">
              <button type="submit" onClick={handleSubmit}>
                Atualizar Evento
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PublicarEvento;
