/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Space the final frontier...');

/* I am a comment 
and I can fill out more than one line
*/

// I am a one liner comment.

/* Variables and how to create them */
let myCow = "Alaska";
var anotherCow = "Red";
// if using single quotation mark, use \ before the apostaphy. 
// new line is denoted by \n
let myBook = "It was a dark and stormy night, and Joe's gun... \n";
const grandMa ="Betty";

console.log(
    myBook 
    + " " 
    + grandMa 
    + " " 
    + myCow
    );

    /* numbers */
    let lucky = 7;
    let disaster = 15;
    const noChange = 333;
    
    console.log(lucky / disaster);

    /* booleans: true or false */

    const santaExists = true;
    console.log(santaExists);

    /* compare */
    console.log(lucky >= disaster);

    /* write to some html id */
    hi.innerHTML = "<p>" + myBook + "</p>"

    /** Several Lines in a variable */

    let pizza = `
        <article>
        <h2> Gorgonzola Gargantua </h2>
        <img src= "images/pizza.png" alt="Gorgonzola pizza  ">
        <p> This wonderfull....</p>
        </article>
    `;

    //inject this into #h1
    hi.innerHTML += pizza;

    /** Functions: a series of instructions */
    let boom = function(){
        alert("We use cookies, and we track all you do! Consent?");
        console.log("Cookie info fired of!");
        return true;
    };