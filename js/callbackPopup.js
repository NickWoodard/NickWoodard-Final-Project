function callbackGreeting(callback) {
 alert('Hello! This is the first time I said hello!');
 callback();
}

callbackGreeting (function() {
 alert('This is the second time I said hello!');
});