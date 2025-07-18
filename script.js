let currentChapter = 0;
let currentQuestion = 0;
let score = 0;
let startTime;
let interval;
let playerName = "";
let playerEmail = "";
let randomizedChapters = [];

function startGame() {
  playerName = document.getElementById("playerName").value.trim();
  playerEmail = document.getElementById("playerEmail").value.trim();

  if (!playerName || !playerEmail.includes("@")) {
    alert("Please enter a valid name and email.");
    return;
  }

  document.getElementById("player-info-form").classList.add("hidden");
  document.getElementById("game-ui").classList.remove("hidden");

  randomizedChapters = chapters.map(ch => ({
    ...ch,
    questions: shuffleArray([...ch.questions])
  }));

  startTime = Date.now();
  interval = setInterval(updateTimer, 1000);
  loadChapter();
}

function loadChapter() {
  const chapter = randomizedChapters[currentChapter];
  document.getElementById("chapter-title").innerText = chapter.title;
  document.getElementById("question-container").innerHTML = "";

  chapter.questions.forEach((q, idx) => {
    const questionEl = document.createElement("div");
    questionEl.innerHTML = `<p>${idx + 1}. ${q.q}</p>`;
    
    q.options.forEach(opt => {
      const optBtn = document.createElement("button");
      optBtn.textContent = opt;
      optBtn.className = "option-button";
      optBtn.onclick = () => checkAnswer(optBtn, opt, q.answer);
      questionEl.appendChild(optBtn);
    });

    document.getElementById("question-container").appendChild(questionEl);
  });

  updateProgress();
  document.getElementById("prevBtn").disabled = currentChapter === 0;
  document.getElementById("nextBtn").disabled = currentChapter >= randomizedChapters.length - 1;
  localStorage.setItem("progress", currentChapter);
}

function checkAnswer(button, selected, correct) {
  if (button.classList.contains("correct") || button.classList.contains("wrong")) return;

  if (selected === correct) {
    button.classList.add("correct");
    score += 1;
  } else {
    button.classList.add("wrong");
  }

  updateScore();
}

function nextChapter() {
  if (currentChapter < randomizedChapters.length - 1) {
    currentChapter++;
    loadChapter();
  } else {
    endGame();
  }
}

function prevChapter() {
  if (currentChapter > 0) {
    currentChapter--;
    loadChapter();
  }
}

function updateProgress() {
  const progress = ((currentChapter + 1) / randomizedChapters.length) * 100;
  document.getElementById("progress-fill").style.width = `${progress}%`;
}

function updateScore() {
  document.getElementById("score-display").innerText = `Score: ${score}`;
}

function updateTimer() {
  const seconds = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById("timer-display").innerText = `Time: ${seconds}s`;
}

function endGame() {
  clearInterval(interval);
  document.getElementById("game-ui").classList.add("hidden");
  document.getElementById("completion-screen").classList.remove("hidden");
  document.getElementById("final-score").innerText = `${score}`;
  document.getElementById("final-time").innerText = `${Math.floor((Date.now() - startTime) / 1000)}s`;

  showFeedbackForm();
}

function showFeedbackForm() {
  const form = document.getElementById("feedback-form");
  const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSdu_fdi2qxup0D28h-bQXbrcpJJzm4AXZP9ByM57p9UXA06GQ/viewform";
  form.src = `${baseURL}?embedded=true&entry.123456=${encodeURIComponent(playerName)}&entry.789101=${encodeURIComponent(playerEmail)}&entry.112233=${score}`;
  form.classList.remove("hidden");
}

function shareViaWhatsApp() {
  const text = `I just completed the Server Room Lockdown escape room with score ${score}! Try it now.`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function submitToLeaderboard() {
  const leaderboardURL = `https://docs.google.com/forms/d/e/1FAIpQLSd_leaderboard/viewform?embedded=true&entry.001=${playerName}&entry.002=${playerEmail}&entry.003=${score}`;
  window.open(leaderboardURL, "_blank");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
