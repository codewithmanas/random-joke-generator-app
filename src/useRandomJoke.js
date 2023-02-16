import { useEffect, useState } from 'react';

function useRandomJoke(categoryType) {
    const [joke, setJoke] = useState("");
    useEffect(() => {
        const fetchJoke = async () => 
          await fetch(
            `https://api.chucknorris.io/jokes/random?category=${categoryType}`
          )
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            // console.log(data.value);
            setJoke(data.value);
          });
    
        fetchJoke()
      }, [categoryType]);

      return joke;
  
}

export default useRandomJoke;