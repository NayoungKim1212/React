// Template Literals
console.log("문자열입니다.");
//const testValue = 3;
const testValue = "제어하는 값"
console.log(`문자열 ${testValue} 입니다!`); // 백틱``

// De(out, 반대) = structur + ing
const person = {
    name: '르탄',
    age: '21'
}
const { name, age, notFound } = person;

console.log("name", name);
console.log("age", age);
//console.log("notFound", NotFound); // undefined

// Array
const testArr = [1, 2, 3, 4, 5]; // 배열은 위치가 맞아야함
const [one, two, three, four, five, six] = testArr;

console.log("one", one);
console.log("two", two);
console.log("three", three);
console.log("four", four);
console.log("five", five);
console.log("six", six); // undefined

// Spread Operator(전개 연산자)
let [name2, ...rest] = ["wonjang", 21, "Gyeongi"]; // ... => 나머지 전체를 가져와라
console.log('name2', name2); // wonjang
console.log('rest', rest); // [21, 'Gyeongi']

let names = ["Steve", "John"];
//let students = ["Tom", names, names]; // [ 'Tom', [ 'Steve', 'John' ], [ 'Steve', 'John' ] ] 
let students = ["Tom", ...names, ...names];
// [ 'Tom', 'Steve', 'John', 'Steve', 'John' ]
console.log("students", students);

// Arrow Functions
function mysum1 (x, y) {
    return x + y;
}
// 1. function () {}
// 2. (매개변수 삽입)
// 3. {내용 삽입}
// 4. return

const mysum2 = (x, y) => {
    return x + y;
}

// const mysum2 = (x, y) => x + y; // return을 생략할 경우 중괄호{}를 빼줘야함
// const mysum2 = (x, y) => { // Error!
//     x + y;
// }
console.log(mysum1(1,2)); // 3
console.log(mysum2(1,2)); // 3