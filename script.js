const questions = [
    {
        question:" If in a certain language MYSTIFY is coded as NZTUJGZ, how is NEMESIS coded in that language?",
        answers:[
            {text: "M D L H R D R  ",correct :false},
            {text: "O F N F T J T ",correct :true},
            {text: "O D N H T D R",correct :false},
            {text: "P G O K U G U",correct :false},
        ]
    },
    {
        question: "In a certain code, FORGE is written as FPTJI. How is CULPRIT written in that code?",
        answers:[
            { text: "C V N S V N Z", correct: true},
            { text: "C V M Q S T U", correct: false},
            { text: "C X O S U L W", correct: false},
            { text: "C S J N P G R ", correct: false},
        ]
    },
    {
        question: "In a certain code, MONKEY is written as XDJMNL. How is TIGER written in that code?",
        answers:[
            { text: "S D F H S", correct: false},
            { text: "S H F D Q", correct: false},
            { text: "U J H F S", correct: false},
            { text: "Q D F H S", correct: true},

        ]
    },
    {
        question: "If FRAGRANCE is written as SBHSBODFG, how can IMPOSING be written?",
        answers:[
            { text: "N Q T P J O H J", correct: false},
            { text: "N Q P T J O H J", correct: true},
            { text: "N Q P T J O H I", correct: false},
            { text: "N Q P T J H O J", correct: false},

        ]
    },
    {
        question: "In a certain code language, TAPE is written as EPAT and LOVE is written as EVOL. How will NITIN be written in the same language?",
        answers:[
            { text: "T I N N I", correct: false},
            { text: "N I T I N", correct: false},
            { text: "I T N N I", correct: false},
            { text: "I N N T I", correct: true},

        ]
    },
    {
        question: "In a certain code language, 'SOIL' is coded as '38301824'. How will 'DECIMAL' be coded in that language?",
        answers:[
            { text: "4 1 0 6 0 9 2 8 2 2 4", correct: false},
            { text: "8 1 0 6 1 8 2 6 2 2 4", correct: false},
            { text: "8 5 1 6 1 6 2 6 2 2 4", correct: false},
            { text: "8 1 0 6 2 0 2 8 2 2 6", correct: true},

        ]
    }
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer . correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML =  `You scored ${score} out of ${questions. length}!`;
    nextButton.innerHTML = "play Again"
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}





nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();
