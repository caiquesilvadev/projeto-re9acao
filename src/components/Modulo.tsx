import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Certifique-se de que o caminho está correto

const Modulos: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left color-branco">
        <div className="logo-section">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/cadastro'); }}>
            <img src="/img/logomarca-azul.png" alt="Logo Integração" className="logo" />
          </a>
        </div>
      </div>
      <div className="right color-linear">
        <div className="login_form">
          <div className="icon_palmas">
            <img src="/img/icon-palmas.png" style={{ display: 'none' }} alt="Mãos batendo palmas" />
          </div>
          <h2>Com quem estamos falando?</h2>
          <p style={{ color: 'white' }}>Por gentileza, identifique seu perfil para iniciarmos a conexão.</p>
          <div className="input_instituicao">
            <button type="button" disabled>Empresa</button>
            <button type="button" onClick={() => navigate('/instituicao')}>Instituição</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modulos;
