//Immediately Invoked Function Expressions (IIFE)
//chai() is a named IIFE
(function chai() {
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('XYZ')