let questions = [
    {
      question: "What does the button labeled Fetch Your User Repos do in the script?",
      options: ["(A) It deletes your repositories.", "(B) It fetches a list of your repositories from the server.", "(C) It updates your profile information.", "(D) It logs you out of your account.", "(E) It changes the background color of the page."],
      answer: "(B) It fetches a list of your repositories from the server.",
    },
    {
      question: "What is the purpose of the fetch function in this code?",
      options: ["(A) To retrieve data from a specified URL.", "(B) To update a GitHub repository.", "(C) To create a new issue on GitHub.", "(D) To log data to the console."],
      answer: "(A) To retrieve data from a specified URL.",
    },
    {
      question: "What does the getApi function fetch from the GitHub API?",
      options: ["(A) A list of repositories", "(B) A list of users ", "(C)  A list of commits", "(D) A list of branches", "(E) A list of branches"],
      answer: "(B) A list of users",
    },
    {
      question: "Where can users see the responses from the JavaScript code?",
      options: ["(A) In the browser's address bar..", "(B) In the browser's console.", "(C) In the HTML document itself.", "(D) In a pop-up window.", "(E) In the browser's address bar."],
      answer: "(B) In the browser's console.",
    },
    {
        question: "What does the function getRepoName do?",
        options: ["(A) It fetches issues from a GitHub repository.", "(B) It updates the document location to the homepage.", "(C) It extracts the repository name from the URL and displays it.", "(D) It checks if the repository has any issues.", "(E) It creates a warning for more than 30 issues."],
        answer: "(C) It extracts the repository name from the URL and displays it. ",
      },
      {
        question: "What method is used to fetch weather data from the API in the getWeather function?",
        options: ["(A) fetch()", "(B) getWeather()", "(C) request()", "(D) load()", "(E) request()"],
        answer: "(ဗ) fetch()",
      },
      {
        question: "What will the function isPalindrome(racecar) return?",
        options: ["(A) true", "(B) false", "(C) undefined", "(D) racecar", "(E) None of the above"],
        answer: "(A) true",
      },
      {
        question: "What does the factorial function return when called with the argument 5?",
        options: ["(A) 120", "(B) 60", "(C) 24", "(D) 125", "(E) 0"],
        answer: "(A) 120",
      },
      {
        question: "What does the titleCase function do?",
        options: ["(A) It converts all letters in a string to uppercase.", "(B) It returns a new string with the first letters of each word capitalized.", "(C) It removes all spaces from a string.", "(D) It reverses the characters in a string.", "(E) It converts all letters in a string to uppercase."],
        answer: "(B) It returns a new string with the first letters of each word capitalized.",
      },
      {
        question: "What is displayed if there are no open issues in the repository?",
        options: ["(A) This repo has no open issues!", "(B) No issues available.", "(C) This repository is empty.", "(D) Issues are currently being created.", "(E) Please check back later for issues."],
        answer: "(A) This repo has no open issues!",
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