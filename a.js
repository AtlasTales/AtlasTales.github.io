var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict()


e= $('.syllable')




s=  `hello bro allow callo`



S=s.split(" ")





// let playerSpriteX = 0;

document.addEventListener('keyup', (e) => {
  console.log(e.code)
  if(e.code == "Space")
  {

	t = e.textContent
  	console.log(t)
  }

  // document.getElementById('test').innerHTML = 'playerSpriteX = ' + playerSpriteX;
});