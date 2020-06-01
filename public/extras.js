
//[229, 229, 229], 	//white
//[204, 204, 204], 	//gray
//[102, 102, 102]		//Black
//[69,69,69] // even blacker

class Dye {

	constructor(r, g, b) {
		
		this.r = r;
		this.g = g;
		this.b = b;
	}	
}

class Position {

	constructor(x, y) {
		
		this.x = x;
		this.y = y;
	}	
}

class Size {

	constructor(base, altura, por = 0) {
		
		this.base = base;
		this.altura = altura;
		this.por = por;
	}	
}

class Genre {

	constructor(type, subtype="", subsubtype="") {

		this.type = type
		this.subtype = subtype
		this.subsubtype = subsubtype
	}
}

