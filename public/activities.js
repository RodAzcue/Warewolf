function addText(){
	if(game.state == "login"){
		nameInput.addText(key, 10)
		if(key == 0 || key == 1 || key == 2 || key == 3 ||key == 4 || key == 5 || key == 6 || key == 7 || key == 8 || key == 9){
			idInput.addText(key, 4)
		} 
	}
}
function delText() {
	if(game.state == "login"){
		if (keyCode === 8) {
	    	nameInput.deleteText()
	    	idInput.deleteText()
	    }
	}
}

function create(){
	if(game.state == "login"){
		nameInput = new input(new Position(cnv.base/2, cnv.altura/2.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("input","unpressed"))
	  	idInput = new input(new Position(cnv.base/2, cnv.altura/2), new Size(cnv.base/15, cnv.base/30, cnv.por), new Genre("input","unpressed"))
	  	hostButton = new button(new Position(cnv.base/2 + cnv.por, cnv.altura/1.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("button","unpressed"), "Host")
	  	joinButton = new button(new Position(cnv.base/2 - cnv.base/7 - cnv.por, cnv.altura/1.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("button","unpressed"), "Join")

	  	textName = new tag(new Position(cnv.base/2, cnv.altura/2.5), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "Name ")
	  	textID = new tag(new Position(cnv.base/2, cnv.altura/2), new Size(cnv.base/7, cnv.base/30, cnv.por), new Genre("text","tag"), "ID ")
	  	title = new tag(new Position(cnv.base/2, cnv.altura/6), new Size(cnv.base/7, cnv.base/15, cnv.por), new Genre("text","title"), "Warewolf")
	}
}
function updateGenre(mousePressed){
	if(game.state == "login"){
		hostButton.updateGenre(mousePressed)
		joinButton.updateGenre(mousePressed)
		nameInput.updateGenre(mousePressed)
		idInput.updateGenre(mousePressed)
	}
}
function updateInfo() {
	if(game.state == "login"){
		nameInput.updateInfo(new Position(cnv.base/2, cnv.altura/2.5), new Size(cnv.base/7, cnv.base/30, cnv.por))
		idInput.updateInfo(new Position(cnv.base/2, cnv.altura/2), new Size(cnv.base/15, cnv.base/30, cnv.por))
		hostButton.updateInfo(new Position(cnv.base/2, cnv.altura/1.5), new Size(cnv.base/7, cnv.base/30, cnv.por))
		joinButton.updateInfo(new Position(cnv.base/2 - cnv.base/7 - cnv.por, cnv.altura/1.5), new Size(cnv.base/7, cnv.base/30, cnv.por))
		
		textName.updateInfo(new Position(cnv.base/2, cnv.altura/2.5), new Size(cnv.base/7, cnv.base/30, cnv.por))
		textID.updateInfo(new Position(cnv.base/2, cnv.altura/2), new Size(cnv.base/7, cnv.base/30, cnv.por))
		title.updateInfo(new Position(cnv.base/2, cnv.altura/6), new Size(cnv.base/7, cnv.base/15, cnv.por))
	}
}
function show(){
	if(game.state == "login"){
		nameInput.show()
		idInput.show()
		hostButton.show()
		joinButton.show()
		textName.show()
		textID.show()
		title.show()
	}
}