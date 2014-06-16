console.log('This would be the main JS file.');


window.onload = function(){
  document.querySelector("div#splash").style['height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['min-height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['top'] = window.innerHeight + 'px';
  document.querySelector('div#header').classList.add('active');
  };

window.onresize = function(){
  document.querySelector("div#splash").style['height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['min-height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['top'] = window.innerHeight + 'px';
}
