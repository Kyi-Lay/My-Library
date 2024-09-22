let questions = [
    {
      question: "What is the name of the kitten?",
      options: ["(A) Fluffy", "(B) Jax", "(C) Whiskers", "(D) Mittens", "(E) Pizza"],
      answer: "(B) Jax",
    },
    {
      question: "What does the document.querySelector('#increment') method do?",
      options: ["(A)It selects the first element with the ID 'increment'.", "(B) It creates a new element with the ID 'increment'.", "(C) It deletes the element with the ID 'increment'.", "(D) It selects all elements with the class 'increment'."],
      answer: "(A) It selects the first element with the ID 'increment'.",
    },
    {
      question: "What does the countdown function do?",
      options: ["(A) It displays a message all at once.", "(B) It counts down from 5 seconds and updates the timer display. ", "(C) It resets the countdown every second.", "(D) It only displays the time without counting down.", "(E) It stops the execution of all functions. "],
      answer: "(B) It counts down from 5 seconds and updates the timer display.",
    },
    {
      question: "What will be the output of the function?",မပဲီ
      options: ["(Shout,Shout", "(B) Shout,Shout", "(C) shout it all out!", "(D) shout, it all out!", "(E) Just shout"],
      answer: "(A) shout,shout",
    },
    {
        question: "What is this referring to in the line console.log(this);?",
        options: ["(A) The current function's context", "(B) The global object ", "(C) The parent object", "(D) An undefined value", "(E) A specific variable in the function"],
        answer: "(B) The global object ",
      },
      {
        question: "What does the generatePassword function do?",
        options: ["(A) It creates a new webpage.", "(B) It generates a random password based on specified criteria.", "(C) It deletes user input.", "(D) It saves passwords to a file.", "(E) Only numbers."],
        answer: "( It generates a random password based on specified criteria. ",
      },
      {
        question: "What does the add function do?",
        options: ["(A) It multiplies two numbers.", "(B) It subtracts the second number from the first.", "(C) It adds two numbers.", "(D) It divides the first number by the second.", "(E) It returns infinity."],
        answer: "(c) It adds two numbers.",
      },
      {
        question: "What will the function return for the input?",
        options: ["(A) odd", "(B) even", "(C) ten", "(D) negative", "(E) none"],
        answer: "(B) even",
      },
      {
        question: "What does the function logNums do?",
        options: ["(A) It prints all numbers from 1 to num.", "(B) It prints all even numbers from 1 to num.", "(C)  It calculates the sum of all numbers from 1 to num.", "(D) It returns the largest number less than num.", "(E) The function will not print anything"],
        answer: "(A) It prints all numbers from 1 to num.",
      },
      {
        question: "What does the randomNumber function do?",
        options: ["(A) Generates a random color", "(B) Generates a random numeric value between specified min and max", "(C) Generates a random name", "(D) Generates a random attack type", "(E) The player can immediately attack again"],
        answer: "(B) Generates a random numeric value between specified min and max",
      },
  ];
  
  let currentQuestion = 0;
  let timeLeft = 36;
  let timer;
  let score = 0;
  
  
  function startQuiz() {
    // console.log("hello");
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    // Shuffle questions array
    questions = shuffleArray(questions);
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
    startTimer(); // Start the timer after displaying the first question
  }
  
  
  
  function displayQuestion() {
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = ""; // Clear previous content
  
    const questionNumberLine = document.createElement("div");
    questionNumberLine.textContent = `Question ${currentQuestion + 1}: `;
    questionNumberLine.style.textAlign = "center"; // Center alignment
    questionNumberLine.style.color = "maroon"; // Maroon color
    questionNumberLine.style.position = "relative"; // Set position to relative
    questionNumberLine.style.paddingBottom = "10px"; // Offset beneath the text
    questionNumberLine.style.borderBottom = "1px solid black"; // Underline
  
    const questionTextLine = document.createElement("div");
    questionTextLine.textContent = questions[currentQuestion].question;
    questionTextLine.style.marginTop = "20px";
    // questionTextLine.style.maxWidth = "500px"; // Limit maximum width to prevent overflow
  
    questionContainer.appendChild(questionNumberLine);
    questionContainer.appendChild(questionTextLine);
  
    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = ""; // Clear previous options
    const shuffledOptions = shuffleArray(questions[currentQuestion].options);
    shuffledOptions.forEach((option) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
      optionsContainer.appendChild(optionDiv);
    });
    document.getElementById("next-question").style.display = "block";
  }
  
  
  function startTimer() {
    // console.log("Mdy");
    timer = setInterval(function () {
      // console.log("Yangon");
      if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
      } else {
        clearInterval(timer);
        document.getElementById("time").textContent = "Time's up!";
        document.querySelectorAll('input[type="radio"]').forEach((input) => {
          input.disabled = true;
        });
        setTimeout(nextQuestion, 2000);
      }
    }, 1000);
  }
  
  function checkAnswer() {
    clearInterval(timer);
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      document.getElementById("feedback").textContent =
        "Please select an answer!";
      return;
    }
    const answer = selectedAnswer.value;
    if (answer === questions[currentQuestion].answer) {
      score++;
      document.getElementById("feedback").textContent = "Correct!";
    } else {
      document.getElementById(
        "feedback"
      ).textContent = `Incorrect. The correct answer is ${questions[currentQuestion].answer}.`;
    }
    document.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.disabled = true;
    });
    setTimeout(nextQuestion, 1000);
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      timeLeft = 36;
      displayQuestion();
      startTimer();
      document.getElementById("feedback").textContent = "";
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    const username = document.getElementById("username").value;
    const percentage = (score / questions.length) * 100;
    let resultText;
    if (percentage >= 50) {
      resultText = `<span class="pass">You Pass!</span>`;
    } else {
      resultText = `<span class="fail">You Fail!</span>`;
    }
    document.getElementById(
      "result"
    ).innerHTML = `${username}, you scored ${score} out of ${questions.length}!<br>${resultText}`;
  }
  
  function testAgain() {
    currentQuestion = 0;
    timeLeft = 10;
    score = 0;
    questions = shuffleArray(questions);
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    displayQuestion();
    startTimer();
  }
  
  // Function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function clearPlaceholder(element) {
    element.placeholder = "";
  }