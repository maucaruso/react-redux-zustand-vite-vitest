import { useCurrentLesson, useStore } from "../store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();
  const isLoading = useStore(state => state.isLoading);

  return (
    <div className="flex flex-col gap-1">
      {isLoading ? (
        <h1 className="text-2xl font-bold">Carregando...</h1>
      ) : (
        <>
          <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
          <span className="text-sm text-zinc-400">
            Módulo "{currentModule?.title}"
          </span>
        </>
      )}
    </div>
  );
}
