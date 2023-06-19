import scoresData from './scores.js';

const displayScores = () => {
  const scoresTable = document.querySelector('.scores-table');
  scoresTable.innerHTML = '';

  scoresData.forEach(({ id, name, score }) => {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-details');

    if (id % 2 === 1) {
      scoreItem.classList.add('grey-bg');
    }

    scoreItem.innerHTML = `
      <p>${name}: ${score}</p>
    `;

    scoresTable.appendChild(scoreItem);
  });
};

export default displayScores;