import ReactionCards from "./ReactionCards";
import TimerResultModal from "./TimerResultModule";
import TopReaction from "./TopReaction";

export default function ReactionTime() {
  return (
    <>
      <div className="mx-auto text-gray-400 text-lg text-center">
        <TopReaction />
        <div className="flex gap-5">
          <ReactionCards mode={"Easy"} targetTime={1} />
          <ReactionCards mode={"Normal"} targetTime={5} />
          <ReactionCards mode={"Hard"} targetTime={15} />
        </div>
      </div>
    </>
  );
}
