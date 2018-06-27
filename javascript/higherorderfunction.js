/*

Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.

*/

const higherOrderFunction = function() {
    return function(){
        return 8;
    }
}

higherOrderFunction();
