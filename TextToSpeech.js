window.addEventListener("load", function()
{
  console.log("Button found! And I can click it!")
  console.log("Reading!");
});

function speakText(sEvent) {
  // Create a SpeechSynthesisUtterance
  let speechText = sEvent.currentTarget.closest('.bot-message').innerText;
  const utterance = new SpeechSynthesisUtterance(speechText);

  // Speak the text
  speechSynthesis.speak(utterance);
}