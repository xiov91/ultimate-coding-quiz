(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                    </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        var quizScore = `${numCorrect} out of ${myQuestions.length}`;
        localStorage.setItem('user score', quizScore);
        window.location.href = 'highscore.html';

    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        nextButton.style.display = 'none';
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        }
        else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    function startQuiz() {
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
                if (userAnswer != currentQuestion.correctAnswer) {
                    seconds -= 05;
                }
                if (--timer === 0) {
                    showResults();
                }
            }, 1000);
        }

        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
        }


        // Variables
        const quizContainer = document.getElementById('quiz');
        const resultsContainer = document.getElementById('results');
        const submitButton = document.getElementById('submit');
        const startButton = document.getElementById('start');
        const myQuestions = [
            {
                question: "Inside which HTML element do we put the JavaScript?",
                answers: {
                    a: "html",
                    b: "head",
                    c: "div",
                    d: "script"
                },
                correctAnswer: "d"
            },
            {
                question: "Where is the correct place to insert a JavaScript??",
                answers: {
                    a: "Both the head and the body sections are correct",
                    b: "head",
                    c: "body"
                },
                correctAnswer: "a"
            },
            {
                question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
                answers: {
                    a: "script href='xxx.js'",
                    b: "script name='xxx.js'",
                    c: "script tag='xxx.js'",
                    d: "script src='xxx.js'"
                },
                correctAnswer: "d"
            },
            {
                question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                answers: {
                    a: "if (i<>5)",
                    b: "if i <> 5",
                    c: "if (i !=5)",
                    d: "if i !=5 then"
                },
                correctAnswer: "c"
            },
            {
                question: "How can you add a comment in a JavaScript?",
                answers: {
                    a: "'This is a comment",
                    b: "!!!This is a comment!!!",
                    c: "//This is a comment"
                },
                correctAnswer: "c"
            }
        ];


        // Kick things off
        buildQuiz();

        // Pagination
        const previousButton = document.getElementById("previous");
        const nextButton = document.getElementById("next");
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        // Show the first slide
        showSlide(currentSlide);

        // Event listeners
        submitButton.addEventListener('click', showResults);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
        startQuiz();
    }) ();



//need to make the quiz invisible, but visible once the last button was pressed
