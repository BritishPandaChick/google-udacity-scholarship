/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = /* finish the function expression */ function(num){
  var ha = "";
  for(var i = 0; i < num; i++) {
    ha = ha + "ha";
  }
  return ha + "!"
}

console.log(laugh(10));
