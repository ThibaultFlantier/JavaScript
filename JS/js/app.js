// var entier = entierAleatoire(1, 100),
// nmbr = prompt ("Entrez un nombre entre 1 et 100"),
// compteur = 1;

// while (nmbr != entier) {
// if (nmbr < entier) {
// 	nmbr = prompt ("Entrez un nombre plus grand");
// }
// else {
// 	nmbr = prompt ("Entrez un nombre plus petit");
// }
// compteur ++; // le ++ incrémente directement 1 au compteur a chaque tour de boucle
// }
// alert ("Bravo, tu as gagné en " + compteur + " coups");
//  // le alert est la qeule autre possibilité il n'y a donc pas à l'introduire

// function entierAleatoire(min, max) {
//  return parseInt(Math.random() * (max - min) + min);
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



// var entier = entierAleatoire(1, 100),
// nmbr = prompt ("Entrez un nombre entre 1 et 100"),
// tabcompt = [];

// tabcompt.push(nmbr);

// while (nmbr != entier) {
// if (nmbr < entier) {
// nmbr = prompt ("Entrez un nombre plus grand");
// }
// else {
// nmbr = prompt ("Entrez un nombre plus petit");
// }
// tabcompt.push(nmbr);
// }

// for (var i = 0; i < tabcompt.length; i++) 
// {
// console.log (tabcompt[i]); 
// }

// alert ("Bravo, tu as gagné en " + tabcompt.length + " coups");

// function entierAleatoire(min, max) {
// return parseInt(Math.random() * (max - min) + min);
// }
// 
// 

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// var tab = ['hortense|500', 'hortense|300', 'ludovina|25', 'ludovina|50'],
// total = 0, depense = [];

// for (var i = 0; i < tab.length; i++) {
// 	var depense=tab[i].split('|');
// 	total = total + Number(depense[1]);
// }



// console.log (total)
// 

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// var tab = [['chocolat','lait'],['noisette','caramel']],
// tab1 = [];

// for (var i = 0; i < tab.length; i++) {
// 	tab1=tab[i];
// 	for (var j = 0; j < tab1.length; j++) {
// 		console.log(tab1[j]);
// 	}
// }
// 
// 
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 


// 
// 
// 
// 
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Objets
// 
// var chat = {
// 	color: "black",
// 	name: "Smith",
// 	disBonjour: function(nom) 
// 	{
// 		alert("Bonjour" + nom + " je m'apelle " + this.name)
// 	}
// }

// alert(chat.color);
// alert(chat.name);



// var chat2 = {
// 	color: "white",
// 	name: "Weathon",
// 	laisse: {
// 		color:"blue",
// 	}
// }

// chat.disBonjour (" Thibault")

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// constructeur de chats


// function Chat(a,b)
// {
// 	this.name = a;
// 	this.color = b;
// 	this.disBonjour=function(x) 
// 	{
// 		alert("Bonjour" + x + " je m'appelle" +this.name);
// 	}
// }

// var chat1 = new Chat (' Lionel Messi', "blanche");
// var chat2 = new Chat (' Cristiano Ronaldo', "portuguaise");
// var chat3 = new Chat (' Roger Federer', "brillant");
// chat1.disBonjour(chat2.name);


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 
// 
// 
// 
// 
// 


var code;


while ((code != '+') && (code != '-') && (code != '/') && (code !='*'))
{
    code = prompt('Saisir un code opération entre +, -, / et *:');
   
}
var num1 = Number(prompt('Saisir votre premier nombre:')),
num2 = Number(prompt('Saisir votre deuxième nombre:')),
operation1 = new Operation(num1, num2);
if (code=='+')
{ 
    operation1.add(num1,num2);
}

else if (code=='-')
{
    operation1.sous(num1,num2);
}

else if (code=='/')
{ 
    operation1.div(num1,num2);
}

else {
    operation1.mul(num1,num2);
}


function add(a,b)
{
    return console.log(a+b);
}

function sous(a,b)
{
    return console.log(a-b);
}

function div(a,b)
{ 
    return console.log(a/b);
} 

function mul(a,b)
{
    return console.log(a*b);
}

function Operation(x,y)

{
	this.x = Number(x);

	this.y = Number(y);

	this.add = function (){
		return(this.x + this.y)
	};

	this.mul = function(){
		return(this.x * this.y)
	};

	this.div = function (){
		return(this.x / this.y)
	};

	this.sous = function (){
		return(this.x - this.y)
	};
} 