	var x = Math.floor((Math.random() * 5) + 1);
	if (x == 1) {
		bye = "Come back soon!";
	} else if (x == 2) {
		bye = "I'll miss you!";
	} else if (x == 3) {
		bye = "I hope you have a great day!";
	} else if (x == 4) {
		bye = "Have a wonderful day!";
	} else if (x == 5) {
		bye = "Adios amigo!";
	} else {
		bye = "I hope you have a great day. I love you.";
	}			
	var el = document.getElementById("goodbye");
	el.textContent = bye;