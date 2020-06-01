
class activity{
	constructor(name, tags = [], inputs = [], buttons = [], lists = []){
		this.name = name
		this.tags = tags
		this.inputs = inputs
		this.buttons = buttons
		this.lists = lists
	}
	updateText(id, text){
		for (var i = this.tags.length - 1; i >= 0; i--) {
			this.tags[i].updateText(id, text)
		}
	}
	addText(gameState, key){
		if(gameState == this.name){
			for (var i = this.inputs.length - 1; i >= 0; i--) {
				this.inputs[i].addText(key)
			}
		}
	}
	delText(gameState, keyCode){
		if(gameState == this.name){
			if (keyCode === 8) {
				for (var i = this.inputs.length - 1; i >= 0; i--) {
					this.inputs[i].delText()
				}
			}
		}
	}
	updateGenre(gameState, mousePressed){
		if(gameState == this.name){
			for (var i = this.inputs.length - 1; i >= 0; i--) {
				this.inputs[i].updateGenre(mousePressed)
			}
			for (var i = this.buttons.length - 1; i >= 0; i--) {
				this.buttons[i].updateGenre(mousePressed)
			}
		}
	}
	updateList(text, list){
		for (var i = this.lists.length - 1; i >= 0; i--) {
				this.lists[i].updateList(text, list)
			}
	}
	show(gameState){
		if(gameState == this.name){
			for (var i = this.inputs.length - 1; i >= 0; i--) {
				this.inputs[i].show()
			}
			for (var i = this.buttons.length - 1; i >= 0; i--) {
				this.buttons[i].show()
			}
			for (var i = this.tags.length - 1; i >= 0; i--) {
				this.tags[i].show()
			}
			for (var i = this.lists.length - 1; i >= 0; i--) {
				this.lists[i].show()
			}
		}
	}	
}