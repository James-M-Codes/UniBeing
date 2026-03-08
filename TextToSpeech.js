window.addEventListener("load", function()
{
  let botButtonClick = this.document.querySelector('botButton');
  botButtonClick.addEventListener('click', speakText);
});

function speakText() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("Hello there!");

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}