function multiply(x, y) {
    console.log(arguments);

    const args = arguments[Symbol.iterator]();
    console.log(args.next());
    console.log(args.next());
    console.log(args.next());

    return x * y;
}

console.log(multiply(2, 3)); // Outputs: 6


