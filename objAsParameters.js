// An object literal can be used as a parameter
  //e.g
  function greet(options){
     options = options || {}; // if no object is provided, we create an empty one. this is common pattern used to create default values.
     // same pattern is used bellow to set default values to rest of properties
     greeting = options.greeting || "Hello!";
     name = options.name || "Lambros";
     age = options.age || 30;
     return greeting + "! My name is "+name+" and i am "+age+ " years old!";
  }

  console.log(greet()); //Hello!! My name is Lambros and i am 30 years old!

  console.log(greet({greeting:"Hi!", name: "Markos"})); // Hi! My name is Markos and i am 30 years old!

  console.log(greet({age: 40})); // Hello!! My name is Lambros and i am 40 years old!

