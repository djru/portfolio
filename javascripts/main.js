(function(){
var header = document.querySelector('#header');
var content = document.querySelector('#content');
var splash = document.querySelector("#splash");
var header = document.querySelector('#header');

window.onscroll = function(){
  var offset = window.pageYOffset;
  header.style['transform'] = 'translateY(' + (offset * -.5) + 'px) ' + 'scale(' + 1/(offset/50 + 1) + ')';
  var maxOffset = 600;
  if(offset <= maxOffset){
    content.style['transform'] = 'translateY(' +  Math.floor(offset/2) + 'px)';
  }
};

window.onload = function(){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
  
  document.querySelector('#main-text').classList.remove('invisible');
  };

window.onresize = function(){
  var iHeight = window.innerHeight;
  splash.style['height'] = iHeight + 'px';
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 100px)';
}
})();
