console.log('This would be the main JS file.');

window.onscroll = function(){
  document.querySelector('#header').style['transform'] = 'translateY(' + (window.pageYOffset * -.5) + 'px) ' + 'scale(' + 1/(window.pageYOffset/50 + 1) + ')';

  };

window.onload = function(){
  var iHeight = window.innerHeight;
  document.querySelector("#splash").style['height'] = iHeight + 'px';
  
  var content = document.querySelector("#content");
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  
  var header = document.querySelector('#header');
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 11em)';
  };

window.onresize = function(){
  var iHeight = window.innerHeight;
  document.querySelector("#splash").style['height'] = iHeight + 'px';
  
  var content = document.querySelector("#content");
  content.style['min-height'] = iHeight + 'px';
  content.style['top'] = iHeight + 'px';
  
  var header = document.querySelector('#header');
  header.style['margin-top'] = 'calc(' + Math.floor(iHeight/2) + 'px - 11em)';
}
