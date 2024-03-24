// javascript에서 말하는 object
// key - value pair

// const name = 'wonjang';
// const a = 21;

// const test0bj = {
//     name,
//     age,  // 위에 선언이 되어 있다면 생략 가능
//     company : 'Team Sparta', // value는 다 올 수 있음(함수도 올 수 있음)
//     doSomething : //function() {} , 
//                     () => {}
// }

const obj1 = {
    value1 : 10,
};
const obj2 = obj1; // 1번째 방법
//obj2.value1 += 1;
const obj3 = JSON.parse(JSON.stringify(obj1));
obj1.value1 += 1;
// 만약에 우리가 복사한 obj2를 바꾼다면?
// 예상 : obj2가 바뀌면 된다!
// 실제 : obj1도 함께 바뀐다!
console.log("obj1", obj1); // 11
console.log("obj2", obj2); // 11
console.log("obj3", obj3); // 10