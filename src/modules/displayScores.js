import scoresData from './scores.js';

const displayScores = () => {
  const scoresTable = document.querySelector('.scores-table');
  scoresTable.innerHTML = '';

  scoresData.forEach(({ name, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-details');

    scoreItem.innerHTML = `
      <p>${name}: ${score}</p>
    `;

    scoresTable.appendChild(scoreItem);
  });
};

export default displayScores;