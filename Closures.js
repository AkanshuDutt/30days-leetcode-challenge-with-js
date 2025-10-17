//  In JS we are create function within other function. The Inner function access to any  variable to above it.
//  For  batter clearification   example  below
   function Akanshu (a){
     return  function Dutt(b){
         const c =a+b;
         return c;
     }
   }
 const addTo2=Akanshu(2);
   console.log(addTo2(5));
   