// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="main-content">
        <div className="header">
          <h1>Bienvenido a Tu Aplicación</h1>
          {/* Coloca información del perfil, botones de inicio de sesión, etc. aquí */}
        </div>
        <div className="content">
          {/* Contenido principal de la página de inicio */}
          <p>¡Aquí puedes mostrar contenido importante!</p>
          <Link to="/proyectos">Ir a Proyectos</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
