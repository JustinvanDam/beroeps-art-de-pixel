const webcam = document.getElementById('webcam');

navigator.mediaDevices.getUserMedia({video: true})
   .then(stream =>{
    webcam.srcObject = stream;
   })
   .catch(error => {
    console.error("error accessing webcam", error);
   });