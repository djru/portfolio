console.log('This would be the main JS file.');

document.querySelector("div#splash").style['height'] = window.innerHeight + 'px';

window.onload = function(){
  document.querySelector('div#header').classList.add('active');
  };
