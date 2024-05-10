import { useEffect, useState } from "react";
import { RowField } from "./components/rowField";

const hiddenWord = ["l", "a", "g", "o", "a"]
let count = 0

export function App() {
  const [attempt, setAttempt] = useState<string[]>([])
  const [result, setResult] = useState<Array<Array<string>>>([[], [], [], [], []])
  const [isActive, setIsActive] = useState<boolean>(false)
  const [fields, setField] = useState<boolean[]>([true, false, false, false, false])


  async function handleEvaluateWord() {
    // setResult([result])

    const resultList: Array<string> = []

    attempt.forEach((w, i) => {
      hiddenWord.some((wa, ia) => {
        if (w === wa) {
          if (i == ia) {
            // setResult((prevState) => [...prevState, ])
            resultList.push("right")
            console.log(w, wa, i, ia, "posição certa")
            return true
          }
          else {
            // setResult((prevState) => [...prevState, "almost"])
            resultList.push("almost")
            console.log(w, wa, i, ia, "posição errada")
            return true
          }
        }
        else {
          if (ia == 4) {
            // setResult((prevState) => [...prevState, "invalid"])
            resultList.push("invalid")
            console.log(w, wa, i, ia, "Invalido")
          }
          return false
        }
      })
    })

    await setResult(prevState => {
      const novoResultado = [...prevState];
      novoResultado[count] = resultList
      return novoResultado
    })

    count++
    changeLine()
  }

  function changeLine() {
    if (fields.indexOf(true) === 4) {
      return console.log("Fim de jogo");
    }

    fields[fields.indexOf(true) + 1] = true
    fields[fields.indexOf(true)] = false

    setAttempt([])
    setField(fields)
  }


  useEffect(() => {
    // console.log(attempt);

    attempt.length == 5 ? setIsActive(true) : setIsActive(false)
  }, [attempt])

  useEffect(() => {
    console.log(result);
  }, [result])

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
                  result={result[key]}
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