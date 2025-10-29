  var counter = function Akanshu(a) {
     let  count=a
    return(function(){
        return count++
    })
  }

   const f = counter(1)
   console.log(f());
   console.log(f());
   console.log(f());
   console.log(f());


//  clouser
