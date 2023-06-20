import { sendScore } from './handleAPI.js';

const addNewScore = async () => {
  const nameInput = document.getElementById('name').value.trim();
  const scoreInput = document.getElementById('score').value.trim();

  if (nameInput && scoreInput) {
    await sendScore(
      nameInput, scoreInput,
    );
  }
};

export default addNewScore;