/* Object Basics
We define the following:

Object: A collection of properties.
Property: An association between a name (i.e., key) and a value.
Note that when the value associated with a key is a function, we call the property a method.
 A property name can be any valid string, or anything that can be converted 
 into a string (including the empty string).
An object has properties associated with it, and we explain an object's properties as 
variables that are part of the object. We can think of an object's properties as a set of regular 
variables specific to that object that define its characteristics. */
function Rectangle(a,b)   //Creating Objects using constructor function
{
 this.lenght=a;
 this.breadth=b;
 this.perimeter=2*(a+b);
 this.area=a*b;   
}

var ab= new Rectangle(2,4);  //Creating object with new keyword

var vc=Object.create(ab);  //

