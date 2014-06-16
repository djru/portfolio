console.log('This would be the main JS file.');

window.onscroll = function(){
  document.querySelector('#header').style['margin-top'] = (window.pageYOffset * -2) + 'px';
  document.querySelector('#arrow').style['bottom'] = (window.pageYOffset * 2 + 10) + 'px';
  };

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
