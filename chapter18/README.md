### 함수와 일급객

#### 18.1 일급 객체

- 함수는 객체이지만, 일반 객체와 달리 callable(호출가능)하다.
- 일반 객체에는 함수 고유의 프로퍼티를 소유한다.

아래와 4가지 조건을 만족하는 객체를 일급 객체라고 한다.

- 리터럴로 생성할 수 있다. 즉, 런타임에 생성가능하다.
- 변수나 자료구조에 할당할 수 있다.
- 함수의 매개변수로 전달할 수 있다.
- 함수의 반환값으로 사용할 수 있다.

```typescript
// 함수를 변수에 저장 할 수 있다.
// 런타임에 함수 리터럴이 평가되어 함수객체가 생성되어 변수에 할당된다.
const increase = function (num: number): number {
    return ++num;
}
const decrease = function (num: number): number {
    return --num;
}
// 함수는 객체에 저장할 수 있다.
const auxs = {increase, decrease};


// 함수를 반환값으로 사용할 수 있다.
function makeCounter(aux: (num: number) => number) {
    let num = 0;
    return function () {
        num = aux(num);
        return num;
    }
}

// 함수를 매개변수로 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1

```

### 18.2 함수 객체의 프로퍼티

#### 18.2.1 arguments 프로퍼티
- arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 유사 배열 객체이다.
- 해당 방식은 ES3부터 표준에서 폐지되어서 권장되지 않는 방법이다.

```javascript
function multiply(x, y) {
    console.log(arguments);
    return x * y;
}
```