


function getCount(objects) {
    this.o=objects;
    count=0;
    for (let c in objects) {
        if(c.x=c.y){
          count++
        }
        
        return count;
    }
    
}
getCount([{x:2,y:3},{x:4,y:5},{x:5,y:5}]);