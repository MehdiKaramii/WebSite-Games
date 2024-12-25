import { useEffect, useState } from "react";
import blocksImg from "../assets/pics/blocks.png";
import checkerImg from "../assets/pics/checker.png";
import gameImg from "../assets/pics/game.png";
import game2Img from "../assets/pics/game2.png";
import ludoImg from "../assets/pics/ludo.png";
import ludo2Img from "../assets/pics/ludo2.png";
import backCover from "../assets/pics/backcover.png";
import EachCard from "./EachCard";

const cardImages = [
  { src: blocksImg, matched: false },
  { src: checkerImg, matched: false },
  { src: gameImg, matched: false },
  { src: game2Img, matched: false },
  { src: ludoImg, matched: false },
  { src: ludo2Img, matched: false },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="memory">
      <h1>Memory Game</h1>
      <button className="membut" onClick={shuffleCards}>
        New Game
      </button>
      <div className="cardgrid">
        {cards.map((card) => (
          <EachCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className="text-white">Turns: {turns}</p>
    </div>
  );
}
