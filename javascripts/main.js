console.log('This would be the main JS file.');


window.onload = function(){
  document.querySelector("div#splash").style['height'] = window.innerHeight + 'px';
  document.querySelector('div#header').classList.add('active');
  };
