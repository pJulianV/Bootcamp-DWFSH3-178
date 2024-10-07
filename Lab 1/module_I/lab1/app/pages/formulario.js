// pages/formulario.js
import { useState, useEffect } from 'react';

const Formulario = () => {
  const [nombres, setNombres] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const datos = localStorage.getItem('datos');
    if (datos) {
      const { nombres, email, username, password } = JSON.parse(datos);
      setNombres(nombres);
      setEmail(email);
      setUsername(username);
      setPassword(password);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = { nombres, email, username, password };
    localStorage.setItem('datos', JSON.stringify(datos));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombres y apellidos:
        <input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;