/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (/* your conditional goes here */ weapon === room) {
  solved = true;
} else if (/* your conditional goes here */ room === suspect ) {
    solved = true;
} else if (/* your conditional goes here */ suspect === weapon) {
    solved = true;
} else {
    return "You are wrong!"
}

if (solved) {
	console.log(/* your message goes here*/ suspect + " did it in the " + room + " with the " + weapon + "!");
}
