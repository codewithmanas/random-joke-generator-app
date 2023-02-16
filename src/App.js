import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
  const userInputRef = useRef(null);

  const [userInput, setUserInput] = useState("dev");

  const joke = useRandomJoke(userInput);

  const generateJoke = e => {
    e.preventDefault();
    if(userInputRef.current.value !== ""){
      setUserInput(userInputRef.current.value);
    }
  }
  
  return (
    <div className="app">
    <h1>Random Joke Generator</h1>
    <p>{joke}</p>

    <form>
      <input placeholder="Enter any category from the list below."
      // value={userInput} onChange={(e) => setUserInput(e.target.value)} 
      ref={userInputRef}
      />
    </form>
    <button onClick={generateJoke}>Generate Joke</button>
    <p><b>categories : </b> ["animal","career","celebrity","dev","explicit","fashion","food",<br />"history","money","movie","music","political","religion","science","sport","travel"]</p>
      
      <footer className="footer__section container">
        <small>2023 © copyright, build with ❤ by <a href="https://github.com/codewithmanas">codewithmanas</a></small>
      </footer>

    </div>
  );
}

export default App;
