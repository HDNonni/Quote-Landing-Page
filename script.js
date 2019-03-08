let quotes = ["If a man does his best, what else is there?", "Smile, it's free therapy free", "The art of simplicity is a puzzle of complexity",
    "Drive slow and enjoy the scenery - drive fast and join the scenery", "Life is good when we think it's good. Life is bad when we don't think.",
    "Growing old is not growing up.", "Together we can change the world, just one random act of kindness at a time.", "Nothing worth having comes easy."]
let authors = ["Gen. George S. Patton", "Douglas Horton0", "Douglas Horton1", "Douglas Horton2", "Douglas Horton3", "Douglas Horton4", "Ron Hall", "Theodore Roosevelt"]
let colors = ["pink", "green", "purple", "blue", "tan", "yellow", "orange"];

function getRandomNumber(low, high) {
    let randomNumberBetweenLowAndHigh = Math.floor(Math.random() * (high - low) + low);
    console.log(randomNumberBetweenLowAndHigh)
    return randomNumberBetweenLowAndHigh
}

function getQuoteAtIndex(index) {
    let singleQuote = quotes[index]
    console.log(singleQuote);
    return singleQuote;
}

function displayQuote(oneQuote) {
    let quotesDisplayed = document.getElementById("quote")
    quotesDisplayed.innerHTML = oneQuote;

}
function displayAuthor(index) {
    let authorsQuote = document.getElementById("author");
    authorsQuote.innerHTML = authors[index];
}
function changeBackgroundColor(backgroundColor){
    document.body.style.backgroundColor = backgroundColor;
}

function displayRandomQuote() {

    //On first load, my quote machine displays a random quote in the element with id="text".

    let index = getRandomNumber(0, quotes.length);
    console.log(index);

    let backgroundColorIndex = getRandomNumber(0, colors.length);
    let color = colors[backgroundColorIndex]
    changeBackgroundColor(color);

    // let fontColorIndex = getRandomNumber(0, fonts.length);
    // let font = fonts[fontColorIndex];
    // changeFont(font);

    // let fontSizeIndex = getRandomNumber(12, 30);
    // let size = fontSizeIndex + "px";
    // changeFontSize(size);

    // let textDecoIndex = getRandomNumber(0, textDeco.length);
    // let deco = textDeco[textDecoIndex];
    // changeTextDeco(deco);

    let oneQuote = getQuoteAtIndex(index);

    displayQuote(oneQuote);

    displayAuthor(index);
}


displayRandomQuote();

let newQuoteButton = document.getElementById("new_quote");
newQuoteButton.onclick = function (event) {
    console.log("button click")
    displayRandomQuote();
};
