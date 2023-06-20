import scoresData from './scoresData.js';

const displayScores = () => {
  const scoresTable = document.querySelector('.scores-table');
  scoresTable.innerHTML = '';

  if (scoresData.length > 0) {
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
  }

  scoresTable.innerHTML = 'No scores to show! :(';
};

export default displayScores;