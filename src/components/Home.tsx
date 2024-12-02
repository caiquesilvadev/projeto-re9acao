import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/cadastro');
  };

  return (
    <div className="container">
      <div className="right">
        <div className="info_ani">
          <img src="/img/simbolo-logomarca.png" alt="Logomarca simbolo - Integração" className="simbolo"/>
          <h1>Soluções Integradas</h1>
          <p>Conectando Empresas e Instituições</p>
          <button onClick={handleStart} style={{ border: 'none', background: 'none', padding: '0' }}>
            <img style={{ width: '50px', paddingTop: '30px', cursor:'pointer' }} src="/img/icon-arrow-blue.png" alt="ícone de flecha indicando para avançar" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
