document.addEventListener("DOMContentLoaded", function(){
var splash = document.querySelector('#splash');
var header = document.querySelector('#header');
var date = document.querySelector('#date');

var isMobile = false;
isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) ;

if(isMobile){
  document.body.classList.add('mobile');
}

window.onscroll = function(){
  var iHeight = window.innerHeight;
  var offset = window.pageYOffset;
  var maxOffset = iHeight/4;
  var translate =  Math.floor(offset * .4);
  
  if(isMobile){
    var scale = (1/(offset/300 + 1)).toFixed(2);
  }
  else{
    var scale =  (1/(offset/100 + 1)).toFixed(2);
  }
  
  if (offset >= 0 && offset <= iHeight){
  header.style['transform'] = 'translateY(' + translate + 'px) ' + 'scale(' + scale + ')';
  header.style['-webkit-transform'] = 'translateY(' + translate + 'px) ' + 'scale(' + scale + ')';
  }
};

window.onload = function(){
  var iHeight = window.innerHeight;
  var maxOffset = window.innerHeight/4;
  
  splash.style['height'] = iHeight + 'px';
  date.innerHTML = (new Date()).getYear() + 1900;
  };

window.onresize = function(){
  if(!isMobile){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  }
}
}, false);
