export const statusLogin = async (email: string, password: string) => {
  const url = 'http://localhost:3001/api/v1/user/login';
  const data = {
    email,
    password,
  };

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la requête.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const dataProfile = async (token: string) => {
  const url = 'http://localhost:3001/api/v1/user/profile';

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de la requête.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
