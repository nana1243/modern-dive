// 'use strict';

function foo() {
    x = 1;
}

foo();
console.log(x); // 1


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

