let startTime;

function startTimer() {
  startTime = new Date();
  setInterval(() => {
    const now = new Date();
    const elapsed = Math.floor((now - startTime) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function loadChapters() {
  const list = document.getElementById('chapter-list');
  chapters.forEach((chapter, index) => {
    const card = document.createElement('div');
    card.className = 'chapter-card';

    const title = document.createElement('h3');
    // Remove duplicate "Chapter X:" prefix from title
    title.textContent = `Chapter ${index + 1}: ${chapter.title.replace(/^Chapter\s\d+:\s*/, "")}`;

    card.appendChild(title);

    card.addEventListener('click', () => {
      localStorage.setItem('currentChapter', index);
      window.location.href = `chapter.html?chapter=${index}`;
    });

    list.appendChild(card);
  });
}

window.onload = function () {
  startTimer();
  loadChapters();
};
