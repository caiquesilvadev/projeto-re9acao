import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Cadastro = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left color-branco">
        <div className="logo-section">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <img src="/img/logomarca-azul.png" alt="Logo Integração" className="logo" />
          </a>
        </div>
      </div>
      <div className="right color-linear">
        <div className="login_form">
          <div className="icon_palmas">
            <img src="/img/icon-palmas.png" style={{ display: 'none' }} alt="" />
          </div>
          <h2>Seja Bem-Vindo(a)</h2>
          <p style={{ color: 'white' }}>
            Clique em 'Iniciar Cadastro' para criar sua conta 
            ou em 'Fazer Login' se já tiver uma.
          </p>
          <div className="input_instituicao">
            <button type="button" onClick={() => navigate('/modulo')}>Iniciar Cadastro</button>
            <button type="button" onClick={() => navigate('/login')}>Fazer Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
