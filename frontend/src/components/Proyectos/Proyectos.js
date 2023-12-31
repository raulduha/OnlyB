import React, { useState, useEffect } from 'react';
import api from '../../api';


const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await api.get('proyectos/');
        setProyectos(response.data);
      } catch (error) {
        console.error('Error al obtener proyectos:', error);
      }
    };

    fetchProyectos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`proyectos/${id}/`);
      setProyectos(proyectos.filter(proyecto => proyecto.id !== id));
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Proyectos</h2>
      <ul>
        {proyectos.map(proyecto => (
          <li key={proyecto.id}>
            <span>{proyecto.nombre}</span>
            <button className="delete-btn" onClick={() => handleDelete(proyecto.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Proyectos;
