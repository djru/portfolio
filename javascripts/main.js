document.addEventListener("DOMContentLoaded", function(){
var header = document.querySelector('#header');
var content = document.querySelector('#content');
var splash = document.querySelector('#splash');
var header = document.querySelector('#header');
var m = document.querySelector('#main-text');

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
    var scale = (1/(offset/200 + 1)).toFixed(2);
  }
  else{
    var scale =  (1/(offset/100 + 1)).toFixed(2);
  }
  
  if (offset >= 0 && offset <= iHeight){
  header.style['transform'] = 'translateY(' + translate + 'px) ' + 'scale(' + scale + ')';
  header.style['-webkit-transform'] = 'translateY(' + translate + 'px) ' + 'scale(' + scale + ')';
  //if(offset <= maxOffset){
   // m.style['transform'] = 'translateY(' +  Math.floor(offset/-0.5) + 'px)';
   // m.style['-webkit-transform'] = 'translateY(' +  Math.floor(offset/-0.5) + 'px)';
  //}
  }
};

window.onload = function(){
  var iHeight = window.innerHeight;
  var maxOffset = window.innerHeight/4;
  
  splash.style['height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['height'] = content.clientheight - 100 + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  
  m.classList.remove('invisible');
  };

window.onresize = function(){
  if(!isMobile){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  }
}
}, false);
