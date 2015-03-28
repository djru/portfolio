(function(){
var header = document.querySelector('#header');
var content = document.querySelector('#content');
var splash = document.querySelector('#splash');
var header = document.querySelector('#header');
var main = document.querySelector('#main-text');

var maxOffset = window.innerHeight/4;

window.onscroll = function(){
  var offset = window.pageYOffset;
  header.style['transform'] = 'translateY(' + (offset * -.5) + 'px) ' + 'scale(' + 1/(offset/40 + 1) + ')';
  header.style['-webkit-transform'] = 'translateY(' + (offset * -.5) + 'px) ' + 'scale(' + 1/(offset/40 + 1) + ')';
  if(offset <= maxOffset){
    main.style['transform'] = 'translateY(' +  Math.floor(offset/-0.5) + 'px)';
    main.style['-webkit-transform'] = 'translateY(' +  Math.floor(offset/-0.5) + 'px)';
  }
};

window.onload = function(){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  
  content.style['height'] = (content.clientHeight -  Math.floor(maxOffset/0.5)) + 'px !important';
  
  main.classList.remove('invisible');
  };

window.onresize = function(){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  
  content.style['height'] = (content.clientHeight -  Math.floor(maxOffset/0.5)) + 'px !important';
}
})();
