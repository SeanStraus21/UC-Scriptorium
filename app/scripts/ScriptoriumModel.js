var Book = function(def){
	this.title = def.title; //the title of the book
	this.author = def.author; //author of the book
	this.year = def.year; //year published
	this.text = def.text; //the actual text
	this.version = def.version; //version of the book
	this.publisher = def.publisher; //the publisher of the current edition
};

var library = {
"the art of war":new Book({"title":"the art of war","author":"sun tzu","year":"600 BC"}),
"the bible":new Book({"title":"the bible","author":"god","year":"AD 400","version":"vulgate"}),
"the prince":new Book({"title":"the prince","author":"niccolo machiavelli","year":"AD 1500"}),
"the book of the five rings":new Book({"title":"the book of the five rings","author":"musashi miyamoto","year":"AD 1585"}),
"the hagakure":new Book({"title":"the hagakure","author":"tsunetomo yamamoto","year":"AD 1585"}),
"the republic":new Book({"title":"the republic","author":"plato","year":"200 BC"}),
"orthodoxy":new Book({"title":"orthodoxy","author":"gilbert chesterton","year":"AD 1845"}),
"macbeth":new Book({"title":"macbeth","author":"william shakespeare","year":"AD 1645"}),
"canterbury tales":new Book({"title":"canterbury tales","author":"geoffrey chaucer","year":"AD 1545"}),
"the nichomachean ethics":new Book({"title":"the nichomachean ethics","author":"aristotle","year":"100 BC"}),
"beyond good and evil":new Book({"title":"beyond good and evil","author":"friedrich nietchze","year":"AD 1920"}),
"the hobbit":new Book({"title":"the hobbit","author":"john tolkien","year":"AD 1940"}),
"the closing of the american mind":new Book({"title":"the closing of the american mind","author":"allan bloom","year":"AD 1980"}),
"summa theologia":new Book({"title":"summa theologia","author":"thomas aquinas","year":"AD 1200"}),
"warhammer rulebook":new Book({"title":"warhammer rulebook","author":"games workshop","year":"AD 2014"}),
};


//get keys as an iterable array
var catalogue = Object.keys(library);

//create a table to store books sorted by year
var yearTable = {};

//create a dictionary that uses years as keys and contains arrays of books written in that year
var l = catalogue.length;
for (i=0;i<l;i++){
	if (yearTable[library[catalogue[i]].year] == null){
		yearTable[library[catalogue[i]].year] = [library[catalogue[i]]];
	}else{
		yearTable[library[catalogue[i]].year].push(library[catalogue[i]]);
	}
}

var yearList = Object.keys(yearTable);

