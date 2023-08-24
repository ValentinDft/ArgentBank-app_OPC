const urlLogin = 'http://localhost:3001/api/v1/user/login';
const urlProfile = 'http://localhost:3001/api/v1/user/profile';

export const statusLogin = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };

  return await fetch(urlLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Email ou mot de passe incorrect');
      }
    })
    .catch((error) => {
      alert(error);
      throw error;
    });
};

export const dataProfile = async (token: string) => {
  return await fetch(urlProfile, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Token invalide');
      }
    })
    .catch((error) => {
      alert(error);
      throw error;
    });
};

export const updateProfile = async (
  token: string,
  firstName: string,
  lastName: string
) => {
  const data = {
    firstName,
    lastName,
  };

  return await fetch(urlProfile, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Token ou information invalide');
      }
    })
    .catch((error) => {
      alert(error);
      throw error;
    });
};
