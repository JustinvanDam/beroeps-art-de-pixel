const webcam = document.getElementById('webcam');

navigator.mediaDevices.getUserMedia({video: true})
   .then(stream =>{
    webcam.srcObject = stream;
   })
   .catch(error => {
    console.error("error accessing webcam", error);
   });
function checkawnsers() {
 
      let correctAnswers = ['a', 'b', 'a', 'b'];
  

      let userAnswers = [];
      userAnswers.push(document.querySelector('input[name="q1"]:checked')?.value);
      userAnswers.push(document.querySelector('input[name="q2"]:checked')?.value);
      userAnswers.push(document.querySelector('input[name="q3"]:checked')?.value);
      userAnswers.push(document.querySelector('input[name="q4"]:checked')?.value);
  

      let score = 0;
      for (let i = 0; i < correctAnswers.length; i++) {
          if (userAnswers[i] === correctAnswers[i]) {
              score++;
          }
      }
  

      let resultText = `Je hebt ${score} van de ${correctAnswers.length} goed!`;
      let resultContainer = document.createElement('div');
      resultContainer.id = "result";
      resultContainer.innerText = resultText;
  

      let oldResult = document.getElementById('result');
      if (oldResult) {
          oldResult.remove();
      }
  
      document.getElementById('quiz_container').appendChild(resultContainer);
  }
