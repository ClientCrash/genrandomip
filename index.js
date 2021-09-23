function randomInteger(minimum, maximum) {
  if (maximum === undefined) {
    maximum = minimum;
    minimum = 0;
  }
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}
export function v4generate() {
  return (
    "" +
    Math.floor(randomInteger(0, 255)) +
    "." +
    Math.floor(randomInteger(0, 255)) +
    "." +
    Math.floor(randomInteger(0, 255)) +
    "." +
    Math.floor(randomInteger(0, 255))
  );
}
