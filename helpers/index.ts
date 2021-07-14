export const searchTextParser = (text: string) => {
  let newText = "";
  let numbers = "0123456789 ";

  for (let i = 0; i < text.length; i++) {
    if (numbers.indexOf(text[i]) > -1) {
      if (text[i] == " " && (i == 0 || text[i - 1] == " ")) {
        continue;
      }
      newText = newText + text[i];
    }
  }
  return newText;
};
