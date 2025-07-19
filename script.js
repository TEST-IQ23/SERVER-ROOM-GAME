// script.js

// Global variables
let playerName = localStorage.getItem("playerName") || "";
let selectedChapterId = localStorage.getItem("selectedChapterId");
let selectedChapterTitle = localStorage.getItem("selectedChapterTitle");
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalTimeTaken = 0;
let questionTimer;
let questionStartTime;

// Page Detection
const currentPage = window.location.pathname.split("/").pop();

// Helper Functions
function $(id) {
  return document.getElementById(id);
}

function startTimer(duration, onTimeout) {
  let timeLeft = duration;
  $("timer").textContent = `${timeLeft}s`;
  questionTimer = setInterval(() => {
    timeLeft--;
    $("timer").textContent = `${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      onTimeout();
    }
  }, 1000);
}

function loadChapters() {
  fetch("chapters.js")
    .then((res) => res.text())
    .then((text) => {
      eval(text); // loads `chapters` array
      const chapterList = $("chapterList");
      $("playerNameDisplay").textContent = playerName;
      chapters.forEach((chapter) => {
        const btn = document.createElement("button");
        btn.textContent = chapter.title;
        btn.className = "chapter-btn";
        btn.onclick = () => {
          localStorage.setItem("selectedChapterId", chapter.id);
          localStorage.setItem("selectedChapterTitle", chapter.title);
          window.location.href = "question.html";
        };
        chapterList.appendChild(btn);
      });
    });
}

function loadQuestions() {
  fetch("questions.js")
    .then((res) => res.text())
    .then((text) => {
      eval(text); // loads `allQuestions` object
      questions = allQuestions[selectedChapterId];
      $("chapterTitle").textContent = selectedChapterTitle;
      showQuestion();
    });
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    localStorage.setItem("score", score);
    localStorage.setItem("totalTime", totalTimeTaken);
    window.location.href = "results.html";
    return;
  }

  const q = questions[currentQuestionIndex];
  $("questionText").textContent = q.question;
  const optionsDiv = $("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => handleAnswer(idx, q.answer);
    optionsDiv.appendChild(btn);
  });

  questionStartTime = Date.now();
  startTimer(30, () => {
    showFeedback(false);
    nextQuestion();
  });
}

function handleAnswer(selectedIdx, correctIdx) {
  clearInterval(questionTimer);
  const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
  totalTimeTaken += timeTaken;
  const correct = selectedIdx === correctIdx;
  if (correct) score++;
  showFeedback(correct);
  setTimeout(nextQuestion, 1500);
}

function showFeedback(isCorrect) {
  const feedback = $("feedback");
  feedback.textContent = isCorrect ? "✔ Pass" : "✘ Fail";
  feedback.className = isCorrect ? "pass" : "fail";
  feedback.style.display = "block";
  setTimeout(() => {
    feedback.style.display = "none";
  }, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

function showResults() {
  const scoreVal = parseInt(localStorage.getItem("score")) || 0;
  const totalTime = parseInt(localStorage.getItem("totalTime")) || 0;
  const totalQuestions = 10;

  $("summaryName").textContent = playerName;
  $("summaryChapter").textContent = selectedChapterTitle;
  $("summaryScore").textContent = `${scoreVal}/${totalQuestions}`;
  $("summaryTime").textContent = `${totalTime}s`;

  // Certificate download
  $("downloadBtn").onclick = () => {
    const cert = `
    Certificate of Completion
    --------------------------
    Name: ${playerName}
    Chapter: ${selectedChapterTitle}
    Score: ${scoreVal}/${totalQuestions}
    Time: ${totalTime}s
    Date: ${new Date().toLocaleDateString()}
    `;
    const blob = new Blob([cert], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "certificate.txt";
    link.click();
  };

  // WhatsApp Share
  $("shareBtn").onclick = () => {
    const text = `I just completed '${selectedChapterTitle}' with a score of ${scoreVal}/${totalQuestions} in ${totalTime}s! 💥 #ServerRoomLockdown`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  };

  // Feedback
  $("feedbackBtn").onclick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdu_fdi2qxup0D28h-bQXbrcpJJzm4AXZP9ByM57p9UXA06GQ/viewform?usp=header", "_blank");
  };

  // Leaderboard Submission
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe4EwuIPz9MRWBLtGwxFm-r9tt38uHa8R33UwMXnu-XQnZY2A/formResponse";
  const formData = new FormData();
  formData.append("entry.2060976916", playerName);
  formData.append("entry.784134679", selectedChapterTitle);
  formData.append("entry.222168494", `${scoreVal}/${totalQuestions}`);
  formData.append("entry.1033246286", new Date().toLocaleDateString());
  formData.append("entry.225669406", `${totalTime}s`);

  fetch(googleFormUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}

// Page-specific Initialization
window.onload = () => {
  switch (currentPage) {
    case "start.html":
    case "index.html":
      $("startBtn").onclick = () => {
        const name = $("playerNameInput").value.trim();
        if (name) {
          localStorage.setItem("playerName", name);
          window.location.href = "chapters.html";
        }
      };
      break;

    case "chapters.html":
      if (!playerName) window.location.href = "start.html";
      loadChapters();
      break;

    case "question.html":
      if (!selectedChapterId || !playerName) window.location.href = "chapters.html";
      loadQuestions();
      break;

    case "results.html":
      showResults();
      $("backBtn").onclick = () => {
        window.location.href = "chapters.html";
      };
      break;
  }
};
