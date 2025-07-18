let startTime = Date.now();

const introScreen = document.getElementById("intro-screen");
const chapterView = document.getElementById("chapter-view");
const chapterTitle = document.getElementById("chapterTitle");
const questionsContainer = document.getElementById("questionsContainer");
const chapterList = document.getElementById("chapter-list");

function updateTimer() {
  const now = Date.now();
  const elapsed = Math.floor((now - startTime) / 1000);
  const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
  const secs = (elapsed % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${mins}:${secs}`;
}
setInterval(updateTimer, 1000);

chapters.forEach((chapter, index) => {
  const btn = document.createElement('button');
  btn.innerText = `Chapter ${index + 1}: ${chapter.title}`;
  btn.className = 'chapter-button';
  btn.onclick = () => loadChapter(index);
  chapterList.appendChild(btn);
});

function loadChapter(index) {
  introScreen.classList.add("hidden");
  chapterView.classList.remove("hidden");
  chapterTitle.innerText = `Chapter ${index + 1}: ${chapters[index].title}`;
  questionsContainer.innerHTML = "";

  chapters[index].questions.forEach((question, qIndex) => {
    const div = document.createElement('div');
    div.innerHTML = `<p><strong>Q${qIndex + 1}:</strong> ${question.q}</p>`;

    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.innerText = option;
      btn.onclick = () => {
        if (option === question.answer) {
          alert("✅ Correct!");
        } else {
          alert("❌ Wrong answer!");
        }
      };
      div.appendChild(btn);
    });

    questionsContainer.appendChild(div);
  });
}

document.getElementById("backButton").onclick = () => {
  chapterView.classList.add("hidden");
  introScreen.classList.remove("hidden");
};

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
    <canvas id="certCanvas" style="display:none;"></canvas>
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
  const message = `🎓 I escaped the Server Room Lockdown!\nName: ${name}\nTime: ${time}\nPlay it yourself here: https://test-iq23.github.io/SERVER-ROOM-GAME/`;
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(console.error);
}
