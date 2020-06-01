




class gameGui{
	constructor(login,lobby/*,clock,votes,anoucements,night*/){
		this.login = login
		this.lobby = lobby
		/*
		this.clock = clock
		this.votes = votes
		this.anoucements = anoucements
		this.night = night
		*/
	}
	updateTexts(text1,text2){
		if(game.state == "lobby"){
			this.lobby.updateText("host",text1)
			this.lobby.updateText("id",text2)
		}
	}
	addText(gameState, key){
		this.login.addText(gameState, key)
	}
	delText(gameState, keyCode){
		this.login.delText(gameState, keyCode)
	}
	updateGenre(gameState, mousePressed){
		this.login.updateGenre(gameState, mousePressed)
		this.lobby.updateGenre(gameState, mousePressed)
	}
	show(gameState){
		this.login.show(gameState)
		this.lobby.show(gameState)
	}
	updateLists(list){
		if(game.state == "lobby"){
			this.lobby.updateList("players", list)
		}
	}
}