window.addEventListener("load", function()
{
  console.log("Button found! And I can click it!")
  console.log("Reading!");
});

function speakText(sEvent) {
  // Create a SpeechSynthesisUtterance
  const voices = speechSynthesis.getVoices();
  let speechText = sEvent.currentTarget.closest('.bot-message').innerText;
  const utterance = new SpeechSynthesisUtterance(speechText);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (const voice of voices)
  {
    if (voice.name === selectedOption)
    {
      utterance.voice = voice;
    }
  }

  // Speak the text
  speechSynthesis.speak(utterance);
}

function populateVoices()
{
  if (typeof speechSynthesis === "undefined")
  {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (const voice of voices)
  {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default)
    {
      option.textContent += " - DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute('data-name', voice.name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}
  if (typeof speechSynthesis !== "undefined" && speechSynthesis.onvoiceschanged !== "undefined")
  {
    speechSynthesis.onvoiceschanged = populateVoices;
  }