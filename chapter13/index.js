// 전역 함수
function foo() {
    console.log('global foo called');
}


function bar() {
    function foo() {
        console.log('local foo called');
    }
    foo(); // 지역 함수 호출
}

foo(); // "global foo called" 출력
bar(); // "local foo called" 출력