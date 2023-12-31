// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Proyectos from './components/Proyectos/Proyectos';
import Tareas from './components/Tareas/Tareas';
import Brainstorming from './components/Brainstorming/Brainstorming';
import RegistroFinanciero from './components/RegistroFinanciero/RegistroFinanciero';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/brainstorming" element={<Brainstorming />} />
          <Route path="/registro-financiero" element={<RegistroFinanciero />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
