import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "../Styles/InputVideo.css"
import { AiOutlinePlus } from 'react-icons/ai';
import { FiVideo } from 'react-icons/fi';

const FileVideo = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'video/*',
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const removeFile = (index) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <div className='input-file-edit'>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Arraste e solte os arquivos aqui ou clique para selecionar.</p>
      </div>

      {files.length > 0 && (
        <div>
          <h4>Pré-visualizações:</h4>
          <div className="preview-container">
            {files.slice(0, 4).map((file, index) => (
              <div key={index} className="preview-item">
                {file.type.includes('video') ? (
                  <video className="preview-video" controls>
                    <source src={URL.createObjectURL(file)} type={file.type} />
                  </video>
                ) : (
                  <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} className="preview-image" />
                )}
                <button onClick={() => removeFile(index)}>Remover</button>
              </div>
            ))}
            {files.length < 4 && (
              <div {...getRootProps()} className={`dropzone-edit ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                <p><AiOutlinePlus id='edit-icon-input' /></p>
              </div>
            )}
          </div>
        </div>
      )}

      {files.length < 4 && (
        <div>
          <div className="additional-preview">
            <input type="file" accept="video/*" onChange={(e) => setFiles((prevFiles) => [...prevFiles, e.target.files[0]])}></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileVideo;
