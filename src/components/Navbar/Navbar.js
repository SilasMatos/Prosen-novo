import { useContext, useState } from "react";
import { Button, Form, Modal, Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Imagens/logo-nav.png";
import "../Styles/NavBar.css";
import { UserContext } from "../useContext/UserContext";

function NavBar() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleContactClick = () => {
    handleShowModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    // ...

    // Feche o modal após o envio do formulário
    handleCloseModal();
  };
  
  return (
    <>
    <Navbar expand="lg" className="nav-edit">
      <Container>
        <Navbar.Brand >
          <Link to={"/"}>
            <img src={logo} alt="Logo" id="logo-nav" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link id="link-nav" href="/eventos">
              Eventos
            </Nav.Link>
            <Nav.Link id="link-nav" href="/repositorios">
              Repositório
            </Nav.Link>
            <Nav.Link id="link-nav" onClick={handleContactClick}>
          Contato
        </Nav.Link>
            <div className="link-nav-login">
              {userData.logado ? (
                <Link to={"/dashboard"}>
                  <Nav.Link id="link-nav" href="#link">
                    Bem vindo {userData.nameUser}
                  </Nav.Link>
                </Link>
              ) : (
                <Link to={"/dashboard"}>
                  <Nav.Link id="link-nav" href="#link">
                    Conta ProSen
                  </Nav.Link>
                </Link>
              )}
              

              <FaUserAlt id="icon-nav" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Formulário de Contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Digite sua mensagem" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
  </>
  );
}

export default NavBar;