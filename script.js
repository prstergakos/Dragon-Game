/*Dragon Game*/

function dragon_slayer() {
	var slaying = true;
	//math to calculate damage
	var youHit = Math.floor(Math.random()*2);
	var damageThisRound = Math.floor(Math.random()*5+1);
	var totalDamage = 0;
	
	while(slaying) {
		if (youHit) {
			document.getElementById("result").innerHTML = "You hit the dragon and did " + damageThisRound + " Damage!";
			totalDamage += damageThisRound;
			
			if (totalDamage >= 3) {
				document.getElementById("result").innerHTML = "You did it! You killed the dragon!";
				slaying = false;
			} else {
				youHit = Math.floor(Math.random()*2);
			}
		}else {
			document.getElementById("damage").innerHTML = "The dragon incinerates you, you're toast!";
			slaying = false;
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", dragon_slayer, false);
}else if(window.attachEvent) {
	window.attachEvent("onload", dragon_slayer);
}