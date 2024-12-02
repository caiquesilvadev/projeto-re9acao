import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left color-linear">
        <div className="logo-section">
          <a href="/cadastro" onClick={(e) => { e.preventDefault(); navigate('/cadastro'); }}>
            <img src="/img/logomarca-horizontal.png" alt="Logo Integração" className="logo" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="login_form">
          <div className="icon_palmas" style={{ display: 'none' }}>
            <img src="/img/icon-palmas.png" alt="" />
          </div>
          <h2 className="titulo_login">Olá, é um prazer te ver por aqui!</h2>
          <p><strong>Insira suas credenciais</strong></p>
          <form className="login_input">
            <input id="form_email" type="email" placeholder="Digite o seu melhor e-mail" required />
            <input id="form_senha" type="password" placeholder="Digite a sua Senha" required />
            <button className="btn_entrar" type="submit">Entrar</button>
            <div className="trocar_senha">
              <a href="./tela_senha">Esqueceu a senha? <span>Clique aqui</span></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
