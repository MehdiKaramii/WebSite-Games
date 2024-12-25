export default function SideBar({ ticTacToeId, reactionTime, memoryGame }) {
  return (
    <aside className="relative w-1/3 px-6 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-stone-50 md:w-80 rounded-r-3xl mt-14 h-screen shadow-2xl border border-gray-700">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-400 opacity-20 blur-3xl animate-pulse"></div>

      {/* Sidebar Header */}
      <h2 className="mb-10 text-2xl font-extrabold uppercase text-white tracking-wide border-b border-gray-600 pb-4">
        Games You Can Play
      </h2>

      {/* Interactive Selection */}
      <div className="mb-8">
        <button className="px-4 py-3 w-full text-lg font-semibold text-white rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 shadow-md">
          Choose One
        </button>
      </div>

      {/* Game List */}
      <ul className="space-y-4">
        <li
          onClick={ticTacToeId}
          className="flex items-center justify-between px-4 py-3 text-sm md:text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-cyan-500 hover:to-teal-400 text-black rounded-lg shadow-md border border-gray-700 cursor-pointer transition-transform transform hover:scale-105"
        >
          Tic Tac Toe
          <span className="ml-2 text-sm text-gray-700">🎲</span>
        </li>
        <li
          onClick={reactionTime}
          className="flex items-center justify-between px-4 py-3 text-sm md:text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 hover:from-red-500 hover:to-orange-400 text-black rounded-lg shadow-md border border-gray-700 cursor-pointer transition-transform transform hover:scale-105"
        >
          Reaction Time
          <span className="ml-2 text-sm text-gray-700">⏱️</span>
        </li>
        <li
          onClick={memoryGame}
          className="flex items-center justify-between px-4 py-3 text-sm md:text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500 hover:to-purple-400 text-black rounded-lg shadow-md border border-gray-700 cursor-pointer transition-transform transform hover:scale-105"
        >
          Memory Game
          <span className="ml-2 text-sm text-gray-700">🧠</span>
        </li>
      </ul>

      {/* Decorative Footer Element */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
        <p>Challenge your skills, one game at a time!</p>
      </div>
    </aside>
  );
}
