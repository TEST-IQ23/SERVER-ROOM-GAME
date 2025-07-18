let playerName = localStorage.getItem("playerName") || "";
let startTime = localStorage.getItem("startTime") || new Date().toISOString();
let currentChapter = null;

window.onload = () => {
  if (!playerName) {
    playerName = prompt("Enter your name:");
    localStorage.setItem("playerName", playerName);
  }
  localStorage.setItem("startTime", startTime);
  document.getElementById("playerNameDisplay").textContent = `👤 ${playerName}`;
  loadChapters();
  startTimer();
};

// Timer Logic
function startTimer() {
  const start = new Date(startTime);
  setInterval(() => {
    const now = new Date();
    const diff = new Date(now - start);
    const mins = diff.getUTCMinutes().toString().padStart(2, '0');
    const secs = diff.getUTCSeconds().toString().padStart(2, '0');
    document.getElementById("timer").textContent = `⏱️ ${mins}:${secs}`;
  }, 1000);
}

// Load Chapters
function loadChapters() {
  const list = document.getElementById("chapter-list");
  list.innerHTML = "";
  chapters.forEach((chapter, index) => {
    const isUnlocked = isChapterUnlocked(index);
    const isCompleted = isChapterCompleted(index);

    const card = document.createElement("div");
    card.className = `chapter-card ${!isUnlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;
    card.onclick = () => loadChapterView(index);

    const title = document.createElement("h3");
    title.textContent = chapter.title;

    const desc = document.createElement("p");
    desc.textContent = chapter.description;

    card.appendChild(title);
    card.appendChild(desc);

    if (isCompleted) {
      const dot = document.createElement("div");
      dot.className = "progress-dot";
      card.appendChild(dot);
    }

    list.appendChild(card);
  });
}

// Unlocking Rules
function isChapterUnlocked(index) {
  return index === 0 || isChapterCompleted(index - 1);
}

function isChapterCompleted(index) {
  return localStorage.getItem(`chapter_${index}_complete`) === "true";
}

// Load Chapter View
function loadChapterView(index) {
  currentChapter = index;
  const chapter = chapters[index];
  document.getElementById("start-page").classList.add("hidden");
  const view = document.getElementById("chapter-view");
  view.innerHTML = `<h2>${chapter.title}</h2>`;
  chapter.questions.forEach((q, i) => {
    const block = document.createElement("div");
    block.className = "question";
    const prompt = document.createElement("p");
    prompt.textContent = `${i + 1}. ${q.question}`;
    block.appendChild(prompt);

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(index, i, option, btn);
      block.appendChild(btn);
    });

    view.appendChild(block);
  });
}

// Answer Check
function checkAnswer(chapterIdx, questionIdx, selected, btn) {
  const correct = chapters[chapterIdx].questions[questionIdx].answer;
  if (selected === correct) {
    btn.style.backgroundColor = "#3fb950";
    btn.disabled = true;

    const allButtons = btn.parentElement.querySelectorAll("button");
    allButtons.forEach(b => {
      if (b !== btn) b.disabled = true;
    });

    if (isChapterFullyAnswered(chapterIdx)) {
      localStorage.setItem(`chapter_${chapterIdx}_complete`, "true");
      setTimeout(() => {
        if (chapterIdx + 1 < chapters.length) {
          loadChapters();
          document.getElementById("chapter-view").classList.add("hidden");
          document.getElementById("start-page").classList.remove("hidden");
        } else {
          showSuccess();
        }
      }, 1000);
    }
  } else {
    btn.style.backgroundColor = "#da3633";
  }
}

function isChapterFullyAnswered(index) {
  const chapter = chapters[index];
  const blocks = document.querySelectorAll(".question");
  return Array.from(blocks).every(block =>
    Array.from(block.querySelectorAll("button")).some(btn => btn.disabled && btn.style.backgroundColor === "rgb(63, 185, 80)")
  );
}

// Game Completion
function showSuccess() {
  document.getElementById("chapter-view").classList.add("hidden");
  document.getElementById("success").classList.remove("hidden");
}

// Certificate & Submission
function generateCertificate() {
  const name = document.getElementById("playerName").value || "Anonymous";
  const time = document.getElementById("timer").textContent;

  document.getElementById("formName").value = name;
  document.getElementById("formTime").value = time;
  document.getElementById("leaderboardForm").submit();

  const cert = document.getElementById("certificate");
  cert.classList.remove("hidden");
  cert.innerHTML = `<h3>🎖️ Certificate of Escape</h3><p>This certifies that <strong>${name}</strong> successfully escaped the Server Room in <strong>${time}</strong>.</p>`;
  html2canvas(cert).then(canvas => {
    cert.appendChild(canvas);
  });
}
