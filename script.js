/* ===== Global Styles ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(145deg, #0d1117, #161b22);
  color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
}

h1, h2, h3 {
  margin-bottom: 20px;
  color: #58a6ff;
}

p {
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 1.1rem;
}

/* ===== Input Field ===== */
input[type="text"] {
  padding: 10px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 80%;
  max-width: 400px;
  margin-bottom: 20px;
}

/* ===== Buttons ===== */
button, .btn, .button {
  background-color: #238636;
  color: #fff;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 10px 5px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

button:hover, .btn:hover, .button:hover {
  background-color: #2ea043;
}

.secondary-btn {
  background-color: #30363d;
}

.secondary-btn:hover {
  background-color: #484f58;
}

/* ===== Chapter Buttons ===== */
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.chapter-btn, .chapter-button {
  background-color: #161b22;
  color: #58a6ff;
  border: 2px solid #58a6ff;
  padding: 20px;
  font-size: 1.1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  margin: 12px 0;
}

.chapter-btn:hover, .chapter-button:hover {
  background-color: #58a6ff;
  color: #161b22;
}

/* ===== Question Layout ===== */
.question-block, .question-box {
  background-color: #1e222a;
  padding: 20px;
  margin: 30px auto;
  border-radius: 8px;
  max-width: 700px;
  color: #fff;
}

.question-block p {
  font-weight: bold;
  font-size: 1.1rem;
}

input[type="radio"] {
  margin-right: 10px;
}

.options {
  text-align: left;
  margin-top: 20px;
}

.option, .option-button {
  display: block;
  background-color: #30363d;
  color: white;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.option-button:hover {
  background-color: #484f58;
}

/* ===== Timer ===== */
#timer, .timer {
  font-size: 1.3rem;
  font-weight: bold;
  background-color: #21262d;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 2px solid #30363d;
  color: #ffa657;
}

/* ===== Feedback ===== */
#feedback, .feedback {
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.1rem;
  color: inherit;
}

.pass {
  color: #3fb950;
}

.fail {
  color: #f85149;
}

/* ===== Results Summary ===== */
.result-summary, .results {
  background-color: #1e222a;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  text-align: left;
  font-size: 1rem;
  line-height: 1.8;
}

.result-summary p {
  margin-bottom: 10px;
}

/* ===== Certificate & Sharing Buttons ===== */
.cert-buttons, .certificate, .whatsapp, .feedback-link {
  margin-top: 30px;
  display: block;
  width: 100%;
}

.cert-buttons button {
  display: block;
  width: 100%;
  margin: 10px 0;
}

/* ===== Responsive Design ===== */
@media (max-width: 600px) {
  .container {
    padding: 20px 10px;
  }

  .question-block {
    padding: 15px;
  }

  button, .btn, .button, .chapter-btn, .chapter-button {
    width: 100%;
    font-size: 0.95rem;
  }

  input[type="text"] {
    width: 100%;
  }
}
