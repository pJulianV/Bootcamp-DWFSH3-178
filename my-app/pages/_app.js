import React from 'react';
import { UserProvider } from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap instalado

function MyApp({ Component, pageProps }) {
  return (
    <User Provider>
      <Component {...pageProps} />
    </User Provider>
  );
}

export default MyApp;