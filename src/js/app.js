export default function arraySort(array) {
  return array.sort((prev, next) => next.health - prev.health);
}
