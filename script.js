/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  // A FAIRE: Compléte le code pour de faire fonctionner le quizz, pour plus d'informations consulte le sujet

  // DECLARATION DE VARIABLES
  let position = 0; // indice de la question
  let scoring = 0; // score du joueur

  //APPEL DE LA FONCTION QUI CHARGE UNE QUESTION, SES REPONSES, ET PERMET DE VALIDER UNE REPONSE POUR PASSER A LA QUESTION SUIVANTE
  questionCycle();

  // DECLARATION DE LA FONCTION questionCycle
  function questionCycle() {
    // ----- SI TOUTES LES QUESTIONS N'ONT PAS ETE POSEES
    if (position < questions.length) {
      // AFFICHAGE DE LA QUESTION D'INDICE "position"
      document.querySelector("#question").innerText =
        questions[position].question;

      // AFFICHAGE DES REPONSES POSSIBLES POUR LA QUESTION D'INDICE "position"
      questions[position].answers.forEach((answer, answerIndex) => {
        document.querySelector("#answers").innerHTML +=
          `<li class="answer">` +
          questions[position].answers[answerIndex] +
          `</li>`;
      });

      // CREATION D'UN TABLEAU DES REPONSES EN COURS, AFIN DE POUVOIR DETECTER LA SELECTION FAITE PAR LE JOUEUR A L'AIDE D'ECOUTEURS D'EVENEMENTS
      let clickAnswer = document.querySelectorAll(".answer");
      clickAnswer.forEach(function (answer, answerIndex) {
        answer.addEventListener("click", function () {
          // APPEL DE LA FONCTION DE VALIDATION D'UNE REPONSE
          validAnswer(answerIndex);
        });
      });

      // ----- SI TOUTES LES QUESTIONS ONT ETE POSEES
    } else {
      // AFFICHAGE DU MESSAGE DE FIN DE PARTIE
      document.getElementById("question").innerText =
        "Vous avez terminé le Quiz, merci d'avoir joué !";
      document.getElementById("answers").innerText = "";
    }
  }

  // DECLARATION  DE LA FONCTION DE VALIDATION D'UNE REPONSE PAR LE JOUEUR : gestion du score et passage à la question suivante
  function validAnswer(answerIndex) {
    // TEST DE LA REPONSE EN VUE DE CREDITER LE SCORE
    if (answerIndex == questions[position].correctAnswerIndex) {
      scoring++;
      document.querySelector("#score").innerText = scoring;
    }
    // PASSAGE A LA QUESTION SUIVANTE
    position++;
    // SUPPRESION DES REPONSES DE LA QUESTION TERMINEE, EN VUE D'AFFICHER UNIQUEMENT LES REPONSES DE LA QUESTION SUIVANTE
    document.getElementById("answers").innerText = "";

    // APPEL DE LA FONCTION questionCycle POUR RELANCER LE CYCLE (vérifiera s'il reste des questions à poser ou non)
    questionCycle();
  }
});
