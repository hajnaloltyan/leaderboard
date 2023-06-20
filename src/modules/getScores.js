const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'rhMT72YP5yPzTLTnp0XF';

export const getScores = async () => {
  try {
    const res = await fetch(`${baseURL}games/${gameID}/scores/`, { method: 'GET' });
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};

export const sendScore = async (id, name, score) => {
  try {
    const res = await fetch(`${baseURL}games/${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        id: `${id}`,
        name: `${name}`,
        score: `${score}`,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};