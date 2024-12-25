import GameState from "./GameState";

export default function Reset ({gameState ,onReset}) {
    if (gameState === GameState.inProgress) {
        return ;
    }
    return (
        <button onClick={onReset} className="mt-[50px] p-[20px] bg-blue-600 text-white w-[100%] text-lg">Reset</button>
    );
}