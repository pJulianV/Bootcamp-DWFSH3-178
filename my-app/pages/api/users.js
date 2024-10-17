// Archivo: pages/api/users.js
let users = []; // Simulación de base de datos en memoria

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(users);
      break;
    case 'POST':
      const newUser  = req.body;
      users.push({ id: users.length + 1, ...newUser  });
      res.status(201).json(newUser );
      break;
    // Implementar PUT, DELETE, PATCH según sea necesario
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}