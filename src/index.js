import './index.css';

import addNewScore from './modules/addNewScore.js';
import fetchScores from './modules/fetchScores.js';

let scoresData = [];

const displayScores = () => {
  const scoresTable = document.querySelector('.scores-table');
  scoresTable.innerHTML = '';

  if (scoresData !== []) {
    scoresData.forEach(({ score, user }) => {
      const scoreItem = document.createElement('li');
      scoreItem.classList.add('score-details');

      scoreItem.innerHTML = `
        <p>${user}: ${score}</p>
      `;

      scoresTable.appendChild(scoreItem);
    });
  } else {
    scoresTable.innerHTML = 'No scores to show! :(';
  }
};

document.querySelector('.refreshBtn').addEventListener('click', async () => {
  scoresData = await fetchScores();
  displayScores();
});

document.addEventListener('submit', async (e) => {
  e.preventDefault();
  addNewScore();
  e.target.reset();
  scoresData = await fetchScores();
  displayScores();
});

(async () => {
  scoresData = await fetchScores();
  displayScores();
})();