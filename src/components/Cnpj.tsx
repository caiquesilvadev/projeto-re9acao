import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // ajuste o caminho conforme necessário

const CNPJ = () => {
  const navigate = useNavigate();
  const [cnpj, setCnpj] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cnpj.trim() === '') {
      alert('Você não inseriu o CNPJ da instituição. Por favor, insira agora.');
    } else {
      navigate('/email');
    }
  };

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
          <h2 style={{ padding: '0 0 20px 0' }}>CNPJ da Instituição de Ensino</h2>
          <form className="input_instituicao" onSubmit={handleSubmit}>
            <input
              id="number_cnpj"
              type="text"
              placeholder="Digite o CNPJ da Instituição"
              value={cnpj}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
                setCnpj(value);
              }}
            />
            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CNPJ;
