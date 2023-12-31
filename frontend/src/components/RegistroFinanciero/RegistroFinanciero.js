import React, { useState, useEffect } from 'react';
import api from '../../api';

const RegistroFinanciero = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await api.get('registro-financiero/');
        setRegistros(response.data);
      } catch (error) {
        console.error('Error al obtener registros financieros:', error);
      }
    };

    fetchRegistros();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`registro-financiero/${id}/`);
      setRegistros(registros.filter(registro => registro.id !== id));
    } catch (error) {
      console.error('Error al eliminar el registro financiero:', error);
    }
  };

  return (
    <div>
      <h2>Registros Financieros</h2>
      <ul>
        {registros.map(registro => (
          <li key={registro.id}>
            <span>{registro.descripcion}</span>
            <button className="delete-btn" onClick={() => handleDelete(registro.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegistroFinanciero;
