import { memo } from "react";
import { FieldText } from "./fieldText";
import { RowFieldProps } from "../interfaces/RowFieldProps.interface";

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