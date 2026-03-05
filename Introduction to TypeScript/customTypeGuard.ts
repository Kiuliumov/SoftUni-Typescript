function isNonEmptyStringArray(value: unknown): value is string[] {
  if (!Array.isArray(value)) return false;

  if (value.length === 0) return false;

  return value.every(item => typeof item === "string");
}

const data: unknown = ["hello", "world"];

if (isNonEmptyStringArray(data)) {
  console.log(data[0].toUpperCase());
} else {
  console.log("Not a non-empty string array");
}