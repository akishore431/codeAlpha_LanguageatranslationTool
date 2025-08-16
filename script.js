function translateText() {
  const inputText = document.getElementById("inputText").value;
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;

  if (!inputText.trim()) {
    alert("Please enter text to translate.");
    return;
  }

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(inputText)}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data[0][0][0];
      document.getElementById("outputText").innerText = translatedText;
    })
    .catch((error) => {
      console.error("Translation error:", error);
      alert("Translation failed. Please try again.");
    });
}
