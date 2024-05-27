interface Attempt {
  latter: string;
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
