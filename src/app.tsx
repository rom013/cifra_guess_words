import { useEffect, useState } from "react";
import { RowField } from "./components/rowField";

export function App() {
  const [attempt, setAttempt] = useState<string[]>([])

  function handleEvaluateWord() {
    console.log(attempt);
    setAttempt([])
  }

  useEffect(() => {
    console.log(attempt);
  }, [attempt])

  return (
    <main className='min-h-screen max-w-4xl w-full mx-auto py-10'>
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-4xl font-bold font-sora">LETRECO</h1>

        <section className="w-full flex flex-col items-center justify-center gap-4">
          <RowField
            attemptList={attempt}
            setAttempt={setAttempt}
            status
          />
        </section>

        <button onClick={handleEvaluateWord}>ENTER</button>
      </div>
    </main>
  )
}