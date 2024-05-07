import { ChangeEvent, useState } from "react"

type FieldProps = {
    data: {
        status: boolean
        attemptList: string[]
        setAttempt: any
    }
    idField: number
}

export function FieldText({ data, idField }: FieldProps) {
    const [word, setWord] = useState("")
    const [isDeleted, setIsDeleted] = useState(false)

    function handleDeletedWork(e: ChangeEvent<HTMLInputElement>) {
        setWord(e.target.value)

        data.attemptList[idField] = e.target.value

        setIsDeleted(false)
        data.setAttempt(data.attemptList)
    }


    return data.status ? (<input
        type="text"
        className="size-16 rounded-3xl text-4xl text-center font-extrabold font-sora bg-white"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.trim() === '') {
                setWord(e.target.value)
                return setIsDeleted(true)
            }

            if (isDeleted) {
                return handleDeletedWork(e)
            }

            if (word.length < 1) {
                setWord(e.target.value)
                data.setAttempt([...data.attemptList, e.target.value])
            }
        }}
        value={word}
    />)
        : (
            <div
                className="size-16 rounded-3xl text-4xl flex items-center justify-center font-extrabold font-sora bg-white"
            >
                <span>{word}</span>
            </div>
        )
}