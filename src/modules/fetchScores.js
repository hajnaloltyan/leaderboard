import { getScores } from './handleAPI.js';

const fetchScores = async () => {
  const data = await getScores();
  const dataResult = await data.result;
  return dataResult.sort((a, b) => b.score - a.score);
};

export default fetchScores;