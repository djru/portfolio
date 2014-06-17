console.log('This would be the main JS file.');

window.onscroll = function(){
  document.querySelector('#header').style['margin-top'] = (window.pageYOffset * -2) + 'px';
  };

window.onload = function(){
  document.querySelector("#splash").style['height'] = window.innerHeight + 'px';
  document.querySelector("#content").style['min-height'] = window.innerHeight + 'px';
  document.querySelector("#content").style['top'] = window.innerHeight + 'px';
  document.querySelector('#header').classList.add('active');
  document.querySelector('#main-text').classList.add('visible');
  };

window.onresize = function(){
  document.querySelector("#splash").style['height'] = window.innerHeight + 'px';
  document.querySelector("#content").style['min-height'] = window.innerHeight + 'px';
  document.querySelector("#content").style['top'] = window.innerHeight + 'px';
}
