## 15. let, const 키워드와 블록 레벨 스코프


### 15.1 var 키워드로 선언한 변수의 문제점

#### 15.1.1 변수 중복 선언 허용


```javascript

var x = 1;
var y = 2;

var x = 100; // 변수 x 중복 선언
var y;

console.log(x); // 100
console.log(y); // 2

```

#### 15.1.2 함수 레벨 스코프
- 함수 외부에서 var 키워드로 선언한 변수는 코드 블록({}) 내부에서 선언하더라도 함수 레벨 스코프를 갖는다.
```javascript

var x = 1;
if (true) {
    var x = 10; // var 키워드로 선언한 변수는 함수 레벨 스코프를 갖는다.
}
console.log(x); // 10

```
#### 15.1.3 변수 호이스팅

- 변수 호이스팅: 변수 선언문 이전에 변수를 참조하는것이 변수 호이스팅에 의해 에러를 발생시키지는 않지만, 가독성을 떨어ㄸ리고 오류를 발생시킬 여지를 남는다.
```javascript

console.log(x); // undefined
var x = 1;

console.log(x) // 1
var x;

```

### 15.2 let 키워드
- ES6에서 도입된 let 키워드는 변수 선언에 사용된다.

#### 15.2.1 변수 중복 선언 금지
- let 키워드로 같은 이름 변수 선언시 syntax error 발생
```javascript
var foo = 1;
var foo = 2; // var 키워드는 변수 중복 선언 허용

let bar = 1;
let bar = 2; // SyntaxError: Identifier 'bar' has already been declared

```

#### 15.2.2 블록 레벨 스코프 
- var같은 경우 오직 함수레벨 스코프만 가지지만 let은 블록레벨 스코프를 가진다.
```javascript
let foo = 1;

{
    let foo = 2; // 블록 레벨 스코프
    let bar = 3; 
    console.log(foo); // 2
}
console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined

```

### 15.2.3 변수 호이스팅
- let 키워드로 선언한 변수는 변수 호이스팅이 발생하지만, 초기화 이전에 참조할 수 없다.

### 15.3 const 키워드
- const 키워드는 상수를 선언할 때 사용된다.
- const 키워드로 선언한 변수는 재할당이 불가능하다.

#### 15.3.1 선언과 초기화
- const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다.
````javascript

const foo = 1;
const bar; // SyntaxError: Missing initializer in const declaration
````

- const 키워드로 선언한 변수는 블록 레벨 스코프를 갖는다.


#### 15.3.2 재할당 금지
```javascript
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
```

#### 15.3.3 상수
- 변수의 상대개념인 상수는 재할당이 금지된 변수를 말한다.

#### 요약
- 변수선언에는 기본적으로 const 키워드를 사용하고, 재할당이 필요한 경우에만 let 키워드를 사용한다.
- var 키워드는 사용하지 않는다.
