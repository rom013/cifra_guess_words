import { useEffect, useState } from "react";
import { RowField } from "./components/rowField";

const wordOptions = [
  ["l", "a", "g", "o", "a"],
  ["p", "e", "i", "x", "e"],
  ["a", "m", "i", "g", "o"],
  ["s", "o", "r", "r", "i"],
  ["t", "e", "r", "r", "a"],
  ["n", "u", "v", "e", "m"],
  ["c", "a", "m", "p", "o"],
  ["m", "a", "r", "e", "s"],
  ["l", "u", "z", "e", "s"],
  ["c", "e", "r", "c", "a"],
  ["r", "u", "a", "s", "s"],
  ["b", "r", "a", "s", "a"],
  ["p", "e", "n", "a", "s"],
  ["f", "o", "r", "m", "a"],
  ["v", "a", "l", "e", "s"],
  ["f", "r", "u", "t", "o"],
  ["c", "o", "r", "p", "o"],
  ["s", "o", "p", "r", "o"],
  ["v", "i", "d", "r", "o"],
  ["r", "a", "d", "i", "o"],
  ["c", "a", "n", "t", "o"],
  ["m", "e", "s", "a", "s"],
  ["p", "a", "r", "e", "d"],
  ["p", "r", "e", "t", "o"],
  ["b", "i", "c", "h", "o"],
  ["c", "a", "r", "n", "e"],
  ["l", "i", "v", "r", "o"],
  ["c", "h", "u", "v", "a"],
  ["b", "a", "i", "x", "o"],
  ["m", "a", "n", "h", "ã"],
  ["c", "a", "i", "x", "a"],
  ["f", "a", "m", "í", "l"],
  ["t", "e", "s", "t", "e"],
  ["f", "e", "l", "i", "z"],
  ["f", "o", "m", "e", "s"],
  ["p", "a", "s", "t", "o"],
  ["p", "i", "a", "n", "o"],
  ["b", "a", "r", "c", "o"],
  ["t", "i", "m", "e", "s"]
]

let count = 0

export function App() {
  const [attempt, setAttempt] = useState<{ latter: string, position: number }[]>([])
  const [result, setResult] = useState<Array<Array<string>>>([[], [], [], [], []])
  const [isActive, setIsActive] = useState<boolean>(true)
  const [fields, setField] = useState<boolean[]>([true, false, false, false, false])

  const [hiddenWord, setHiddenWord] = useState<string[]>([])

  useEffect(() => {
    const numberRundom = Math.round(Math.random() * wordOptions.length)
    const wordRandom = wordOptions[numberRundom]

    setHiddenWord(wordRandom)
  }, [])

  useEffect(() => {
    attempt.length == 5 ? setIsActive(true) : setIsActive(false)
  }, [attempt])

  async function handleEvaluateWord() {


    const resultList: Array<string> = []

    attempt.sort((a, b) => {
      return a.position - b.position
    }).forEach((w, i) => {
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

  return (
    <main className='min-h-screen max-w-4xl w-full mx-auto py-10'>
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-4xl font-bold font-sora">CIFRA</h1>

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