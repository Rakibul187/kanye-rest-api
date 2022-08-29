const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
function displayQuote(quote) {
    const quoteContainer = document.getElementById('quote')
    quoteContainer.innerText = quote.quote
}