var quotesOwner = [
  " - Oscar Wilde   ",
  "-  Marilyn Monroe    ",
  "- Albert Einstein   ",
  " - Frank Zappa   ",
  " - Ralph Waldo Emerson    ",
  "- Marilyn Monroe   ",
];
var quotes = [
  "   'Insanity is doing the same thing, over and over again, but expecting different results'",
  "  'It is better to be hated for what you are than to be loved for what you are not'",
  "   'We accept the love we think we deserve.'",
  "  'Without music, life would be a mistake.'",
  " 'Live as if you were to die tomorrow. Learn as if you were to live forever.'",
  "'Always forgive your enemies; nothing annoys them so much.'",
];

function display() {
  var temp = "";
  var num = Math.floor(Math.random() * quotesOwner.length);
  temp += `${quotesOwner[num]} ${quotes[num]}`;
  document.getElementById("quoteText").innerHTML = temp;
}
display();
