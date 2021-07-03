const quotes = [
    {
        quote: "역행자, 본성과 유전자의 명령을 이해하고, 이를 역행하는 행동을 한다.",
        author:"자청",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author:"Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author:"John Lennon",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author:"Oscar Wilde",
    },
    {
        quote: "So many books, so little time.",
        author:"Frank Zappa",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author:"Mae West",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author:"John Lennon",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameront",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author:"Eleanor Roosevelt",
    },
];
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=`-${todaysQuote.author}`;