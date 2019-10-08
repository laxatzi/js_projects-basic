// CLASS EXERCISE

/* Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getter and setter in the class, to obtain the temperature in Celsius scale.
Remember that C = 5/9 * (F - 32)and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

Note

When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.
*/
function makeClass() {
   "use strict";
   /* Alter code below this line */
     class Thermostat {
       constructor(fahrenheit){
         this.temp = fahrenheit;
       }
   
     }
   /* Alter code above this line */
   return Thermostat;
 }
