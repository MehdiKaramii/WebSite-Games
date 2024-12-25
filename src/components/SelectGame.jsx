export default function SelectGame() {
  return (
    <div className=" mx-auto relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center space-y-8 border border-white/20">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Select a Game and Have Fun
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto">
          Choose from exciting games to challenge your skills and make your day
          more fun!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            Tic Tac Toe
          </button>
          <button className="bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            Reaction Time
          </button>
          <button className="bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
            Memory Game
          </button>
        </div>
      </div>
    </div>
  );
}
