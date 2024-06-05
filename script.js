const questionObj =
{
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  options: ['Two', 'Three', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",
};

let score = 0; 

const scoreEl = document.querySelector("#score");

const scoreCount = document.createElement('h3'); 

scoreEl.append(scoreCount); 




// const questionEl = document.querySelector("#question");

// questionEl.textContent = "Q1 "+questionObj.question;


//destructuring

const { correctAnswer, options, question } = questionObj; 


const questionEl = document.getElementById('question'); 

questionEl.textContent = question; 

//getting access to the option section and then updating the buttons text using options in question obj



const optionsEl = document.getElementById('options'); 

// const buttonEl = document.createElement("button");

// buttonEl.textContent = options[0];

// optionsEl.appendChild(buttonEl);

//approach 1
// for (i = 0; i < options.length; i++){
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = options[i];
//   optionsEl.append(buttonEl);
// }



//fetching shuffled array of options
const shuffleOptions = shuffledOptions(options);
//aproach 2 using foreach loop



shuffleOptions.forEach((opt) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = opt;
  optionsEl.append(buttonEl)
    ;
  

  //event handling of buttons

  buttonEl.addEventListener("click", ()=> {
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


    console.log(score);

   //handling score display 
    scoreCount.textContent = `Score : ${score}`; 

    //updating

    questionEl.textContent = "Quiz Samapt!! "
    optionsEl.textContent=""

  });

  
}); 

//shuffling the options


function shuffledOptions(options) {
  for (let i = options.length - 1; i >= 0; i--){
    const j = Math.floor(Math.random() * i + 1); 

    [options[i], options[j]] = [options[j], options[i]]; 
  }

  return options; 
}



















