/*
    EASY
    
    Good morning! Here's your coding interview problem for today.

    This problem was asked by Google.

    Given a string, return the first recurring character in it, or null if there is no recurring character.

    For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

*/

export const getFirstRecurringCharacter = (str: string) => {
  const seenChars = new Set();

  const splitedWord = str.split("");

  for (let i = 0; i < splitedWord.length; i++) {
    const char = splitedWord[i];

    if (seenChars.has(char)) {
      return char;
    }

    seenChars.add(char);
  }

  return null;
};

const result = getFirstRecurringCharacter("abca");
