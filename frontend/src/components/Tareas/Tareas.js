// src/components/Tareas.js
import React, { useState, useEffect } from 'react';
import api from '../../api';

const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await api.get('tareas/');
        setTareas(response.data);
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    };

    fetchTareas();
  }, []);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>{tarea.descripcion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
