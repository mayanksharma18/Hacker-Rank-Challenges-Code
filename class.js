class Polygon {
 
    constructor(A) {
      this.b = A;
    }
    
    perimeter(){
      var c = 0;
    
      for(var i=0;i<(this.b).length;i++){
        c+=(this.b)[i];
      }
    
      return c;
    }
            
        
    }
    
    
    
    const rectangle = new Polygon([10, 20, 10, 20]);
    
    console.log(rectangle.perimeter());