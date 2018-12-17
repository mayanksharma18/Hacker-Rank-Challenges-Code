
// //The try statement lets you test a block of code for errors.

// The catch statement lets you handle the error.

// The throw statement lets you create custom errors.

// The finally statement lets you execute code, after try and catch, regardless of the result

function isPositive(a) {
    try{
      if (a > 0) {
          return 'yes';
      }
     
   if (a==0){
    throw "Zero Error"
  }
  else {
    throw "Negative Error"
  }
    }
    catch(e){
      return e.message;
    }
  }
  isPositive(-9);