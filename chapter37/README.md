### 37장 Set과 Map

#### 37.1 Set

- Set객체는 중복되지 않는 값들의 집합을 표현하는 자료구조이다.
- 중복을 허용하지 않는 Set 객체의 특성을 이용해 객체에서 중복된 요소를 제거할 수 있다.
- 요소 갯수를 확인할 때는 Set.prototype.size 프로퍼티를 사용한다.
- 요소 추가는 Set.prototype.add 메서드를 사용하며, 삭제는 Set.prototype.delete 메서드를 사용한다.
- 요소 존재여부는 Set.prototype.has 메서드를 사용한다.
- 일괄 삭제는 Set.prototype.clear 메서드를 사용한다.

```typescript
const mySet = new Set<number>([1, 2, 3, 3]);
console.log(mySet); // Set { 1, 2, 3 }


const arr = [...new Set<number>([1, 2, 2, 3, 4, 4])]
console.log(arr); // [1,2,3,4]


const {size} = new Set([1, 2, 2, 3, 4]);
console.log(size); // 4
```

- Set 객체는 이터러블이므로 for...of문으로 순회할 수 있다.

```typescript

Set.prototype.interscection = function <T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const intersct = new Set(
        Array.from(setA).filter(item => setB.has(item))
    )
    return intersct

};

Set.prototype.union - function <T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const unionSet = new Set(
        [...Array.from(setA), ...Array.from(setB)]
    )
}
Set.prototype.difference - function <T>(setA: Set<T>, setB: Set<T>): Set<T> {
    const differenceSet = new Set(
        Array.from(setA).filter(item => !setB.has(item))
    )
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const intersection = setA.interscection(setA, setB);

```

### 37.2 Map

- Map 객체는 키-값 쌍으로 이루어진 컬랙션이다.
- 객체와 달리 키로 모든 자료형을 사용할 수 있다.
- 객체와 달리 iterable이므로 for...of문으로 순회할 수 있다.

```typescript
const map = new Map<string, number>();
const map2 = new Map([['a', 1], ['b', 2]]);


// size : Map 객체의 요소 갯수 확인

console.log(map2.size); // 2

// 요소 추가시
map.set('c', 3).set('d', 4);
// 요소 삭제시
map.delete('a');
// 요소 확인
map.get('b')

// 요소 존재 확인
map.has('c') // true

// 일괄삭제
map.clear()

// iterable하다

for(const [key, value] of map2){
    console.log(`${key} : ${value}`);
}

for(const key of map2.keys()){
    console.log(key);
}

for (const value of map2.values()){
    console.log(value);
}

for (const [key, value] of map2.entries()){
    console.log(`${key} : ${value}`);
}

```