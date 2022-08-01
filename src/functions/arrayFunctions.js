export function getRandomWord(words) {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

export function updateById(itemToUpdate, arr) {
  const updated = arr.map((item) =>
    item.id === itemToUpdate.id ? itemToUpdate : item
  );
  return updated;
}

export function filterOutById(itemToFilter, arr) {
  const updated = arr.filter((item) => item.id !== itemToFilter.id);
  return updated;
}
