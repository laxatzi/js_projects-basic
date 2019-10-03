// We can similarly destructure nested objects into variables.

// Consider the following code:

const anObj = {
   start: { x: 5, y: 6},
   end: { x: 6, y: -9 }
 };
 const { start : { x: startX, y: startY }} = anObj;
 const {end:{x:endX, y:endY}} = anObj;
 console.log(endX, endY);
 console.log(startX, startY); // 5, 6
