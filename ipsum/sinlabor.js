function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield* generator1();
  yield 3;
  yield 4;
}

const gen = generator2();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: undefined, done: true }
