const quotes = [
  {
    quote: "Hope sees the invisible, feels the intangible, and achieves the impossible.",
    author: "Helen Keller"
  },
  {
    quote: "A wise man will make more opportunities than he finds.",
    author: "Sir Francis Bacon"
  },
  {
    quote: "A goal without a plan is just a wish",
    author: "Antoine de Saint-Exupery."
  },
  {
    quote: "Try not to become a man of success but rather to become a man of value.",
    author: "Albert Einstein"
  },
  {
    quote: "To truly laugh, you must be able to take your pain, and play with it!",
    author: "Charlie Chaplin"
  },
  {
    quote: "Everything in your world is created by what you think.",
    author: "Oprah Winfrey"
  },
  {
    quote: "All noble things are as difficult as they are rare.",
    author: "Baruch Spinoza"
  },
  {
    quote: "Love is an act of endless forgiveness, a tender look which becomes a habit.",
    author: "Havelock Ellis"
  },
  {
    quote: "There is always some madness in love. But there is also always some reason in madness",
    author: "Friedrich Nietzsche"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;