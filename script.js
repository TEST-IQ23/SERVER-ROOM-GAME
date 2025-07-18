// Load chapters from chapters.js and display them
document.addEventListener("DOMContentLoaded", () => {
  const chaptersList = document.getElementById("chaptersList");
  const playerNameSpan = document.getElementById("playerName");

  // Get player name from localStorage
  const playerName = localStorage.getItem("playerName") || "Agent";
  if (playerNameSpan) {
    playerNameSpan.textContent = playerName;
  }

  // Load chapters from chapters.js (Code 2)
  if (typeof chapters !== "undefined" && chapters.length > 0) {
    chapters.forEach((chapter, index) => {
      const chapterButton = document.createElement("button");
      chapterButton.textContent = `Chapter ${index + 1}: ${chapter.title}`;
      chapterButton.className = "chapter-button";
      chapterButton.onclick = () => loadChapter(index);
      chaptersList.appendChild(chapterButton);
    });
  } else {
    chaptersList.innerHTML = "<p>⚠️ No chapters available.</p>";
  }
});

// Load selected chapter and display only its questions
function loadChapter(chapterIndex) {
  const chapter = chapters[chapterIndex];
  const chaptersList = document.getElementById("chaptersList");
  chaptersList.innerHTML = ""; // Clear previous list

  const backBtn = document.createElement("button");
  backBtn.textContent = "🔙 Back to Chapters";
  backBtn.className = "back-button";
  backBtn.onclick = () => location.reload();
  chaptersList.appendChild(backBtn);

  const chapterTitle = document.createElement("h2");
  chapterTitle.textContent = chapter.title;
  chaptersList.appendChild(chapterTitle);

  chapter.questions.forEach((q, qIndex) => {
    const questionBlock = document.createElement("div");
    questionBlock.className = "question-block";

    const questionText = document.createElement("p");
    questionText.textContent = `${qIndex + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    if (q.type === "MCQ") {
      q.options.forEach((opt, optIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${chapterIndex}_${qIndex}`;
        input.value = opt;

        label.appendChild(input);
        label.append(` ${opt}`);
        questionBlock.appendChild(label);
        questionBlock.appendChild(document.createElement("br"));
      });
    } else if (q.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.name = `q${chapterIndex}_${qIndex}`;
      questionBlock.appendChild(input);
    }

    chaptersList.appendChild(questionBlock);
  });
}
