import Player from "react-player";
import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "../store";

export function Video() {
  const { currentLesson } = useCurrentLesson();
  const { isLoading, next } = useStore(state => ({
    isLoading: state.isLoading,
    next: state.next,
  }));

  function handlePlayNext() {
    next();
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <Player
          width="100%"
          height="100%"
          controls
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          onEnded={handlePlayNext}
        />
      )}
    </div>
  );
}
