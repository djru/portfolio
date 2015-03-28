(function(){
var header = document.querySelector('#header');
var content = document.querySelector('#content');
var splash = document.querySelector('#splash');
var header = document.querySelector('#header');
var main = document.querySelector('#main-text');

  var maxOffset = window.pageYOffset/3;


window.onscroll = function(){
  var offset = window.pageYOffset;
  header.style['transform'] = 'translateY(' + (offset * -.5) + 'px) ' + 'scale(' + 1/(offset/50 + 1) + ')';
  if(offset <= maxOffset){
    main.style['transform'] = 'translateY(' +  Math.floor(offset/-0.5) + 'px)';
  }
};

window.onload = function(){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  
  main.classList.remove('invisible');
  };

window.onresize = function(){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
}
})();
