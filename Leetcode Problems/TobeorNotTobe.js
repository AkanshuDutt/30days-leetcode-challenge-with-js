function expect(actual) {
  return {
    toBe(expected) {
      if (actual === expected) {
        return true;
      } else {
        throw new Error("Not Equal"); }
    },
    notToBe(expected) {
      if (actual !== expected) {
        return true;
      } else {
        throw new Error("Equal"); 
      }
    }
  };
}


console.log(expect(5).toBe(5));        
console.log(expect(5).notToBe(10));    


try {
  expect(5).toBe(10);       // Error: Not Equal
} catch (err) {
  console.log(err.message);
}

try {
  expect(5).notToBe(5);     // Error: Equal
} catch (err) {
  console.log(err.message);
}
