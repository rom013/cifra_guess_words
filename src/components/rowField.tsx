import { FieldText } from "./fieldText";

type RowFieldProps = {
    attemptList: string[]
    setAttempt: any
    status: boolean
}

export function RowField({ attemptList, setAttempt, status }: RowFieldProps) {

    const data = {
        status,
        attemptList,
        setAttempt
    }

    return (
        <div className="flex gap-5">
            <FieldText data={data} idField={0} />
            <FieldText data={data} idField={1} />
            <FieldText data={data} idField={2} />
            <FieldText data={data} idField={3} />
            <FieldText data={data} idField={4} />
        </div>
    )
}