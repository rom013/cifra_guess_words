import { useEffect, useState } from "react";
import { RowField } from "./components/rowField";

const hiddenWord = ["l", "a", "g", "o", "a"]

export function App() {
  const [attempt, setAttempt] = useState<string[]>([])
  const [isActive, setIsActive] = useState<boolean>(false)
  const [fields, setField] = useState<boolean[]>([true, false, false, false, false])

  function handleEvaluateWord() {
    hiddenWord.forEach((w, i) => {
      attempt.some((wa, ia) => {
        if (w === wa) {
          if (i == ia) {
            console.log(w, wa, i, ia, "posição certa")
            return true
          }
          else {
            console.log(w, wa, i, ia, "posição errada")
            return true
          }
        }
        else {
          console.log(w, wa, i, ia, "Invalido")
          return false
        }
      })
    })

    changeLine()
  }

  function changeLine() {
    if (fields.indexOf(true) === 4) {
      return console.log("Fim de jogo");
    }

    console.log(attempt);

    fields[fields.indexOf(true) + 1] = true
    fields[fields.indexOf(true)] = false

    setAttempt([])
    setField(fields)
  }


  useEffect(() => {
    console.log(attempt);

    attempt.length == 5 ? setIsActive(true) : setIsActive(false)
  }, [attempt])

  return (
    <main className='min-h-screen max-w-4xl w-full mx-auto py-10'>
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-4xl font-bold font-sora">MapQuest</h1>

        <section className="w-full flex flex-col items-center justify-center gap-4">
          {
            fields.map((field, key) => {
              return (
                <RowField
                  key={key}
                  attemptList={attempt}
                  setAttempt={setAttempt}
                  status={field}
                />
              )
            })
          }
        </section>

        <button
          onClick={handleEvaluateWord}
          className="bg-white rounded-xl py-5 px-14 font-bold font-sora text-lg disabled:bg-opacity-20"
          disabled={!isActive}
        >
          ENTER
        </button>
      </div>
    </main>
  )
}