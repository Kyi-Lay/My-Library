let questions = [
    {
      question: "In the passwordGenerator(num) function, what does the for loop accomplish?",
      options: ["(A) It logs the password to the console.", "(B) It generates a password of a specified length.", "(C) It checks if the password is strong.", "(C) It checks if the password is strong.", "(E) It selects a button by its ID"],
      answer: "(B) It generates a password of a specified length.",
    },
    {
      question: "What happens when the shopping item input is empty?",
      options: ["(A) A new list item is added to the shopping list.", "(B) An error message is logged, and the function exits early.", "(C) The input field is removed from the DOM.", "(D) The shopping list is cleared."],
      answer: "(A) It selects the first element with the ID 'increment'.",
    },
    {
      question: "Which Bootstrap class is used to align flex items to the center axis in the specified section?",
      options: ["(A) justify-content-end", "(B) align-items-center ", "(C) justify-content-center", "(D) align-items-start", "(E) flex-column"],
      answer: "(C) justify-content-center",
    },
    {
      question: "In the form, what does the placeholder attribute do?",
      options: ["(A) It sets the maximum length of the input.", "(B) It provides a hint to the user about what to enter in the input field.", "(C) It automatically validates the input.", "(D) It styles the input field with a border.", "(E) It makes the field read-only."],
      answer: "(B) It provides a hint to the user about what to enter in the input field.",
    },
    {
        question: "Which jQuery method is used to attach the form submission event handler?",
        options: ["(A) onSubmit", "(B) bind", "(C) addEventListener", "(D) on", "(E) submit"],
        answer: "(D) on ",
      },
      {
        question: "What class is added to the .time-div elements when the currentHour equals timeDiv?",
        options: ["(A) future", "(B) past", "(C) present", "(D) active", "(E) current"],
        answer: "(C) present",
      },
      {
        question: "What will be printed for the number 9?",
        options: ["(A) Buzz", "(B) Fizz0", "(C) Fizz Buzz", "(D) 9", "(E) None of the above"],
        answer: "(B) Fizz",
      },
      {
        question: "Why does the loop in the maxNum function start from index 1?",
        options: ["(A) Because the array might be empty.", "(B) To avoid comparing the first element with itself.", "(C) To ensure the function can handle arrays with negative numbers.", "(D) Because the maximum value is always at index 1.", "(E) To skip the first element entirely."],
        answer: "(B) To avoid comparing the first element with itself.",
      },
      {
        question: "What is the output of the vowelCount('Hello World!') function?",
        options: ["(A) 2", "(B) 3", "(C) 4", "(D) 1", "(E) 0"],
        answer: "(B) 3",
      },
      {
        question: "Which method is used to save the tasks to local storage?",
        options: ["(A) localStorage.addItem(tasks, JSON.stringify(tasks));", "(B) localStorage.set(tasks, JSON.stringify(tasks));", "(C) localStorage.store(tasks, tasks);", "(localStorage.setItem(tasks, JSON.stringify(tasks));", "(E) localStorage.save(tasks, tasks);"],
        answer: "(localStorage.setItem(tasks, JSON.stringify(tasks));.",
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