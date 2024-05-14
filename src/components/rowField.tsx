import { memo } from "react";
import { FieldText } from "./fieldText";

type RowFieldProps = {
    attemptList: string[]
    setAttempt: any
    status: boolean
    result: Array<string>
}

function RowField({ attemptList, setAttempt, status, result }: RowFieldProps) {

    const data = {
        attemptList,
        setAttempt,
        status,
        result
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

const memoRowField = memo(RowField)
export { memoRowField as RowField }