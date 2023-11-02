const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      correct: "Paris"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: "Mars"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "F. Scott Fitzgerald"],
      correct: "William Shakespeare"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African elephant", "Blue whale", "Giraffe", "Polar bear"],
      correct: "Blue whale"
    },
    {
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      correct: "Carbon dioxide"
    },
    {
      question: "In which year did Christopher Columbus first voyage to the Americas?",
      options: ["1492", "1776", "1066", "1945"],
      correct: "1492"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      correct: "Au"
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Mark Twain"],
      correct: "Harper Lee"
    },
    {
      question: "Which of the following is not a primary color?",
      options: ["Red", "Green", "Blue", "Yellow"],
      correct: "Green"
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Liver", "Skin", "Brain"],
      correct: "Skin"
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      options: ["Amelia Earhart", "Bessie Coleman", "Sally Ride", "Marie Curie"],
      correct: "Amelia Earhart"
    },
    {
      question: "What is the chemical formula for water?",
      options: ["CO2", "H2O", "O2", "NaCl"],
      correct: "H2O"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "India"],
      correct: "Japan"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correct: "Leonardo da Vinci"
    },
    {
      question: "What is the largest ocean in the world?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      correct: "Pacific Ocean"
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      correct: "Nitrogen"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Jupiter"
    },
    {
      question: "Who is the current President of the United States (as of my last knowledge update in 2022)?",
      options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Washington"],
      correct: "Joe Biden"
    },
    {
      question: "Which famous scientist formulated the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correct: "Albert Einstein"
    },
    {
      question: "What is the national flower of Japan?",
      options: ["Rose", "Lotus", "Cherry Blossom", "Tulip"],
      correct: "Cherry Blossom"
    }
  ]

const question = document.getElementById("question");
const optionParagraphs = document.getElementsByClassName("option")
const qnumber = document.getElementById('qnumber');
const scoreCard = document.getElementById('score');
const nextButton = document.getElementById('nextButton');
const optionsContainer = document.getElementById('optionsContainer')
const body = document.getElementsByTagName('Body')[0];
  let i = 0;
  let score = 0;
  let valStat = -1;
  let limit = 10;

// display score
const displayScore = ()=>{
    scoreCard.textContent = score
}






