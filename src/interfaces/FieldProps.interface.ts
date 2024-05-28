interface Attempt {
  letter: string;
  position: number;
}

export type FieldProps = {
  data: {
    status: boolean;
    attemptList: Attempt[];
    setAttempt: (attemptList: Attempt[]) => void;
    result: string[];
  };
  idField: number;
};
