const formatArray = (array: string[]): [string, number] => {
  const concatenated = array.join("");
  return [concatenated, concatenated.length];
};