
//Reverse a String With Built-In Functions
//For this solution, we will use three methods: the String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.




/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
 
function reverseString(s) {
    try {
        var b = s.split("");//The split() method splits a String object into an array of string by separating the string into sub strings.
        b.reverse();//The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
        var c = b.join("");//The join() method joins all elements of an array into a string.

        console.log(c);
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
        
    }
    
}
////////By for Looping
function reverseString(s) {
    var j= (s.length)-1;
    var str=""
      for(i=j;i>=0;i--){
        str=str+s[i];
  
      }
  return str;
  }
  reverseString("1234");