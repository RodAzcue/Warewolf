
class guiObject{
	constructor(position, size, genre, text = ""){
		this.position = position
		this.size = size
		this.genre = genre
		this.text = text
	}
	show(){
		if(this.genre.type == "text"){
			if(this.genre.subtype == "title"){
				noStroke()
			 	fill(69)
			 	textSize(this.size.altura)
			 	textAlign(CENTER);
				text(this.text, this.position.x, this.position.y)
			}
			if(this.genre.subtype == "tag"){
				noStroke()
			 	fill(69)
			 	textSize(this.size.altura)
			 	textAlign(RIGHT);
				text(this.text, this.position.x, this.position.y)
			}
		}
		if(this.genre.type == "input"){
			if(this.genre.subtype == "unpressed"){
				noStroke()
				rectMode(CORNER)
				fill(229)
				rect(this.position.x, this.position.y - this.size.por * 5.7, this.size.base, this.size.altura, this.size.por)

				noStroke()
			 	fill(69)
			 	textSize(this.size.altura - this.size.altura/4)
			 	textAlign(LEFT);
				text(this.text, this.position.x + this.size.por, this.position.y - this.size.por*.4)
			}
			if(this.genre.subtype == "pressed"){
				strokeWeight(this.size.por/2.5)
				stroke(69)
				rectMode(CORNER)
				fill(229)
				rect(this.position.x, this.position.y - this.size.por * 5.7, this.size.base, this.size.altura, this.size.por)

				noStroke()
			 	fill(69)
			 	textSize(this.size.altura - this.size.altura/4)
			 	textAlign(LEFT);
				text(this.text, this.position.x + this.size.por, this.position.y - this.size.por*.4)
			}
		}
		if(this.genre.type == "button"){
			if(this.genre.subtype == "unpressed"){
				strokeWeight(this.size.por)
				stroke(229)
				rectMode(CORNER)
				fill(229)
				rect(this.position.x, this.position.y - this.size.por * 5.1, this.size.base, this.size.altura, this.size.por)

				noStroke()
			 	fill(69)
			 	textSize(this.size.altura - this.size.altura/10)
			 	textAlign(CENTER);
				text(this.text, this.position.x + this.size.base/2, this.position.y + this.size.por*.3)
			}
			if(this.genre.subtype == "pressed"){
				noStroke()
				rectMode(CORNER)
				fill(229)
				rect(this.position.x, this.position.y - this.size.por * 5.1, this.size.base, this.size.altura, this.size.por)

				noStroke()
			 	fill(69)
			 	textSize(this.size.altura - this.size.altura/10)
			 	textAlign(CENTER);
				text(this.text, this.position.x + this.size.base/2, this.position.y + this.size.por*.3)
			}
		}
	}
	updateInfo(position, size, genre = this.genre, text = this.text){
		this.position = position
		this.size = size
		this.genre = genre
		this.text = text
	}
}

class tag extends guiObject{
	constructor(position, size, genre, text){
		super(position, size, genre, text)
	}
	show(){super.show()}
	updateInfo(position, size, genre, text){super.updateInfo(position, size, genre, text)}
}

class button extends guiObject{
	constructor(position, size, genre, text){
		super(position, size, genre, text)
	}
	show(){super.show()}
	updateInfo(position, size, genre, text){super.updateInfo(position, size, genre, text)}
	updateGenre(mousePressed){
		if(mousePressed == true){
			if(this.colition()){
				this.genre.subtype = "pressed"
				eventButtonPressed()
			}else{
				this.genre.subtype = "unpressed"
			}
		}else{
			this.genre.subtype = "unpressed"
		}

	}
	colition() {
	return abs(mousePosition.x - (this.position.x + this.size.base / 2)) < (0.5) + (this.size.base / 2) && 
			abs(mousePosition.y - (this.position.y - (this.size.por * 5.1) + this.size.altura / 2)) < (0.5) + (this.size.altura / 2);
	}
}

class input extends guiObject{
	constructor(position, size, genre, text){
		super(position, size, genre, text)
	}
	show(){super.show()}
	updateInfo(position, size, genre, text){super.updateInfo(position, size, genre, text)}
	updateGenre(mousePressed){
		if(this.colition()){
			this.genre.subtype = "pressed"
		}else{
			this.genre.subtype = "unpressed"
		}
	}
	addText(text, num){
		if(this.genre.subtype == "pressed"){
			if(this.text.length < num){
				this.text += text
			}
		}
	}
	deleteText(){
		if(this.genre.subtype == "pressed"){
			this.text = this.remove_character(this.text, this.text.length - 1)
		}
	}
	remove_character(str, char_pos) {
  		let part1 = str.substring(0, char_pos)
  		let part2 = str.substring(char_pos + 1, str.length)
  		return (part1 + part2)
 	}
	colition() {
	return abs(mousePosition.x - (this.position.x + this.size.base / 2)) < (0.5) + (this.size.base / 2) && 
			abs(mousePosition.y - (this.position.y - (this.size.por * 5.1) + this.size.altura / 2)) < (0.5) + (this.size.altura / 2);
	}
}

