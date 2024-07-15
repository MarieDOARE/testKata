//let sentence = "This website is for losers LOL!";
let sentence =
  "No offense but,\nYour writing is among the worst I've ever read";

function newArray(toto) {
  return toto.split("");
}

function isNotVowel(character) {
  if (
    character == "a" ||
    character == "i" ||
    character == "o" ||
    character == "u" ||
    character == "e" ||
    character == "A" ||
    character == "I" ||
    character == "O" ||
    character == "U" ||
    character == "E"
  ) {
    return false;
  } else {
    return true;
  }
}

//function final
export function removeVowels(sentenceWithVowels) {
  let result = "";
  let array = newArray(sentenceWithVowels);
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (isNotVowel(element)) {
      result += element;
    }
  }
  return result;
}
