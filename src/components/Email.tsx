import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // ajuste o caminho conforme necessário

const EmailVerification: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left color-branco">
        <div className="logo-section">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/instituicao'); }}>
          <img src="/img/logomarca-azul.png" alt="Logo Integração" className="logo" />
          </a>
        </div>
      </div>
      <div className="right color-linear">
        <div className="login_form">
          <h2>Prazer, UNIFACOL!</h2>
          <p style={{ color: 'white' }}>Agora informe seu e-mail para assim confirmar a sua autenticidade.</p>
          <form className="input_instituicao" onSubmit={(e) => { e.preventDefault(); navigate('/destino'); }}>
            <input
              id="form_email"
              type="email"
              placeholder="Digite o seu melhor e-mail"
              required
            />
            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
