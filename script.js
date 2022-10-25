const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll('input')
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");
const ul = document.querySelectorAll('ul')

let currentQuiz = 0;
let score = 0;

loadQuiz(currentQuiz);

function loadQuiz(i) {
  questionEl.innerHTML = quizData[i].question;
  a_text.innerHTML = quizData[i].a;
  b_text.innerHTML = quizData[i].b;
  c_text.innerHTML = quizData[i].c;
  d_text.innerHTML = quizData[i].d;
}

function deselectAnswers() {
    answerEls.forEach(item=>{
        item.checked = false
    })
}

function getSelected() {
    let answer = quizData[currentQuiz].correct
    answerEls.forEach(item=>{
        if(item.checked){
            if(item.id == answer){
                score += 1;
            }
        }
    });
}

submitBtn.addEventListener("click", () => {
    ul[0].style.display = "block";
    getSelected()
    currentQuiz = currentQuiz + 1;
    if(quizData.length > currentQuiz){
        loadQuiz(currentQuiz);
    }else{
        ul[0].style.display = "none";
        questionEl.innerHTML = score;
        submitBtn.innerHTML ="Your Score";
        currentQuiz = 0
        score = 0
    }
    deselectAnswers()
});
