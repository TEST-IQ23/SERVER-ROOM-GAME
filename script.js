// Page 3: question.html logic
if (window.location.pathname.includes("question.html")) {
  const chapterId = localStorage.getItem("selectedChapterId");
  const chapterTitle = localStorage.getItem("selectedChapterTitle");
  const playerName = localStorage.getItem("playerName");

  const chapterTitleElem = document.getElementById("chapterTitle");
  const questionTextElem = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const feedbackElem = document.getElementById("feedback");
  const timerElem = document.getElementById("timer");

  chapterTitleElem.textContent = chapterTitle;

  const questions = questionData[chapterId];
  let currentQuestion = 0;
  let score = 0;
  let totalTime = 0;
  let interval;
  let timeLeft = 30;

  function showQuestion() {
    if (currentQuestion >= questions.length) {
      localStorage.setItem("score", score);
      localStorage.setItem("timeTaken", totalTime);
      window.location.href = "results.html";
      return;
    }

    const q = questions[currentQuestion];
    questionTextElem.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "option-btn";
      btn.onclick = () => handleAnswer(option);
      optionsContainer.appendChild(btn);
    });

    timeLeft = 30;
    timerElem.textContent = timeLeft;
    clearInterval(interval);
    interval = setInterval(() => {
      timeLeft--;
      timerElem.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(interval);
        feedback("Time's up!", false);
        setTimeout(nextQuestion, 1000);
      }
    }, 1000);
  }

  function handleAnswer(selected) {
    clearInterval(interval);
    const correct = questions[currentQuestion].answer;
    const isCorrect = selected === correct;
    if (isCorrect) score++;
    feedback(isCorrect ? "Pass ✅" : "Fail ❌", isCorrect);
    setTimeout(nextQuestion, 1000);
  }

  function feedback(message, success) {
    feedbackElem.textContent = message;
    feedbackElem.style.display = "block";
    feedbackElem.style.color = success ? "green" : "red";
  }

  function nextQuestion() {
    feedbackElem.style.display = "none";
    totalTime += (30 - timeLeft);
    currentQuestion++;
    showQuestion();
  }

  showQuestion();
}
