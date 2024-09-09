
import './App.css';
import React from 'react';




const quotes = [
  'To live is the rarest thing in the world. Most people exist, that is all.',
  'That it will never come again is what makes life so sweet.',
  'It is never too late to be what you might have been.',
  'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
  'Pain is inevitable. Suffering is optional.',
  "All the world's a stage, and all the men and women merely players.",
  'Be kind, for everyone you meet is fighting a hard battle.' ,
  'Unable are the loved to die for love is immortality.',
  'Let me live, love, and say it well in good sentences.',
  "Don't let your happiness depend on something you may lose."
]

const authors = [
  "Oscar Wilde",
  "Emily Dickinson",
  "George Eliot",
  "Ralph Waldo Emerson",
  "Haruki Murakami",
  "William Shakespeare",
  "Plato",
  "Emily Dickinson",
  "Sylvia Plath",
  "C.S. Lewis"
];

const allQuotes = quotes.reduce((arr, quote, index ) => {
  arr.push([authors[index], quotes[index]]);
  return arr;
},[]);

const quoteBank = quotes.reduce((arr, quote, index ) => {
  arr.push([authors[index], quotes[index]]);
  return arr;
},[]);
  





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Confucius",
      quote: "Man who stand on toilet high on pot.",
      bank: quoteBank

    }
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote () {
    console.log(this.state.bank.length);
    this.setState((state)=>{
      let length = state.bank.length;
      let newBank = [...state.bank];
      let index = Math.floor(Math.random() * (length));
      console.log(index);
      let target = state.bank[index]; 
      newBank.splice(index, 1);
      if (newBank.length === 0) {
        newBank = allQuotes;
      }
      


      return {
    
        author: target[0],
        quote: target[1],
        bank: newBank
      }

    })


  }


  render (){
    return (  





    <div className="App" id="quote-box">
      <p id="text" >{this.state.quote}</p>
      <p id="author" >{this.state.author}</p>
      <button type="button" id="new-quote" onClick = {this.getQuote}>I want a quote!</button>
      <a id="tweet-quote" href="twitter.com/intent/tweet"> Tweet This!</a>      


    </div>
    );
  }
}



export default App;