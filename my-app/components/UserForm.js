import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserForm = () => {
  const { user, updateUser  } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUser ({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como hacer una solicitud a una API
    console.log('Usuario creado:', user);
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Edad</label>
        <input
          type="number"
          className="form-control"
          id="age"
          name="age"
          value={user.age}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Crear Usuario</button>
    </form>
  );
};

export default UserForm;