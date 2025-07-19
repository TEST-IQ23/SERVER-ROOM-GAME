// General utility to get and set localStorage
function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Redirect to chapters if name is set
function checkPlayerName() {
  const playerName = getItem("playerName");
  if (!playerName) {
    window.location.href = "start.html";
  }
  return playerName;
}

// Page 1: Handle start.html
function handleStartPage() {
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("playerName").value.trim();
    if (nameInput) {
      setItem("playerName", nameInput);
      window.location.href = "chapters.html";
    } else {
      alert("Please enter your name to start.");
    }
  });
}

// Page 2: Handle chapters.html
function handleChaptersPage() {
  const name = checkPlayerName();
  document.getElementById("welcomeName").textContent = name;

  fetch("chapters.js")
    .then(res => res.text())
    .then(data => {
      eval(data); // Loads window.chapters
      const list = document.getElementById("chapterList");
      window.chapters.forEach(chapter => {
        const btn = document.createElement("button");
        btn.className = "chapter-button";
        btn.textContent = chapter.title;
        btn.addEventListener("click", () => {
          setItem("currentChapter", chapter);
          window.location.href = "question.html";
        });
        list.appendChild(btn);
      });
    });
}

// Page 3: Handle question.html
let timer;
let timeTaken = 0;

function handleQuestionPage() {
  const chapter = getItem("currentChapter");
  const playerName = checkPlayerName();
  if (!chapter) {
    window.location.href = "chapters.html";
    return;
  }

  document.getElementById("chapterTitle").textContent = chapter.title;

  fetch("questions.js")
    .then(res => res.text())
    .then(data => {
      eval(data); // Loads window.questions
      const questions = window.questions[chapter.id];
      let index = 0;
      let score = 0;

      function showQuestion() {
        if (index >= questions.length) {
          clearInterval(timer);
          const totalTime = `${timeTaken}s`;
          setItem("result", {
            chapter: chapter.title,
            score,
            total: questions.length,
            time: totalTime,
            player: playerName,
            date: new Date().toLocaleDateString()
          });
          window.location.href = "results.html";
          return;
        }

        const q = questions[index];
        document.getElementById("questionText").textContent = q.question;
        const optionsBox = document.getElementById("optionsBox");
        const feedback = document.getElementById("feedback");
        optionsBox.innerHTML = "";
        feedback.textContent = "";

        q.options.forEach(option => {
          const btn = document.createElement("button");
          btn.className = "option-button";
          btn.textContent = option;
          btn.addEventListener("click", () => {
            const correct = option === q.answer;
            feedback.textContent = correct ? "✅ Pass" : "❌ Fail";
            if (correct) score++;
            index++;
            setTimeout(showQuestion, 1000);
          });
          optionsBox.appendChild(btn);
        });
      }

      let secondsLeft = 30;
      const timerEl = document.getElementById("timer");
      timerEl.textContent = `⏱️ ${secondsLeft}s`;

      timer = setInterval(() => {
        secondsLeft--;
        timeTaken++;
        timerEl.textContent = `⏱️ ${secondsLeft}s`;
        if (secondsLeft <= 0) {
          index++;
          secondsLeft = 30;
          showQuestion();
        }
      }, 1000);

      showQuestion();
    });
}

// Page 4: Handle results.html
function handleResultsPage() {
  const result = getItem("result");
  if (!result) {
    window.location.href = "chapters.html";
    return;
  }

  document.getElementById("summary").innerHTML = `
    <p><strong>Chapter:</strong> ${result.chapter}</p>
    <p><strong>Player:</strong> ${result.player}</p>
    <p><strong>Score:</strong> ${result.score} / ${result.total}</p>
    <p><strong>Time Taken:</strong> ${result.time}</p>
    <p><strong>Date:</strong> ${result.date}</p>
  `;

  // Certificate link
  document.getElementById("certificateBtn").addEventListener("click", () => {
    alert("🎉 Certificate feature coming soon!");
  });

  // WhatsApp share
  document.getElementById("whatsappBtn").addEventListener("click", () => {
    const message = `I just played "${result.chapter}" on Server Room Lockdown!\nScore: ${result.score}/${result.total}\nTime: ${result.time}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
  });

  // Feedback
  document.getElementById("feedbackBtn").addEventListener("click", () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdu_fdi2qxup0D28h-bQXbrcpJJzm4AXZP9ByM57p9UXA06GQ/viewform", "_blank");
  });

  // Return to chapters
  document.getElementById("returnBtn").addEventListener("click", () => {
    window.location.href = "chapters.html";
  });

  // Leaderboard submission
  submitToLeaderboard(result);
}

// Google Form submission
function submitToLeaderboard(data) {
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe4EwuIPz9MRWBLtGwxFm-r9tt38uHa8R33UwMXnu-XQnZY2A/formResponse';

  const formData = new FormData();
  formData.append('entry.2060976916', data.player); // Player Name
  formData.append('entry.784134679', data.chapter); // Chapter
  formData.append('entry.222168494', `${data.score}/${data.total}`); // Score
  formData.append('entry.1033246286', data.date); // Date
  formData.append('entry.225669406', data.time); // Time Taken

  fetch(formUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  });
}

// Routing logic for loading per page
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");
  switch (page) {
    case "start":
      handleStartPage();
      break;
    case "chapters":
      handleChaptersPage();
      break;
    case "question":
      handleQuestionPage();
      break;
    case "results":
      handleResultsPage();
      break;
  }
});
