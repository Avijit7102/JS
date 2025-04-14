const responses = [
  "Yes, definitely.",
  "No, not a good idea.",
  "Maybe... ask again later.",
  "Absolutely!",
  "I'm 95% sure that's right.",
  "Negative.",
  "The odds are in your favor.",
  "Let me think... yes.",
  "I wouldn't do that if I were you.",
  "🤔 Interesting... try it!",
];

function getAIResponse() {
  const randomIndex = Math.floor(Math.random() * responses.length);
  const response = responses[randomIndex];

  document.getElementById("response").textContent = response;
}
