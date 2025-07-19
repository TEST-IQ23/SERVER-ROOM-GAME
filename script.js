let currentChapterIndex = null;

// Load chapters on page load
document.addEventListener("DOMContentLoaded", () => {
  const chaptersList = document.getElementById("chaptersList");
  const playerNameSpan = document.getElementById("playerName");
  const playerName = localStorage.getItem("playerName") || "Agent";
  if (playerNameSpan) {
    playerNameSpan.textContent = playerName;
  }

  // Display list of chapters
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

// Load a specific chapter
function loadChapter(index) {
  currentChapterIndex = index;
  const chapter = chapters[index];
  const container = document.getElementById("chaptersList");
  container.innerHTML = ""; // Clear

  // Chapter Title
  const title = document.createElement("h2");
  title.textContent = `Chapter ${index + 1}: ${chapter.title}`;
  container.appendChild(title);

  // Questions
  chapter.questions.forEach((q, qIndex) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const questionText = document.createElement("p");
    questionText.textContent = `${qIndex + 1}. ${q.question}`;
    block.appendChild(questionText);

    if (q.type === "MCQ") {
      q.options.forEach(option => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index}_${qIndex}`;
        input.value = option;
        label.appendChild(input);
        label.append(` ${option}`);
        block.appendChild(label);
        block.appendChild(document.createElement("br"));
      });
    } else if (q.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.name = `q${index}_${qIndex}`;
      block.appendChild(input);
    }

    container.appendChild(block);
  });

  // Navigation Buttons
  const navWrapper = document.createElement("div");
  navWrapper.className = "navigation-buttons";

  if (index > 0) {
    const backBtn = document.createElement("button");
    backBtn.textContent = "🔙 Back to Chapters";
    backBtn.className = "back-button";
    backBtn.onclick = () => showChapterList();
    navWrapper.appendChild(backBtn);
  }

  if (index < chapters.length - 1) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "➡️ Next Chapter";
    nextBtn.className = "next-button";
    nextBtn.onclick = () => loadChapter(index + 1);
    navWrapper.appendChild(nextBtn);
  } else {
    const doneMsg = document.createElement("p");
    doneMsg.textContent = "🎉 You've reached the final chapter!";
    navWrapper.appendChild(doneMsg);
  }

  container.appendChild(navWrapper);
}

// Show all chapters again
function showChapterList() {
  location.reload(); // Reload page to show chapter list
}
