// const questionObj =
// {
//   category: 'Food & Drink',
//   id: 'qa-1',
//   correctAnswer: 'Three',
//   options: ['Two', 'Three', 'Four', 'Five'],
//   question:
//     "How many pieces of bun are in a Mcdonald's Big Mac?",
// };


const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];


let score = 0; 
let currentQuestion = 0; 
const totalScore = quesJSON.length; 

const questionEl = document.getElementById('question'); 
const scoreEl = document.querySelector("#score");
const optionsEl = document.getElementById('options'); 


const nextEl = document.querySelector("#next"); 


const scoreCount = document.createElement('h3'); 

scoreEl.append(scoreCount); 


showQuestion();

nextEl.addEventListener('click', () => {
  
  scoreCount.textContent = `Score : ${score} /${totalScore}`;



  nextQuestion(); 
});

function showQuestion() {
  //destructuring

  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  //setting question text content 
  questionEl.textContent = question;

  const shuffleOptions = shuffledOptions(options);

  shuffleOptions.forEach((opt) => {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = opt;
    optionsEl.append(buttonEl)
      ;


    //event handling of buttons

    buttonEl.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;

        //making the background color of correct option green 
        buttonEl.style.backgroundColor = '#7BC74D';
        buttonEl.style.color = "white";

      } else {
        score = score - 0.25;

        //making the background color of correct option red
        buttonEl.style.backgroundColor = '#CD3F3E';
        buttonEl.style.color = "white";

      }


      // console.log(score);

      //handling score display 
      scoreCount.textContent = `Score : ${score} /${totalScore}`;
      nextQuestion(); 

      //updating

      // questionEl.textContent = "Quiz Samapt!! "
      // optionsEl.textContent = ""

    });


  });
}



function nextQuestion() {
  currentQuestion++; 
  // console.log("Current question ="+currentQuestion);
  optionsEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {

    questionEl.textContent = "Quiz Samapt!! "
    nextEl.remove();
    
  } else {
    showQuestion(); 
  }
}
//shuffling the options


function shuffledOptions(options) {
  for (let i = options.length - 1; i >= 0; i--){
    const j = Math.floor(Math.random() * i + 1); 

    [options[i], options[j]] = [options[j], options[i]]; 
  }

  return options; 
}



















