//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

  const questionsContainer = document.getElementById('questions');
        const submitButton = document.getElementById('submit');
        const scoreDisplay = document.getElementById('score');

  const userAnswers = JSON.parse(sessionStorage.getItem('progress')) || {};

// Display the quiz questions and choices
   function renderQuestions() {
            questions.forEach((q, i) => {
                const questionElement = document.createElement("div");
                questionElement.className = "question";

                const questionText = document.createElement("p");
                questionText.textContent = `${i + 1}. ${q.question}`;
                questionElement.appendChild(questionText);

                const optionsContainer = document.createElement("div");
                optionsContainer.className = "options";

                q.choices.forEach((choice) => {
                    const choiceElement = document.createElement("input");
                    choiceElement.type = "radio";
                    choiceElement.name = `question-${i}`;
                    choiceElement.value = choice;
                    if (userAnswers[i] === choice) {
                        choiceElement.checked = true;
                    }

                    choiceElement.addEventListener("change", () => {
                        userAnswers[i] = choice;
                        sessionStorage.setItem("progress", JSON.stringify(userAnswers));
                    });

                    const label = document.createElement("label");
                    label.textContent = choice;

                    optionsContainer.appendChild(choiceElement);
                    optionsContainer.appendChild(label);
                    optionsContainer.appendChild(document.createElement("br"));
                });

                questionElement.appendChild(optionsContainer);
                questionsContainer.appendChild(questionElement);
            });
        }

  submitButton.addEventListener("click", () => {
            let score = 0;

            questions.forEach((q, i) => {
                if (userAnswers[i] === q.answer) {
                    score++;
                }
            });

            scoreDisplay.style.display = "block";
            scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}.`;

            // Save score to local storage
            localStorage.setItem("score", score);
        });
renderQuestions();
