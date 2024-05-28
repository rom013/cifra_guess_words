import { classifyLetterProps } from "../interfaces/classifyLetterProps.interface";

export function classifyLetter({
  hiddenWord,
  onlyWord,
  i,
}: classifyLetterProps): string {
  const positionIndex = hiddenWord.findIndex((element, index) => {
    return element === onlyWord.letter && index === i;
  });

  if (positionIndex != -1) {
    return "right";
  } else {
    const positionLetterIndex = hiddenWord.findIndex((element, index) => {
      return element === onlyWord.letter && index != i;
    });

    if (positionLetterIndex != -1) {
      return "almost";
    } else return "invalid";
  }
}
