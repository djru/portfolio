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
  
  if(isMobile){
    var scale = (1/(offset/300 + 1)).toFixed(2);
  }
  else{
    var scale =  (1/(offset/100 + 1)).toFixed(2);
  }
  
  if (offset >= 0 && offset <= iHeight){
  header.style['transform'] =  'scale(' + scale + ')';
  header.style['-webkit-transform'] = 'scale(' + scale + ')';
  }
};

window.onload = function(){
  var iHeight = window.innerHeight;
  var maxOffset = window.innerHeight/4;
  
  document.body.style["opacity"] = 1;
  document.body.style["transform"] = "scale(1)";
  document.body.style["filter"] = "none";
  document.body.style["-webkit-filter"] = "none";
  
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
