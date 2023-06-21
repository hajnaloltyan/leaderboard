import { getScores } from './handleAPI.js';

const fetchScores = async () => {
  const data = await getScores();
  const dataResult = await data.result;
  return dataResult;
};

export default fetchScores;