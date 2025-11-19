### 36장 디스트럭처링 할당

- iterable 또는 객체를 destructuring(구조 분해)하여 변수에 할당하는 문법이다.

#### 36.1 배열 디스트럭처링 할당

- 아래와 같이 배열(이터러블한객체)의 디스트럭처링 할당이 가능하다.
- rest 요소를 사용가능하다.

```typescript

const arr = [1, 2, 3];
const [a, b, c] = arr;

const [first , ...rest] = [1,2,3,4,5];
console.log(first); // 1
console.log(rest); // [2,3,4,5]

```

#### 36.2 객체 디스트럭처링 할당

- 객체의 디스트럭처링 할당도 가능하다.

```typescript

const user = { name: 'Alice', age: 30 };
const { name, age } = user;

const { name: userName, age: userAge } = user; // 변수 이름 변경

```