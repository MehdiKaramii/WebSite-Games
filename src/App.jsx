import SideBar from "./components/SideBar";
import { useState } from "react";
import SelectGame from "./components/SelectGame";
import TicTacToe from "./components/TicTacToe";
import ReactionTime from "./components/ReactionTime";
import MemoryGame from "./components/MemoryGame";

function App() {
  const [gamesId, setGamesId] = useState({
    gameId: 1,
  });

  function onSelectTicTacToe() {
    setGamesId((prevState) => {
      return { ...prevState, gameId: 2 };
    });
  }

  function onSelectReactionTime() {
    setGamesId((prevState) => {
      return { ...prevState, gameId: 3 };
    });
  }

  function onSelectMemoryGame() {
    setGamesId((prevState) => {
      return { ...prevState, gameId: 4 };
    });
  }

  return (
    <>
      <div className="flex items-center bg-gradient-to-r from-[#090c43] to-black">
        <SideBar
          ticTacToeId={onSelectTicTacToe}
          reactionTime={onSelectReactionTime}
          memoryGame={onSelectMemoryGame}
        />
        {gamesId.gameId === 1 ? <SelectGame /> : undefined}
        {gamesId.gameId === 2 ? <TicTacToe /> : undefined}
        {gamesId.gameId === 3 ? <ReactionTime /> : undefined}
        {gamesId.gameId === 4 ? <MemoryGame /> : undefined}
      </div>
    </>
  );
}

export default App;
