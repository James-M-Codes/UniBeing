window.addEventListener("load", function()
{
  console.log("Button found! And I can click it!")
});

function speakText() {
  // Create a SpeechSynthesisUtterance
  let speechText = document.querySelector('.bot-message:last-child');
  const utterance = new SpeechSynthesisUtterance(speechText);

  // Speak the text
  speechSynthesis.speak(utterance);
}