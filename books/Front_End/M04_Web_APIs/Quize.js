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
      options: ["(A) It displays a message all at once.", "(B) It checks if the element is a direct child of a container. ", "(C) It checks if the element has a class of "box".", "(D) It checks if the element has a data-state attribute.", "(E)  An error will be thrown. "],
      answer: "(C) It checks if the element has a class of box.",
    },
    {
      question: "What type of data is stored in local storage using localStorage.setItem()?",
      options: ["(A) The user object as a plain object.", "(B) The user object as a string.", "(C) The user object as an array.", "(D) The user object as a number.", "(E) The user object as a boolean value."],
      answer: "(B) The user object as a string.",
    },
    {
        question: "What does the function random_Func(length) return?",challen
        options: ["(A) A random number between 0 and length - 1 ", "(B) A random number between 1 and length", "(C) A random float between 0 and length", "(D) A random boolean value", "(E) A random string from a list"],
        answer: "(A) A random number between 0 and length - 1  ",
      },
      {
        question: "If the function is called with logEvenNums(0), what will it output?",
        options: ["(A) It will print nothing.", "(B) It will print 1.", "(C) It will print 0.", "(D) It will print -1.", "(E) It will print all numbers up to 0."],
        answer: "( C) It will print 0.",
      },
      {
        question: "What will the following code print when countdown(9) is called?",
        options: ["(A) 9, 8, 7, 6, 5, 4, 3, 2, 1", "(B) 9, 8, 7, 6, 5, 4, 3, 2, 0", "(C) 1, 2, 3, 4, 5, 6, 7, 8, 9", "(D) 10, 9, 8, 7, 6, 5, 4, 3, 2, 1", "(E) 9"],
        answer: "The ultimate correct answer!",
      },
      {
        question: "What is the purpose of the sumArray function?",
        options: ["(A) To find the maximum number in the array.", "(B) To concatenate all strings in the array.", "(C) To add all the numbers in the array and return the total.", "(D) To sort the numbers in the array.", "(E) To count the number of elements in the array."],
        answer: "(C) To add all the numbers in the array and return the total.",
      },
      {
        question: "What is the purpose of localStorage.setItem user, userString in the code?",
        options: ["(A) It logs the user details to the console.", "(B) It saves the user object as a string in local storage.", "(C) It clears the user data from local storage.", "(D) It sends user data to a server.", "(E) It checks if the user is already registered."],
        answer: "(B) It saves the user object as a string in local storage.",
",
      },
      {
        question: "What is the purpose of the taskIdCounter variable in the code?",
        options: ["(A) It stores the total number of tasks.", "(B) It generates unique IDs for each task.", "(C) It counts the number of completed tasks.", "(D) It tracks the number of edits made to tasks.", "(E) It holds the index of the last task in the array."],
        answer: "(B) It generates unique IDs for each task.",
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