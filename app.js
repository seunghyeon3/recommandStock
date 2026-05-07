async function loadSectors() {
  const response = await fetch('./data/sectors.json');
  const data = await response.json();

  document.getElementById('updated-time').innerText =
    `업데이트: ${data.updatedAt}`;

  const container = document.getElementById('sector-container');

  data.sectors.forEach(sector => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h2>${sector.name}</h2>
      <div class="score">미국 강세 점수: ${sector.score}</div>

      <div class="leader">
        대장주: ${sector.leader}
      </div>

      <div class="stock-list">
        ${sector.stocks.map(stock => `
          <div class="stock-item">${stock}</div>
        `).join('')}
      </div>
    `;

    container.appendChild(card);
  });
}

loadSectors();
