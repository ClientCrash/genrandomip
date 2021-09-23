const { randomInteger } = require("random-int");
function v4generate() {
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

module.exports = {
  v4generate: v4generate,
};
