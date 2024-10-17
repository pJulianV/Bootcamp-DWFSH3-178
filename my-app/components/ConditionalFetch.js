import React, { useState, useEffect } from 'react';

const ConditionalFetch = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!isFetching) return;

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isFetching]);

  return (
    <div>
      <button onClick={() => setIsFetching(true)}>Cargar Datos</button>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionalFetch;