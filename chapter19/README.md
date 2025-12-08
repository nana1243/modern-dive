## 19. 프로토타입(Prototype)

### 19.1 객체지향 프로그래밍
- 객체지향 프로그래밍은 상태를 나타내는 데이터와(프로퍼티) 동작을 나타내는 메서드를 하나의 논리적인 단위로 묶는다.
- 따라서 객체를 상태데이터와 동작을 하나의 논리적인 단위로 묶은 복합적 자료구조라 할 수 있다.

```javascript
const circle = {
  radius: 5, // 프로퍼티
    
  // 메서드
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getDiameter: function() {
    return 2 * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
  
};
```

### 19.2 상속과 프로퍼티
- 자바스크립트는 프로터타입을 기반으로 상속한다.
```javascript
function Cicle() {
    this.radius = 5;
    this.getArea = function() {
        return Math.PI * this.radius * this.radius;
    };
}

const circle1 = new Cicle();
const circle2 = new Cicle();

/*
* Circle 생성자 함수는 인스턴스를 생성할 때마다 getArea 메서드를 중복 소유한다.
* */
console.log(circle1.getArea === circle2.getArea); // false

```