import getScores from './getScores.js';

const fetchScores = async () => {
  const data = await getScores();
  const scoresData = await data.result;
  return scoresData;
};

const scoresData = fetchScores();

export default scoresData;