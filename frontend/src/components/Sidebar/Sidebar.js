// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="avatar.jpg" alt="Perfil" />
        <h3>Nombre del Usuario</h3>
      </div>
      <ul className="sidebar-links">
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/tareas">Tareas</Link></li>
        <li><Link to="/brainstorming">Brainstorming</Link></li>
        <li><Link to="/registro-financiero">Registro Financiero</Link></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </div>
  );
};

export default Sidebar;
