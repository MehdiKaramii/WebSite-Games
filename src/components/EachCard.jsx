import backCover from "../assets/pics/backcover.png";

export default function EachCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="frontcard" src={card.src} alt="card front" />
        <img
          className={`backcard ${flipped ? "hidden" : ""}`}
          src={backCover}
          onClick={handleClick}
          alt="card cover"
        />
      </div>
    </div>
  );
}
