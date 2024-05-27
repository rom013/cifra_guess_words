import { ChangeEvent, memo, useState } from "react"
import { twMerge } from "tailwind-merge"

interface Attempt {
    latter: string;
    position: number;
}

type FieldProps = {
    data: {
        status: boolean
        attemptList: Attempt[]
        setAttempt: (attemptList: Attempt[]) => void
        result: string[]
    }
    idField: number
}

function FieldText({ data, idField }: FieldProps) {
    const [word, setWord] = useState("")
    const [isDeleted, setIsDeleted] = useState(false)

    function handleDeletedWork(e: ChangeEvent<HTMLInputElement>) {
        setWord(e.target.value.toLowerCase())

        data.attemptList[idField] = { latter: e.target.value.toLowerCase(), position: idField }

        setIsDeleted(false)
        data.setAttempt(data.attemptList)
    }

    return data.status ? (<input
        type="text"
        className="square-field"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.trim() === '') {
                setWord(e.target.value.toLowerCase())
                return setIsDeleted(true)
            }

            if (isDeleted) {
                return handleDeletedWork(e)
            }

            if (word.length < 1) {
                setWord(e.target.value.toLowerCase())
                const obj = { latter: e.target.value.toLowerCase(), position: idField }
                data.setAttempt([...data.attemptList, obj])
            }
        }}
        value={word}
    />)
        : (
            <div
                className={twMerge("box", data.result[idField])}
            >
                <span>{word}</span>
            </div>
        )
}

const memoFieldText = memo(FieldText)
export { memoFieldText as FieldText }