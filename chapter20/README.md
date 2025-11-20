### Strict Mode

- 아래 코드의 순서는 처음에는 x가 스코프 내에서 변수를 찾는다. 그러나 찾지 못해 전역 스코프에서 변수를 찾게 된다. 
전역 스코프에도 변수가 없으므로, 자바스크립트는 암묵적으로 `전역 변수`를 생성한다. 따라서 foo 함수가 호출된 후에 x는 전역 변수로 존재하게 된다.

- const , let, var 키워드를 사용하여야 하지만, 실수로 변수를 선언하지 않고 사용할 때가 있다.
- 이러한 실수를 방지하고자 stric mode가 도입되었다.
```javascript
function foo() {
    x = 1;
}
foo();
console.log(x); // 1

```

```javascript
'use strict';

function foo() {
    x = 1; // ReferenceError: x is not defined
}

```

### 20.4 함수 단위로 strict mode 적용을 피하자
- strict mode는 함수 단위로 적용할 수 있다.
- 그러나, 함수 단위로 strict mode를 적용하는 것은 권장되지 않는다.


### 20.6 strict mode 적용에 의한 변화

#### 20.6.1 일반함수의 this
- strict mode에서 일반 함수 내부의 this는 undefined이다.
- strict mode가 아닌 경우, 일반 함수 내부의 this는 전역 객체를 가리킨다.
- 생성자 함수 내부의 this는 strict mode 여부와 상관없이 생성된 인스턴스를 가리킨다.
```javascript
(
    function () {
        'use strict';

        function bar() {
            console.log(this); //undefined
        }

        bar();

        function Bar() {
            console.log(this); //Bar {}
        }

        new Bar();

    }
)();

```

#### 20.6.2 arguments 객체
- strict mode에서 함수의 매개변수와 arguments 객체는 서로 영향을 미치지 않는다.
- 
```javascript
(function (a) {
    'use strict';
    a = 2;
    console.log(arguments); // { '0': 1 }
    
})

```