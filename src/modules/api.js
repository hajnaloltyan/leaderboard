const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'rhMT72YP5yPzTLTnp0XF';

const getScores = async () => {
  try {
    const res = await fetch(`${baseURL}games/${gameID}/scores/`, { method: 'GET' });
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: 'Unexpected error',
    };
  }
};

export default getScores;