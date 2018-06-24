/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (/* your stop condition goes here */ x <= 20) {
    // check divisibility
    if ((x % 3 === 0) && (x % 5 === 0)) {
      console.log("JuliaJames");
    } else if (x % 5 === 0) {
      console.log("James");
    } else if (x % 3 === 0) {
      console.log("Julia");
    } else {
      console.log(x);
    }
    x++;
    // print Julia, James, or JuliaJames
    // increment x
}
