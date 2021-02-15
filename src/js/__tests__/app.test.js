import arraySort from '../app';

// Task 2

const array = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];


test('sort1', () => {
  const result = arraySort(array);
  expect(result[0]).toEqual({ name: 'маг', health: 100 });
});

test('sort2', () => {
  const result = arraySort(array);
  expect(result[1]).toEqual({ name: 'лучник', health: 80 });
});

test('sort3', () => {
  const result = arraySort(array);
  expect(result[2]).toEqual({ name: 'мечник', health: 10 });
});
