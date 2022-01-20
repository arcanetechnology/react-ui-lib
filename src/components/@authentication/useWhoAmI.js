import { useEffect, useState } from 'react';

/**
 * Calls the "Who am I" endpoint with the given firebase token, returns user details.
 */
const useWhoAmI = (token) => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await callWhoAmI({ token });
      setData(data);
    }

    token && fetchData();
  }, [token]);

  if (!data) {
    return null;
  }

  const { result, response } = data;

  if (!response.ok) {
    return { error: true, response, result };
  }

  return result;
};

const callWhoAmI = async ({ token }) => {
  const url = new URL('https://api.arcane.no/whoami');

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${token}`);

  const response = await fetch(url.toString(), {
    headers
  });

  const result = await response.json();

  return {
    result,
    response
  };
};

export default useWhoAmI;
