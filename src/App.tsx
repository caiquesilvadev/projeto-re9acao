import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Modulo from './components/Modulo'; // Importação do componente
import Instituicao from './components/Instituicao';
import Cnpj from './components/Cnpj';
import EmailVerification from './components/Email';

import './App.css';

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/modulo" element={<Modulo />} />
          <Route path="/instituicao" element={<Instituicao />} />
          <Route path="/cnpj" element={<Cnpj />} />
          <Route path="/email" element={<EmailVerification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;