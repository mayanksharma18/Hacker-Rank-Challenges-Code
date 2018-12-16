alert("Hi");

//if divisible by 3 print fizz
//if divisible by 5 print buzz
//if divisible by 3 and 5 print fizz buzz

//
var ab=prompt("number","Number");
if(ab==100){

for(i=0;i<=100;i++)
{

if([i]%3 == 0){

    console.log([i]+" "+"Fizz");
}
if([i]%5==0){
    console.log([i]+" "+"Buzz");
}
if([i]%3 == 0&&[i]%5==0 )
{
    console.log([i]+" "+"FizzBuzz")
}

}
}//