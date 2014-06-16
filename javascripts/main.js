console.log('This would be the main JS file.');

window.onscroll = function(){
  document.querySelector('div#spalsh #header').style['margin-top'] = (window.pageYOffset * -2) + 'px';
  document.querySelector('div#splash #arrow').style['bottom'] = (window.pageYOffset * 2 + 10) + 'px';
  };

window.onload = function(){
  document.querySelector("div#splash").style['height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['min-height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['top'] = window.innerHeight + 'px';
  document.querySelector('div#splash #header').classList.add('active');
  document.querySelector('div#splash #arrow').style['display'] = 'block';
  };

window.onresize = function(){
  document.querySelector("div#splash").style['height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['min-height'] = window.innerHeight + 'px';
  document.querySelector("div#content").style['top'] = window.innerHeight + 'px';
}
