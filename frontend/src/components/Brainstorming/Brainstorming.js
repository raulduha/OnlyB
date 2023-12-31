import React, { useState, useEffect } from 'react';
import api from '../../api';
import './Brainstorming.css';

const Brainstorming = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await api.get('brainstorming-ideas/');
        setIdeas(response.data);
      } catch (error) {
        console.error('Error al obtener ideas de brainstorming:', error);
      }
    };

    fetchIdeas();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`brainstorming-ideas/${id}/`);
      setIdeas(ideas.filter(idea => idea.id !== id));
    } catch (error) {
      console.error('Error al eliminar la idea:', error);
    }
  };

  return (
    <div>
      <h2>Ideas de Brainstorming</h2>
      <ul>
        {ideas.map(idea => (
          <li key={idea.id}>
            <span>{idea.descripcion}</span>
            <button className="delete-btn" onClick={() => handleDelete(idea.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brainstorming;
