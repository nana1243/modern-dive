### 37장 Set과 Map


#### 37.1 Set
- Set객체는 중복되지 않는 값들의 집합을 표현하는 자료구조이다.
- 중복을 허용하지 않는 Set 객체의 특성을 이용해 객체에서 중복된 요소를 제거할 수 있다.
- 요소 갯수를 확인할 때는 Set.prototype.size 프로퍼티를 사용한다.
- 요소 추가는 Set.prototype.add 메서드를 사용하며, 삭제는 Set.prototype.delete 메서드를 사용한다.
- 요소 존재여부는 Set.prototype.has 메서드를 사용한다.
- 일괄 삭제는 Set.prototype.clear 메서드를 사용한다.

```typescript
const mySet = new Set<number>([1,2,3,3]);
console.log(mySet); // Set { 1, 2, 3 }


const arr = [...new Set<number>([1,2,2,3,4,4])]
console.log(arr); // [1,2,3,4]


const {size} = new Set([1,2,2,3,4]);
console.log(size); // 4
```

- Set 객체는 이터러블이므로 for...of문으로 순회할 수 있다.

```typescript

Set.prototype.interscection = function<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const intersct = new Set(
        Array.from(setA).filter(item => setB.has(item))
    )
    return intersct

};

const setA = new Set([1,2,3,4]);
const setB = new Set([3,4,5,6]);

const intersection = setA.interscection(setA, setB);

```