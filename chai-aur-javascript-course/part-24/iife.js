// IIFE : Immediately Invoked Function Expression

// named IIFE
(
    function name () {
        console.log('This is a named IIFE');
    }
)();
// we should end the iife using ; (semicolon)

// unnamed or anonymous iife
(
    (unname) => {
        console.log(unname, 'This is a unnamed IIFE');
    }
)('pranjal');

// IIFE is for removing global scope pollution and immediate call