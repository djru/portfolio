(function(){
var header = document.querySelector('#header');
var content = document.querySelector('#content');
var splash = document.querySelector('#splash');
var header = document.querySelector('#header');
var m = document.querySelector('#main-text');

window.onscroll = function(){
  var offset = window.pageYOffset;
  var maxOffset = window.innerHeight/4;
  header.style['transform'] = 'translateY(' + (offset * -.5) + 'px) ' + 'scale(' + 1/(offset/40 + 1) + ')';
  header.style['-webkit-transform'] = 'translateY(' + (offset * -.5) + 'px) ' + 'scale(' + 1/(offset/40 + 1) + ')';
  if(offset <= maxOffset){
    m.style['transform'] = 'translateY(' +  Math.floor(offset/-0.5) + 'px)';
    m.style['-webkit-transform'] = 'translateY(' +  Math.floor(offset/-0.5) + 'px)';
  }
};

window.onload = function(){
  var iHeight = window.innerHeight;
  var maxOffset = window.innerHeight/4;
  
  splash.style['height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['height'] = (content.clientHeight - Math.floor(maxOffset/0.5) - 100) + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  
  m.classList.remove('invisible');
  };

window.onresize = function(){
  var iHeight = window.innerHeight;
  
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  
}
})();
