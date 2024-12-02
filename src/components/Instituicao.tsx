import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // ajuste o caminho conforme necessário

const Instituicao = () => {
  const navigate = useNavigate();
  const [nomeInstituicao, setNomeInstituicao] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nomeInstituicao.trim() === '') {
      alert('Você não inseriu o nome da instituição. Por favor, insira agora.');
    } else {
      navigate('/cnpj');
    }
  };

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
          <h2 style={{ padding: '0 0 20px 0' }}>Qual é o nome da Instituição?</h2>
          <form className="input_instituicao" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome completo da Instituição"
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s]+"
              title="Por favor, insira apenas letras"
              value={nomeInstituicao}
              onChange={(e) => setNomeInstituicao(e.target.value)}
            />
            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Instituicao;
