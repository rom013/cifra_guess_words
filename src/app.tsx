import { useEffect, useState } from "react";
import { RowField } from "./components/rowField";

const hiddenWord = ["l", "a", "g", "o", "a"]
let count = 0

export function App() {
  const [attempt, setAttempt] = useState<{ latter: string, position: number }[]>([])
  const [result, setResult] = useState<Array<Array<string>>>([[], [], [], [], []])
  const [isActive, setIsActive] = useState<boolean>(true)
  const [fields, setField] = useState<boolean[]>([true, false, false, false, false])


  async function handleEvaluateWord() {
    const resultList: Array<string> = []

    attempt.sort((a, b) => {
      return a.position - b.position
    }).forEach((w, i) => {
      console.log(3333);

      const positionIndex = hiddenWord.findIndex((element, index) => {
        return element === w.latter && index === i
      })

      if (positionIndex != -1) {
        resultList.push("right")
      }
      else {
        const positionLatterIndex = hiddenWord.findIndex((element, index) => {
          return element === w.latter && index != i
        })

        if (positionLatterIndex != -1) {
          resultList.push("almost")
        }
        else resultList.push("invalid")
      }
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
      setAttempt([])
      fields[fields.indexOf(true)] = false
      setField(fields)
      return console.log("Fim de jogo");
    }

    const updatedFields = [...fields];
    updatedFields[fields.indexOf(true) + 1] = true;
    updatedFields[fields.indexOf(true)] = false;

    setField(updatedFields);
    setAttempt([])
  }


  useEffect(() => {
    attempt.length == 5 ? setIsActive(true) : setIsActive(false)
  }, [attempt])

  return (
    <main className='min-h-screen max-w-4xl w-full mx-auto py-10'>
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-4xl font-bold font-sora">MapQuest</h1>

        <section className="w-full flex flex-col items-center justify-center gap-4">
          {
            fields.map((field, key) => {
              // console.log("okkkk");

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