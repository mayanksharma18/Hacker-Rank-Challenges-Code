

function getSecondLargest(nums) {
    // Complete the function
    var sr = nums.sort(function(a,b){return b-a});//sorting in descending
    var k = sr.length;
     var l;
        console.log(sr);
        for(var i=0;i<k;i++){
         if(sr[0]!=sr[i]){
           l=sr[i];
           break;
         }
         
        }
        
        return l;
    
}
getSecondLargest([1,56,7,4,88,9,3,45,55,56,87,88,45])