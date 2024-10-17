// Archivo: pages/users/[id].js
import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h1>Detalles del Usuario</h1>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Edad: {user.age}</p>
    </div>
  );
};

// Simular la obtención de datos
export async function getServerSideProps(context) {
  const { id } = context.params;
  // Aquí puedes hacer una llamada a la API para obtener el usuario por ID
  const user = { id, name: 'Ejemplo', email: 'ejemplo@correo.com', age: 30 }; // Simulación
  return { props: { user } };
}

export default UserDetail;