export const statusLogin = (email: string, password: string) => {
  const url = 'http://localhost:3001/api/v1/user/login';
  const data = {
    email,
    password,
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Une erreur s'est produite lors de la requête.");
    }
    return response.json();
  });
};
