## 전역변수의 문제점

### 14.1 변수의 생명주기

#### 14.1.1 지역변 생명주기

- 전역변수는 프로그램의 life cycle과 같다
- 지역변수의 생명주기는 함수의 생명주기와 같다(예외도 존재)

```javascript

function foo() {
    var x = 10; // 지역변수
    console.log(x);
    return x;
}

foo(); // 10
console.log(x); // ReferenceError: x is not defined

```

- 변수 선언은 코드가 한줄씩 순차적으로 실행되는 시점에 실행되는게 아니라, 런타임 이전 단계 자바스크립트 엔진에 의해 먼저 실행된다.
- 호이스팅은 스코프 단위로 동작한다.

```javascript
var x = 'global variable';

function foo() {
    console.log(x); // undefined => 호이스팅에 의해 지역변수의 x를 참조해 출력된 결과이다.
    var x = 'local variable';
    console.log(x); // 'local variable'
}

foo();
console.log(x); // 'global variable'

```

#### 14.1.2 전역변수의 생명주기
- 전역 객체는 클라이언트 사이드에서는 window 객체, 서버 사이드에서는 global 객체를 의미한다.

### 14.2 전역변수의 문제점
- 암묵적 결합 
- 스코프 체인상에서 종점이 존재
- 네임스페이스 오염

### 14.3 전역변수의 사용을 억제하는 방법
- 즉시 실행함수 : 모든 코들르 즉시 실행함수로 감싸면 전역변수를 만들지 않는다.
- 네임스페이스 객체 
- 모듈패턴 
```javascript
var Counter = (function() {
    var num = 0; // private 변수

    return {
        increase: function() {
            return ++num;
        },
        decrease: function() {
            return --num;
        }
    };
})();

```