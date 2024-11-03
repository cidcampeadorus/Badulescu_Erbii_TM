// Fonction pour vérifier les réponses des limites
function checkAnswerLimits(questionNumber) { 
  let correctAnswers = { 
      1: "c", 2: "b", 3: "b", 4: "a", 5: "c", 
      6: "b", 7: "a", 8: "c", 9: "a", 10: "c"
  };
  let selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  let resultDiv = document.getElementById(`result${questionNumber}`);
  if (!selectedAnswer) {
      resultDiv.textContent = "Veuillez sélectionner une réponse.";
      resultDiv.style.color = "black";
  } else if (selectedAnswer.value === correctAnswers[questionNumber]) {
      resultDiv.textContent = "Correct !";
      resultDiv.style.color = "green";
  } else {
      resultDiv.textContent = "Incorrect. Essayez encore.";
      resultDiv.style.color = "red";
  }
}

// Fonction exercice á trou limites
function checkAnswer_text_limite(questionNumber) {
  const answers = {
      1: ["12", 12],
      2: ["0", 0],
      3: ["0", 0],
      4: ["6", 6],
      5: ["1", 1, "un"],
      6: ["0", 0, "zero", "zéro"] 
  };
  let explanation = document.getElementById(`correctAnswer${questionNumber}`)
  const userAnswer = document.getElementById(`answer${questionNumber}`).value.trim().toLowerCase();
  let feedback = document.getElementById(`feedback${questionNumber}`);
  if (answers[questionNumber].includes(userAnswer)) {
      feedback.innerHTML = `Correct ! ` ;
      explanation.style.display='block';
      explanation.style.color='blue';
      feedback.style.color = 'green';
  } else {
      feedback.textContent = "Incorrect. Essayez encore.";
      feedback.style.color = 'red';
  }
}

// Afficher la réponse correcte
function revealAnswer_l(questionNumber) {
  const answers = {
      1: "12",
      2: "0",
      3: "0",
      4: "6",
      5: "1",
      6: "0" 
  };

  let explanation = document.getElementById(`correctAnswer${questionNumber}`);
  let feedback = document.getElementById(`feedback${questionNumber}`);
  feedback.innerHTML = `La réponse correcte est : ${answers[questionNumber]}. `;
  explanation.style.display='block';
  explanation.style.color='blue';
  feedback.style.color = 'blue';
}





// Fonction pour vérifier les réponses des asymptotes
function checkAnswerAsymptotes(questionNumber) {
  let correctAnswers = {
      1: 'b', 2: 'b', 3: 'c', 4: 'a', 5: 'b',
      6: 'a', 7: 'a', 8: ['a', 'b'], 9: 'a', 10: 'a'
  };  
  let selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  let resultDiv = document.getElementById(`result_asymptote${questionNumber}`);
  if (!selectedAnswer) {
      resultDiv.textContent = "Veuillez sélectionner une réponse.";
      resultDiv.style.color = "black";
  } else if (
      (Array.isArray(correctAnswers[questionNumber]) && 
       correctAnswers[questionNumber].includes(selectedAnswer.value)) ||
      selectedAnswer.value === correctAnswers[questionNumber]
  ) {
      resultDiv.textContent = "Correct !";
      resultDiv.style.color = "green";
  } else {
      resultDiv.textContent = "Incorrect. Essayez encore.";
      resultDiv.style.color = "red";
  }
}

// Fonction pour vérifier les réponses de continuité
function checkAnswercontinue(questionNumber) {
  let correctAnswers = {
      1: "a", 2: "b", 3: "c", 4: "b", 5: "b",
      6: "c", 7: "a", 8: "c", 9: "a", 10: "b"
  };
  let selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  let resultDiv = document.getElementById(`result_continue${questionNumber}`);
  if (!selectedAnswer) {
      resultDiv.textContent = "Veuillez sélectionner une réponse.";
      resultDiv.style.color = "black";
  } else if (selectedAnswer.value === correctAnswers[questionNumber]) {
      resultDiv.textContent = "Correct !";
      resultDiv.style.color = "green";
  } else {
      resultDiv.textContent = "Incorrect. Essayez encore.";
      resultDiv.style.color = "red";
  }
}



// Fonction pour vérifier les réponses qcm de dérivées
function checkAnswerderivee(questionNumber) {
  let correctAnswers = {
      1: "a", 2: "b", 3: "c", 4: "a", 5: "b",
      6: "b", 7: "a", 8: ["d","b"], 9: ["a","b"], 10: "a",
      11: "a", 12: "b", 13: "a", 14: "c"
  };
  let selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  let resultDiv = document.getElementById(`result_derivee${questionNumber}`);
  if (!selectedAnswer) {
      resultDiv.textContent = "Veuillez sélectionner une réponse.";
      resultDiv.style.color = "black";
  } else if (
      (Array.isArray(correctAnswers[questionNumber]) && 
       correctAnswers[questionNumber].includes(selectedAnswer.value)) ||
      selectedAnswer.value === correctAnswers[questionNumber]
  ) {
      resultDiv.textContent = "Correct !";
      resultDiv.style.color = "green";
  } else {
      resultDiv.textContent = "Incorrect. Essayez encore.";
      resultDiv.style.color = "red";
  }
}


// Fonction pour vérifier les réponses d'etude de fonctions dans exo-fonction.html

function toggleAnswer(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
  } else {
      answer.style.display = "none";
  }
}




// Fonction pour l'exo á trou asympototes 

function checkAnswer_asymptote(questionNumber) {
  const answers = {
      1: ["3"],
      2: ["2", "-1"],
      3: ["3"],
      4: ["0"],
      5: ["0"]
  };
  let userAnswer, feedback;
  if (questionNumber === 2) {
      userAnswer = [
          document.getElementById(`answer${questionNumber}a`).value.trim(),
          document.getElementById(`answer${questionNumber}b`).value.trim()
      ];
      feedback = document.getElementById(`feedback${questionNumber}`);
      if (userAnswer[0] === answers[questionNumber][0] && userAnswer[1] === answers[questionNumber][1]) {
          feedback.textContent = "Correct !";
          feedback.style.color = "green";
      } else {
          feedback.textContent = "Incorrect. Essayez encore.";
          feedback.style.color = "red";
      }
  } else {
      userAnswer = document.getElementById(`answer${questionNumber}`).value.trim();
      feedback = document.getElementById(`feedback${questionNumber}`);
      if (answers[questionNumber].includes(userAnswer)) {
          feedback.textContent = "Correct !";
          feedback.style.color = "green";
      } else {
          feedback.textContent = "Incorrect. Essayez encore.";
          feedback.style.color = "red";
      }
  }
}

function revealAnswer_a(questionNumber) {
  const answers = {
      1: "3",
      2: "a = 2, b = -1",
      3: "3",
      4: "0",
      5: "0"
  };
  let explanation = document.getElementById(`correctAnswer${questionNumber}`);
  explanation.style.display = 'block';
  explanation.style.color = 'blue';
}

// Fonction pour vérifier les réponses de continuité
function checkAnswer_continuity(questionNumber) {
  const answers = {
      1: ["non", "no"],
      2: ["0"],
      3: ["oui", "yes"],
      4: ["oui", "yes"],
      5: ["oui", "yes"]
  };
  let userAnswer = document.getElementById(`answer${questionNumber}`).value.trim().toLowerCase();
  let feedback = document.getElementById(`feedback${questionNumber}`);
  if (answers[questionNumber].includes(userAnswer)) {
      feedback.textContent = "Correct !";
      feedback.style.color = "green";
  } else {
      feedback.textContent = "Incorrect. Essayez encore.";
      feedback.style.color = "red";
  }
}

function revealAnswer_c(questionNumber) {
  let explanation = document.getElementById(`correctAnswer${questionNumber}`);
  explanation.style.display = 'block';
  explanation.style.color = 'blue';
}

// Fonction pour vérifier les réponses de dérivées
function checkAnswer_derivative(questionNumber) {
  const answers = {
      1: ["vitesse", "la vitesse"],
      2: ["accélération", "acceleration", "l'accélération", "l'acceleration"],
      3: ["6x-2", "6x - 2", "-2+6x", "-2 + 6x"],
      4: ["e^x", "exp(x)"],
      5: ["1/x", "1/(x)", "x^(-1)", "x^-1"],
      6: ["2xcos(x^2)", "2x*cos(x^2)", "2xcos(x**2)", "2x*cos(x**2)"],
      7: ["cos(x)-xsin(x)", "cos(x) - xsin(x)", "cos(x)-x*sin(x)", "cos(x) - x*sin(x)"]
  };
  
  let userAnswer = document.getElementById(`answer${questionNumber}`).value.trim().toLowerCase();
  let feedback = document.getElementById(`feedback${questionNumber}`);
  let correctAnswer = document.getElementById(`correctAnswer${questionNumber}`);
  
  if (answers[questionNumber].includes(userAnswer)) {
      feedback.textContent = "Correct !";
      feedback.style.color = "green";
      correctAnswer.style.display = 'block';
  } else {
      feedback.textContent = "Incorrect. Essayez encore.";
      feedback.style.color = "red";
      correctAnswer.style.display = 'none';
  }
}

function revealAnswer_d(questionNumber) {
  let explanation = document.getElementById(`correctAnswer${questionNumber}`);
  explanation.style.display = 'block';
  explanation.style.color = 'blue';
}
 

// Calculatrice de dérivées
function calculateDerivative() {
  let input = document.getElementById('function-input').value;
  const feedback = document.getElementById('feedback-calculator');
  const result = document.getElementById('result');
  const derivativeResult = document.getElementById('derivative-result');

// réglages en cas de mulplications de paranthèses ou d'oubli de * 
input = input.replace(/(\d+|[)])(\()/g, '$1*$2'); // Ajoute * entre un nombre/parenthèse fermante et une parenthèse ouvrante
input = input.replace(/\)(\w|\d)/g, ')*$1');      // Ajoute * entre une parenthèse fermante et une lettre/nombre
input = input.replace(/(\w|\d)\(/g, '$1*(');      // Ajoute * entre une lettre/nombre et une parenthèse ouvrante
// --> pour comprendre les règles de regex(expressions régulières), voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions
  try {
      const derivative = Algebrite.derivative(input, 'x').toString();
      feedback.textContent = "Calcul réussi !";
      feedback.style.color = "green";
      derivativeResult.innerHTML = '$ \\frac{d}{dx}(' + input + ') = ' + derivative + '$';
      result.style.display = 'block';

      MathJax.typesetPromise([result]).then(() => {
          console.log('Derivative rendered successfully');
      }).catch((err) => console.log('Error rendering derivative:', err));
  } catch (error) {
      feedback.textContent = "Erreur dans le calcul. Vérifiez votre entrée.";
      feedback.style.color = "red";
      result.style.display = 'none';
  }
}

