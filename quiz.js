
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  var myQuestions = [
    {
      question: "What does 'IPA' stand for?",
      answers: {
        a: 'Independent Popular Ale',
        b: 'India Pale Ale',
        c: 'I Prefer Apples',
        d: 'Illegal Pale Ale'
      };
      correctAnswer: 'b'
    },
    {
      question: "How many cases of beer fit into one keg?"
      answers: {
        a: '6.88',
        b: '7.59',
        c: '3.48',
        d: '10.6'
      };
      correctAnswer: 'a'
    },
    {
      question: "What is the oldest craft brewery in Texas?"
      answers: {
        a: 'Saint Arnold',
        b: 'Spoetzl',
        c: 'Real Ale',
        d: 'Live Oak'
      };
      correctAnswer: 'b'
    },
    {
      question: "Which ancient civilization first brewed beer?"
      answers: {
        a: 'Mesopotamia',
        b: 'Roman',
        c: 'Babylon',
        d: 'Persia'
      };
      correctAnswer: 'c'
    },
    {
      question:
      answers: {"Along with hops, yeast, and grains, what is the 4th ingredient needed to make beer?"
        a: 'Sugar',
        b: 'Malt',
        c: 'Caramel',
        d: 'Water'
      };
      correctAnswer: 'd'
    }
  ];

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    var showQuestions(questions, quizContainer){
      //Stores the output and answers
      var output = [];
      var answers;

      for(var 1 = 0; 1<questions.length; i++){
        //reset answers
        answers = [];
        //for each available answers
        for(letter in questions[i].answers){
          //add a radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ':'
              + questions[i].answers[letter]
            + '</label>'
          );
        }

        //add the question and answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div> class="answers">' + answers.join('') + '</div>'
        );
      }
      //Combine the output into one html string and put it on the page.
      quizContainer.innerHTML = output.join('');
    }

    functions showResults(questions, quizContainer, resultsContainer){
      //gather the answer containers
      var answerContainers = quizContainer.querySelectorAll('.answers');

      //This will keep track of the user's answerContainers
      var userAnswer = '';
      var numCorrect = 0;

      //for each question
      for( var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        //if the answer is correct
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          answerContainers[i].style.color = 'lightgreen';
        }
        else{
          //if the answer is wrong color it red
          answerContainers[i].style.color = 'red';
        }
      }
      resultsContainer.innerHTML = numCorrect + 'out of ' + questions.length;
    }

  //show the results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  }
