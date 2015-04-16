console.log('Oh, hey! Thanks for stopping by. Really appreciate it!');
var el = document.getElementById('badge');
var ready = function () {
  el.setAttribute('class','ready');
}
setTimeout(ready,1000);
