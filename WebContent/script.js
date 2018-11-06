var bomb = document.getElementById("bombs");
var spazer = document.getElementById("spazer");
var wave = document.getElementById("wave");
var plasma = document.getElementById("plasma");
var highJump = document.getElementById("hjb");
var speed = document.getElementById("speed");
var screw = document.getElementById("screw");
var SpringBall = document.getElementById("springBall");
var varia = document.getElementById("varia");
var gravity = document.getElementById("gravity");
var missile = document.getElementById("missiles");
var supers = document.getElementById("supers");
var powerBomb = document.getElementById("pbs");
var eTank = document.getElementById("etank");
var reserve = document.getElementById("reserve");

var shoppingCart = [];

function printList() {

//	bill.textContent = "hello";
	var wholeBill = "";
	for (var i = 0; i < shoppingCart.length; i++) {
		wholeBill += shoppingCart[i].name + "\n";
	}
	bill.textContent = wholeBill;
	
}


bomb.onclick = function() {
	var bombs = {
		name : "Bombs",
		price : 799.99,
	}
	shoppingCart.push(bombs);
	printList();
}
spazer.onclick = function() {
	var spazers = {
		name : "Spazer Beam",
		price : 249.99,
	}
	shoppingCart.push(spazers);
	printList();
}

wave.onclick = function() {
	var waves = {
		name : "Wave Beam",
		price : 799.99,
	}
	shoppingCart.push(waves);
	printList();
}

plasma.onclick = function() {
	var plasmas = {
		name : "Plasma Beam",
		price : 849.99,
	}
	shoppingCart.push(plasmas);
	printList();
}

highJump.onclick = function() {
	var highJumps = {
		name : "High Jump Boots",
		price : 749.99,
	}
	shoppingCart.push(highJumps);
	printList();
}

speed.onclick = function() {
	var speeds = {
		name : "Speed Booster",
		price : 599.99,
	}
	shoppingCart.push(speeds);
	printList();
}

screw.onclick = function() {
	var screws = {
		name : "Screw Attack",
		price : 499.99,
	}
	shoppingCart.push(screws);
	printList();
}

springBall.onclick = function() {
	var springBalls = {
		name : "Spring Ball",
		price : 9999.99,
	}
	shoppingCart.push(springBalls);
	printList();
}

varia.onclick = function() {
	var varias = {
		name : "Varia Suit",
		price : 599.99,
	}
	shoppingCart.push(varias);
	printList();
}

gravity.onclick = function() {
	var gravitys = {
		name : "Gravity Suit",
		price : 799.99,
	}
	shoppingCart.push(gravitys);
	printList();
}

missile.onclick = function() {
	var missiles = {
		name : "Missilee Pack",
		price : 99.99,
	}
	shoppingCart.push(missiles);
	printList();
}

supers.onclick = function() {
	var superss = {
		name : "Super Missile Pack",
		price : 399.99,
	}
	shoppingCart.push(superss);
	printList();
}
powerBomb.onclick = function() {
	var powerBombs = {
		name : "Power Bomb Pack",
		price : 399.99,
	}
	shoppingCart.push(powerBombs);
	printList();

	etank.onclick = function() {
		var etanks = {
			name : "Energy Tank",
			price : 799.99,
		}
		shoppingCart.push(etanks);
		printList();
	}

	reserve.onclick = function() {
		var reserves = {
			name : "Reserve Tank",
			price : 799.99,
		}
		shoppingCart.push(reserves);
		printList();
	}
}

