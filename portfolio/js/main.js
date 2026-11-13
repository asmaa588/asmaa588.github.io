(function(){
  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
  var btn=document.querySelector('.menu-btn'), menu=document.getElementById('menu');
  btn.addEventListener('click',function(){var o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
  var p=document.getElementById('portrait'), img=p.querySelector('img');
  function noImg(){p.classList.add('no-img')}
  img.addEventListener('error',noImg);
  if(img.complete&&img.naturalWidth===0) noImg();
  var cv=document.getElementById('cv-btn');
  function noCv(){cv.removeAttribute('href');cv.removeAttribute('download');cv.setAttribute('aria-disabled','true');cv.setAttribute('role','link');cv.textContent='CV coming soon';cv.addEventListener('click',function(e){e.preventDefault()})}
  fetch(cv.getAttribute('href'),{method:'HEAD'}).then(function(r){if(!r.ok)noCv()}).catch(noCv);
})();
