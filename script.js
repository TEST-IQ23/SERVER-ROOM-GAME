let startTime = Date.now();
let completedChapters = 0;

function updateTimer() {
  const now = Date.now();
  const elapsed = Math.floor((now - startTime) / 1000);
  const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
  const secs = (elapsed % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${mins}:${secs}`;
}
setInterval(updateTimer, 1000);

const container = document.getElementById('game-container');

function updateProgress() {
  const percent = Math.floor((completedChapters / chapters.length) * 100);
  document.getElementById("progressBar").style.width = percent + "%";
}

function renderChapter(chapter, index) {
  const chapterDiv = document.createElement('div');
  chapterDiv.className = 'chapter';
  chapterDiv.innerHTML = `<h2>${chapter.title}</h2>`;
  let correctAnswers = 0;

  chapter.questions.forEach((question, qIndex) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<p><strong>Q${qIndex + 1}:</strong> ${question.q}</p>`;

    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => {
        if (btn.disabled) return;

        if (option === question.answer) {
          btn.style.background = '#238636';
          correctAnswers++;
        } else {
          btn.style.background = '#da3633';
        }

        Array.from(questionDiv.querySelectorAll("button")).forEach(b => b.disabled = true);

        if (correctAnswers === chapter.questions.length) {
          completedChapters++;
          updateProgress();
          if (completedChapters === chapters.length) {
            document.getElementById('success').classList.remove('hidden');
          }
        }
      };
      questionDiv.appendChild(btn);
    });

    chapterDiv.appendChild(questionDiv);
  });

  container.appendChild(chapterDiv);
}

chapters.forEach((chapter, i) => {
  renderChapter(chapter, i);
});
updateProgress();

function generateCertificate() {
  const name = document.getElementById('playerName').value.trim();
  if (!name) return alert("Please enter your name");

  const endTime = Date.now();
  const elapsed = Math.floor((endTime - startTime) / 1000);
  const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
  const secs = (elapsed % 60).toString().padStart(2, '0');
  const cert = document.getElementById('certificate');
  cert.classList.remove('hidden');
  cert.innerHTML = `
    <h3>🎓 Certificate of Escape</h3>
    <p>This certifies that <strong>${name}</strong> successfully completed the Server Room Lockdown game.</p>
    <p>Time Taken: ${mins}:${secs}</p>
    <button onclick="saveAsImage()">🖼️ Download Certificate</button>
    <button onclick="shareOnWhatsApp()">📤 Share via WhatsApp</button>
    <button onclick="submitFeedback()">💬 Submit Feedback</button>
  `;
  submitToLeaderboard(`${mins}:${secs}`, name);
}

function saveAsImage() {
  const cert = document.getElementById("certificate");
  html2canvas(cert).then(canvas => {
    const link = document.createElement('a');
    link.download = 'certificate.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}

function shareOnWhatsApp() {
  const name = document.getElementById('playerName').value.trim();
  const time = document.getElementById('timer').textContent;
  const message = `🎓 I escaped the Server Room Lockdown!\nName: ${name}\nTime: ${time}\nPlay it here: https://test-iq23.github.io/SERVER-ROOM-GAME/`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function submitFeedback() {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSdu_fdi2qxup0D28h-bQXbrcpJJzm4AXZP9ByM57p9UXA06GQ/viewform?usp=dialog", "_blank");
}

function submitToLeaderboard(time, name) {
  document.getElementById("formName").value = name;
  document.getElementById("formTime").value = time;
  document.getElementById("leaderboardForm").submit();
}

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(console.error);
}
