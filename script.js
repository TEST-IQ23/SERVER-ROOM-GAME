document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const chapterList = document.getElementById("chapter-list");
  const startScreen = document.getElementById("start-screen");
  const chapterContainer = document.getElementById("chapterContainer");
  const music = document.getElementById("bg-music");
  const clickSound = document.getElementById("click-sound");

  const chapters = [
    "Firewall Breach",
    "Terminal Trace",
    "Encryption Chaos",
    "Database Leak",
    "Code Injection",
    "Packet Sniffed",
    "Logic Lock",
    "Rooted Secrets",
    "Server Heatwave",
    "The Final Override"
  ];

  let unlockedChapters = parseInt(localStorage.getItem("unlockedChapters")) || 1;

  function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
  }

  function showChapters() {
    chapterContainer.innerHTML = "";
    chapters.forEach((title, i) => {
      const card = document.createElement("div");
      card.className = "chapter-card";
      if (i + 1 > unlockedChapters) card.classList.add("locked");

      card.innerHTML = `<h3>Chapter ${i + 1}</h3><p>${title}</p>`;
      card.onclick = () => {
        playClick();
        window.location.href = `chapter.html?chapter=${i + 1}`;
      };

      chapterContainer.appendChild(card);
    });
  }

  startBtn.onclick = () => {
    playClick();
    startScreen.classList.add("hidden");
    chapterList.classList.remove("hidden");
    music.volume = 0.3;
    music.play();
    showChapters();
  };
});
