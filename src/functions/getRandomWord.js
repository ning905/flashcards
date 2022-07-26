export default function getRandomWord(words) {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
