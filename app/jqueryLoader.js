// don't load jquery if it is already loaded
//   use a promise so [second] requirejs loading completes before proceeding
new Promise((resolve, reject) => {
    console.log("in jqueryLoader Promise")
    if(typeof($) == 'function') {
        console.log("jquery is loaded in Promise", setJqueryGlobal)
        if(typeof(setJqueryGlobal) === 'function') setJqueryGlobal($);
        // define 'jquery' so requirejs knows how to get it
        define('jquery', [], function() {
            resolve($)
        });
    } else {
        console.log("jquery is NOT loaded in Promise")
        // require jquery so it's available to requirejs
        requirejs(['jquery'], function( $ ) {
            console.log("in Promise requirejs block",setJqueryGlobal)
            if(typeof(setJqueryGlobal) === 'function') setJqueryGlobal($);
            resolve($)
        });
    }
}).then( ($) => { return $ } )