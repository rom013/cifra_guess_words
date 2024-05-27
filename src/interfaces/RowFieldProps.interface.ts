interface Attempt {
  position: number;
  latter: string;
}

export type RowFieldProps = {
  attemptList: Attempt[];
  setAttempt: (attemptList: Attempt[]) => void;
  status: boolean;
  result: Array<string>;
};
