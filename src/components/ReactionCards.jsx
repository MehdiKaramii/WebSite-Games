import { useRef, useState } from "react";
import TimerResultModal from "./TimerResultModule";

export default function ReactionCards({ mode, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <TimerResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <div className="w-96 max-w-sm mx-auto flex flex-col justify-center items-center p-8 bg-gradient-to-r from-[#4df8df] to-[#4df0f8] text-[#221c18] rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-center text-[#221c18] uppercase tracking-wider mb-6 drop-shadow-lg">
          {mode}
        </h2>
        <p className="text-xl font-light text-[#221c18] mb-6">
          {targetTime} Seconds
        </p>

        <button
          onClick={timerIsActive ? handleStop : handleStart}
          className="mt-4 px-6 py-3 bg-[#12352f] text-[#edfcfa] font-medium text-lg rounded-lg shadow-md hover:bg-[#0d2a21] transition-all duration-300"
        >
          Start The Challenge
        </button>

        <p
          className={`mt-4 px-4 py-2 rounded-lg text-center font-medium border ${
            timerIsActive
              ? "bg-transparent text-[#21d07b] border-[#21d07b]"
              : "bg-transparent text-[#000000] border-[#000000]"
          }`}
        >
          {timerIsActive ? "Timer Active" : "Timer Inactive"}
        </p>
      </div>
    </>
  );
}
