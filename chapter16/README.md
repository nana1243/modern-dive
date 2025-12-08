## 프로퍼티와 어트리뷰트

### 16.1 내부슬롯과 내부 메서드
- 자바스크립트 객체는 프로퍼티 외에도 내부슬롯(Internal Slot)과 내부 메서드(Internal Method)를 갖는다.
- 내부슬롯과 내부 메서드는 자바스크립트 엔진이 객체를 구현하기 위해 사용하는 것으로 직접 접근할 수 없으며, 대괄호([])로 표기한다.
- [[Prototype]] 은 __proto__ 접근자를 통해 간접적으로 접근할 수 있다.

### 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

- 객체의 프로퍼티란 ? 객체의 key, value 쌍을 의미한다.
- 객체의 어트리뷰트란 ? 프로퍼티가 어떻게 동작해야하는지를 명시하는 내부 설정(메타데이터)이다.
- 자바스크립트의 모든 프로퍼티는 4가지 기본 어트리뷰트를 갖는다.
  - [[Value]] : 프로퍼티의 값이다.
  - [[Writable]] : 값의 변경 가능 여부를 나타낸다.
  - [[Enumerable]] : 열거 가능 여부를 나타낸다.
  - [[Configurable]] : 재정의 가능 여부를 나타낸다.


### 16.3 프로퍼티 어트리뷰트의 참조와 설정

- 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
- 데이터 프로퍼티(data property) : Key, value로 구성된 일반적인 프로퍼티
- 접근자 프로퍼티(accessor property) : 자체적으로 데이터를 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할때 호출되는 접근자 함수로 구성된 프로퍼티

```javascript
const person = {
    firstName: 'Ungmo', // 데이터 프로퍼티
    lastName: 'Lee', // 데이터 프로퍼티

    // fullName은 접근자 프로퍼티다.
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};


```


### 16.4 프로퍼티 정의와 변경
- 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나 기존 프로퍼티 어트리뷰트를 재정의 하는것이다.


### 16.5 객체 변경 방지

- Object.preventExtensions : 객체 확장 금지
- Object.seal : 객체 밀봉
- Object.freeze : 객체 동결(얕은 동결)