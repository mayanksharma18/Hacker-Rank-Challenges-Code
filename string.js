//var Teststr="JavaScript is new revolution";
var Teststr=prompt("Enter the text","Text");
//alert(Teststr.charAt(2) );
//alert(Teststr.includes("a"));
var ab=Teststr.split("");//split function splits the string into array||Convert a string into an array for easy access and looping.
var bc=Teststr.split(" ");
var cd=Teststr.substr(10,10);
var pos=[]
count=0
for(i=0;i<ab.length;i++){

if(ab[i]=="a"){
    pos.push(i);
    count++;
}

}
for(i=0;i<bc.length;i++){
    if(bc[i]=="the"){
        bc[i]="an";
    }
}

console.log(count);
console.log(pos);
console.log(Teststr.toUpperCase());
console.log(Teststr.toLowerCase());
//console.log(Teststr.replace("revolution","fantastic"));

//Regular Expression
/*Regular expressions are patterns you define that are then searched for in a string.
 You can modify, replace, or remove the pattern from the string.
  For example, you could write a regular expression pattern to 
  search for the characters a, b, or c in a string, and then do something with all matches found.*/

  //var rgx=/[a-z]|[0-9]/gi
  var rgx=/a|e|i|o|u|an/gi
  var rgxtest=Teststr.replace(rgx,"-");
  console.log(Teststr.replace(rgx,rgx.toUppercase));

 
  