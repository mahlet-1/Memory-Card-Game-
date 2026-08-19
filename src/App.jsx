import { useState, useEffect } from 'react';
import Header from './Components/Header';
import DifficultySelector from './Components/DifficultySelector';
import GameBoard from './Components/GameBoard';
import WinModal from './Components/WinModal';
import GameOverModal from './Components/GameOverModal';

export default function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [cards, setCards] = useState([]);
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [error, setError] = useState(null);

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    if (!difficulty) return;

    async function fetchPokemon() {
      try {
        setError(null);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${difficulty}`);
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const pokemonData = await res.json();
            
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.front_default,
            };
          })
        );

        setCards(pokemonDetails);
      } catch (err) {
        setError("Failed to load Pokémon. Please check your internet connection.");
        console.error("Technical error:", err);
      }
    }

    fetchPokemon();
  }, [difficulty]);

  function handleCardClick(pokemonId) {
    if (clickedCardIds.includes(pokemonId)) {
      setIsGameOver(true);
      return;
    }

    const newScore = score + 1;
    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    const updatedClickedIds = [...clickedCardIds, pokemonId];
    setClickedCardIds(updatedClickedIds);

    if (newScore === cards.length) {
      setIsWon(true);
      return;
    }

    setCards(shuffleArray(cards));
  }

  const handleReset = () => {
    setScore(0);
    setClickedCardIds([]);
    setIsWon(false);
    setIsGameOver(false);
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />

      {error && (
        <div className="error-container">
          {error}
        </div>
      )}

      {!difficulty ? (
        <DifficultySelector setDifficulty={setDifficulty} />
      ) : (
        <GameBoard 
          cards={cards} 
          onCardClick={handleCardClick} 
        />
      )}

      {isWon && (
        <WinModal 
          score={score} 
          bestScore={bestScore}
          setDifficulty={setDifficulty} 
          setIsWon={setIsWon} 
          setClickedCardIds={setClickedCardIds} 
          setScore={setScore}
          onPlayAgain={handleReset}
        />
      )}

      {isGameOver && (
        <GameOverModal 
          score={score} 
          bestScore={bestScore}
          setDifficulty={setDifficulty} 
          setIsGameOver={setIsGameOver} 
          setClickedCardIds={setClickedCardIds} 
          setScore={setScore}
          onPlayAgain={handleReset}
        />
      )}
    </div>
  );
}
