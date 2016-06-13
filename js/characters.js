function Chara(nomen, img, rank, prof, stam, def, shards, chri, comb, magi, sanc, scou, thie, poss, desc) {
	this.nomen = nomen;
	this.img = img;
	this.rank = rank;
	this.prof = prof;
	this.stam = stam;
	this.def = def;
	this.shards = shards;
	this.chri = chri;
	this.comb = comb;
	this.magi = magi;
	this.sanc = sanc;
	this.scou = scou;
	this.thie = thie;
	this.poss = poss;
	this.desc = desc;
}

var Liana = new Chara("Liana the Swift", "Liana.png", 2, "Wayfarer", 13, 8, 16,
	2, 5, 2, 3, 6, 4,
	["spear", "leather jerkin", "map"],
	"Liana prefers to make her home in mountain grottos and woodland groves rather than in the squalid streets of cities. She has the agility of a gazelle, the cunning of a fox and the ferocity of an eagle. Despite her wild streak, she has a knack of making friends, for people sense that she is honest and trustworthy.");

var Andriel = new Chara("Andriel the Hammer", "Andriel.png", 2, "Warrior", 13, 9, 16,
	3, 6, 2, 4, 3, 2,
	["battle-axe", "leather jerkin", "map"],
	"Andriel seeks fame through adventure and the glory of battle. He left his homeland when an extended outbreak of peace made his skills redundant there. He is blunt and outpoken, but scrupulously follows the warrior's code. if someone crosses him, he will use all the means at his disposal to get revenge.");

var Ignatius = new Chara("Ignatius the Devout", "Ignatius.png", 2, "Priest", 13, 5, 16,
	4, 2, 3, 6, 4, 2,
	["mace", "leather jerkin", "map"],
	"Ignatius is a traveler whose desire is to learn all he can about the deities of these Fabled Lands. His strong beliefs give his sermons added zest, and he has enthralled many a crowd with his impassioned speeches. He has sworn to stamp out impiety wherever he finds it.");

var Chalor = new Chara("Chalor the Exiled One", "Chalor.png", 2, "Mage", 13, 5, 16,
	2, 2, 6, 1, 5, 3,
	["staff", "leather jerkin", "map"],
	"Chalor is an outcast by choice, shunning his native land and the family who spurned him, driven by a burning desire for secret knowledge. His goal is to become one of the mightiest wizards of the world, and he is determined that nothing will stand in his way.");

var Marana = new Chara("Marana Fireheart", "Marana.png", 2, "Rogue", 13, 7, 16,
	5, 4, 4, 1, 2, 6,
	["sword", "leather jerkin", "map"],
	"Marana is a fiercely independent woman who grew up in the backstreets of her home town. Forced to flee because she was too active in her chosen profession, she has come to new lands to seek her fortune. Devious, resourceful, personable and intelligent, she can break in almost anywhere--and talk her way out afterwards! She is determined to get rich any way she can.");

var Astariel = new Chara("Astariel Skysong", "Astariel.png", 2, "Troubador", 13, 6, 16,
	6, 3, 4, 3, 2, 4,
	["sword", "leather jerkin", "map"],
	"Astariel has the wanderlust, and chafes if he has to remain in one place for any length of time. He enjoys the freedom of the open road and the thought that he never knows what adventures each new day will bring. He lives by his wits and is a familiar figure at tavern firesides, where he regales travelers with his tales.");

var allChara = [Liana, Andriel, Ignatius, Chalor, Marana, Astariel];