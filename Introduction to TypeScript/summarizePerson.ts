function summarizePerson(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workInfo?: [string, number]
): [number, string, number, string, string] {
  const fullName = middleName && middleName.trim() !== ''
    ? `${firstName} ${middleName} ${lastName}`
    : `${firstName} ${lastName}`;

  const hobbiesStr = hobbies && hobbies.length > 0
    ? hobbies.join(', ')
    : '-';

  const workStr = workInfo
    ? `${workInfo[0]} -> ${workInfo[1]}`
    : '-';

  return [id, fullName, age, hobbiesStr, workStr];
}

// Example usage
const personSummary = summarizePerson(
  1,
  "John",
  "Doe",
  30,
  "Michael",
  ["reading", "gaming"],
  ["Developer", 50000]
);

console.log(personSummary);
// Output: [1, "John Michael Doe", 30, "reading, gaming", "Developer -> 50000"]