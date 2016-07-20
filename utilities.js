//Helper function to add an event listener
function addEvnt(el, event, callback) {
    if('addEventListener' in el) {                   // If addEventListener works
        el.addEventListener(event,callback, false); // Use it
        
    } else {                                    // Otherwise
        el['e' + event + callback] = callback;  // Make callback a method of el
        el[event + callack] = function(){   // add second method
            el['e' + event + callback](window.event); // Use it to call prev func
        };
        el.attachEvent('on' + event, el[event + callback]);  // Use attachEvent()
    }   //to call the second function, which then calls the first one
}