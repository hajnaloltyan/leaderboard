import './index.css';

import addNewScore from './modules/addNewScore.js';
import fetchScores from './modules/fetchScores.js';

let scoresData = [];

const displayScores = () => {
  const scoresTable = document.querySelector('.scores-table');
  scoresTable.innerHTML = '';

  console.log(scoresData);

  if (scoresData !== undefined) {
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

document.querySelector('.refreshBtn').addEventListener('click', () => {
  scoresData = fetchScores();
  displayScores();
});

document.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewScore();
  e.target.reset();
  scoresData = fetchScores();
});

displayScores();