function speakText() {
  // Create a SpeechSynthesisUtterance
  const speechText = document.querySelector('#chat-message bot-message');
  const utterance = new SpeechSynthesisUtterance(speechText.value);

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}