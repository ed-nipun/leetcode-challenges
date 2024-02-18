function getTitleCase(string) {
  // string to array
  const arr = string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    // onna dan mama cat gaththa
    // dan mama karanna ona cat eke 0 index eka uc karana eka

    const firstLetterCapital = element[0].toUpperCase();

    const remainingLetters = element.slice(1);

    const finalWord = firstLetterCapital + remainingLetters;

    arr.splice(i, 1, finalWord);
  }
  console.log(`original length: ${string.length}`)
  console.log(`edited length: ${arr.join(' ').length}`)
  return arr.join(" ");
}

console.log(getTitleCase("the cat is brows and blue"));
