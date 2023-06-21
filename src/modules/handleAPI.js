const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameID = 'rhMT72YP5yPzTLTnp0XF';
const fullURL = `${baseURL}/${gameID}/scores/`;

export const getScores = async () => {
  try {
    const res = await fetch(fullURL, { method: 'GET' });
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};

export const sendScore = async (name, score) => {
  try {
    const res = await fetch(fullURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: `${name}`,
        score: `${score}`,
      }),
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