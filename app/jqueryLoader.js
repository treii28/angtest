// don't load jquery if it is already loaded
//   use a promise so [second] requirejs loading completes before proceeding
new Promise((resolve, reject) => {
    if(typeof($) == 'function') {
        // define 'jquery' so requirejs knows how to get it
        define('jquery', [], function() { resolve($) });
    } else {
        // require jquery so it's available to requirejs
        requirejs(['jquery'], function( $ ) { resolve($) });
    }
}).then( ($) => { return $ } )