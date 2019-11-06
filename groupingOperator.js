// explain grouping operator

// OR: Why does this work: (function(){})();
// BUT: This does NOT work: function(){}();

/*
    code in line 4 doesn't work because it is being parsed as a FunctionDeclaration, and the name identifier of function declarations is MANDATORY.
    The grammar for a FunctionDeclaration looks like this: 
    function Identifier (FormalParameterListopt) { FunctionBody }.

    When code is surround it with the grouping operator (parenthesis), it is evaluated as a FunctionExpression and function expressions have the option to  be named or be anonymous.
    The grammar for a FunctionExpression looks like this:
    function Identifieropt (FormalParameterListopt) { FunctionBody }.

    As we can see in line 13, the identifier token has altered to a identifierOPT token.
    Therefor we can have a function expression with no name defined. 

*/
(function () {
   alert(2+2);
}());
// and 
(function twoPlusTwo(){
   alert(2+2);
}());

// are both correct

/*
    The Parenthesis (grouping operator), can be ambiguous (confusing), and they can look exactly the sam
    function foo () {}  //Function Declaration
    0, function foo () {} // Function Expression

   The Parser knows which is which, depending on the CONTEXT 
   In the example, the second is an EXPRESSION coz the 'comma operator' can handle ONLY Expressions
*/