// what are modules?
/*
 Good authors divide their books into chapters and sections; good programmers divide their code into
 modules.
 Like book chapters are clusters of words...modules are just clusters of code.
Good modules are highly self-contained with distinct functionality.
They can be shuffled, removed or added when appropriate without disturbing the program as a whole
*/

// Why use modules?
/*
   1.Maintainability:
   By definition a module is self-contained. A well designed module aims to lessen the dependencies on parts of the codebase a much as possible. Updating a single module is much easier when the module is decoupled from other pieces of code.

   2.Namespacing:
   In javascript, variables outside of the scope of a top-level function are global.
   Because of this, it's common to have namespace pollution, where completely unrelated code
   shares global variables.
   Modules, allow us to avoid namespace pollution by creating a private space for our variables.

   3.Reusability
*/

//
