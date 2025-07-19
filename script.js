// ========== Global State ==========
let playerName = localStorage.getItem("playerName") || "";
let selectedChapter = JSON.parse(localStorage.getItem("selectedChapter")) || null;
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let questionTimer;
let startTime;

// ========== Start Page ==========
function startGame() {
  const nameInput = document.getElementById("playerNameInput");
  const name = nameInput.value.trim();

  if (name) {
    localStorage.setItem("playerName", name);
    window.location.href = "chapters.html";
  } else {
    alert("Please enter your name before starting.");
  }
}

// ========== Load Chapters ==========
function loadChapters() {
  const name = localStorage.getItem("playerName") || "Player";
  document.getElementById("welcomePlayer").textContent = `Welcome, ${name}!`;

  const chapterList = document.getElementById("chapterList");

  chapters.forEach((chapter) => {
    const btn = document.createElement("button");
    btn.className = "chapter-btn";
    btn.textContent = chapter.title;
    btn.onclick = () => {
      localStorage.setItem("selectedChapter", JSON.stringify(chapter));
      window.location.href = "question.html";
    };
    chapterList.appendChild(btn);
  });
}

// ========== Load Questions ==========
function loadQuestions() {
  selectedChapter = JSON.parse(localStorage.getItem("selectedChapter"));
  playerName = localStorage.getItem("playerName");

  if (!selectedChapter) {
    window.location.href = "chapters.html";
    return;
  }

  document.getElementById("chapterTitle").textContent = selectedChapter.title;
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  startTime = Date.now();

  showQuestion();
}

function showQuestion() {
  const questionArea = document.getElementById("questionArea");
  const questionData = questions[selectedChapter.id][currentQuestionIndex];

  if (!questionData) {
    finishQuiz();
    return;
  }

  // Clear previous question
  questionArea.innerHTML = "";
  clearTimeout(questionTimer);

  const questionBlock = document.createElement("div");
  questionBlock.className = "question-block";

  const questionText = document.createElement("p");
  questionText.textContent = questionData.question;

  const options = document.createElement("div");
  options.className = "options";

  questionData.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = index;
    input.onclick = () => checkAnswer(index, questionData.answer);

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    options.appendChild(label);
  });

  const feedback = document.createElement("div");
  feedback.id = "feedback";

  const timer = document.getElementById("timer");
  let secondsLeft = 30;
  timer.textContent = `⏱️ ${secondsLeft}s`;

  questionTimer = setInterval(() => {
    secondsLeft--;
    timer.textContent = `⏱️ ${secondsLeft}s`;

    if (secondsLeft <= 0) {
      clearInterval(questionTimer);
      feedback.textContent = "⛔ Time's up!";
      feedback.className = "fail";
      wrongCount++;
      setTimeout(nextQuestion, 1500);
    }
  }, 1000);

  questionBlock.appendChild(questionText);
  questionBlock.appendChild(options);
  questionBlock.appendChild(feedback);
  questionArea.appendChild(questionBlock);
}

function checkAnswer(selected, correct) {
  clearInterval(questionTimer);

  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "pass";
    correctCount++;
  } else {
    feedback.textContent = "❌ Incorrect!";
    feedback.className = "fail";
    wrongCount++;
  }

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

// ========== Finish and Results ==========
function finishQuiz() {
  const timeTaken = Math.round((Date.now() - startTime) / 1000);

  const result = {
    chapter: selectedChapter.title,
    correct: correctCount,
    wrong: wrongCount,
    time: timeTaken,
    name: playerName
  };

  localStorage.setItem("result", JSON.stringify(result));
  window.location.href = "results.html";
}

// ========== Results Page ==========
function showResults() {
  const result = JSON.parse(localStorage.getItem("result"));

  if (!result) {
    window.location.href = "start.html";
    return;
  }

  document.getElementById("resultChapter").textContent = `📘 Chapter: ${result.chapter}`;
  document.getElementById("resultName").textContent = `👤 Name: ${result.name}`;
  document.getElementById("resultTime").textContent = `⏱️ Time: ${result.time}s`;
  document.getElementById("resultScore").textContent = `✅ Correct: ${result.correct} | ❌ Wrong: ${result.wrong}`;

  // Submit to leaderboard
  submitToGoogleForm(result);
}

// ========== Google Form Leaderboard ==========
function submitToGoogleForm(data) {
  const formURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse";

  const formData = new FormData();
  formData.append("entry.YOUR_NAME_ID", data.name);
  formData.append("entry.YOUR_CHAPTER_ID", data.chapter);
  formData.append("entry.YOUR_TIME_ID", data.time);
  formData.append("entry.YOUR_CORRECT_ID", data.correct);
  formData.append("entry.YOUR_WRONG_ID", data.wrong);

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });
}

// ========== Utility Buttons ==========
function goToChapters() {
  window.location.href = "chapters.html";
}

function downloadCertificate() {
  alert("🧾 Certificate feature coming soon!");
}

function shareOnWhatsApp() {
  const result = JSON.parse(localStorage.getItem("result"));
  const msg = `I just completed ${result.chapter} on Server Room Lockdown! ✅ ${result.correct} correct, ❌ ${result.wrong} wrong, in ${result.time}s!`;
  const link = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(link, "_blank");
}
